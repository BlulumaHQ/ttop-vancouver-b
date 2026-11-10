import { describe, expect, test } from "bun:test";
import { applyIndexingPolicy, isHostingAlias } from "./indexing-policy";

const html = () => new Response("<html><head></head><body>TTOP</body></html>", {
  headers: { "Content-Type": "text/html; charset=utf-8" },
});

describe("domain-specific indexing", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} aliases get noindex on every nested HTML path`, async () => {
      for (const path of ["/", "/menu", "/school-programs/hot-lunch"]) {
        const original = html();
        const result = applyIndexingPolicy(new Request(`https://policy-test.${suffix}${path}`), original);
        expect(result.headers.get("X-Robots-Tag")).toBe("noindex");
        expect(result.status).toBe(200);
        expect(result.headers.get("Location")).toBeNull();
        expect(await result.text()).toBe("<html><head></head><body>TTOP</body></html>");
      }
    });
  }

  test("current canonical and future custom domains are left untouched", () => {
    // .example hosts are reserved test fixtures, not proposed deployment domains.
    for (const host of ["ttopchicken.ca", "future-custom.example", "www.future-custom.example", "lovable.app.custom.example", "notlovable.app", "localhost"]) {
      const original = html();
      expect(applyIndexingPolicy(new Request(`https://${host}/menu`), original)).toBe(original);
      expect(original.headers.get("X-Robots-Tag")).toBeNull();
    }
  });

  test("case, trailing DNS dot, and nested hosting aliases are classified", () => {
    expect(isHostingAlias("DRAFT.WORKSPACE.LOVABLE.APP.")).toBe(true);
    expect(isHostingAlias("preview.project.workers.dev")).toBe(true);
    expect(isHostingAlias("workers.dev.example")).toBe(false);
  });

  test("existing indexing directives are preserved on aliases and custom domains", () => {
    const original = new Response("page", { headers: {
      "Content-Type": "text/html", "X-Robots-Tag": "googlebot: noindex, nofollow",
    } });
    const result = applyIndexingPolicy(new Request("https://policy-test.pages.dev/"), original);
    expect(result.headers.get("X-Robots-Tag")).toBe("googlebot: noindex, nofollow, noindex");
    expect(original.headers.get("X-Robots-Tag")).toBe("googlebot: noindex, nofollow");
    expect(applyIndexingPolicy(new Request("https://ttopchicken.ca/"), original)).toBe(original);
  });

  test("forwarded-host spoofing cannot suppress or add noindex", () => {
    expect(applyIndexingPolicy(new Request("https://policy-test.workers.dev/", {
      headers: { "X-Forwarded-Host": "ttopchicken.ca" },
    }), html()).headers.get("X-Robots-Tag")).toBe("noindex");
    expect(applyIndexingPolicy(new Request("https://ttopchicken.ca/", {
      headers: { "X-Forwarded-Host": "policy-test.workers.dev" },
    }), html()).headers.get("X-Robots-Tag")).toBeNull();
  });

  test("HTML errors, XHTML and HEAD responses are protected without status changes", () => {
    for (const status of [200, 404, 500]) {
      const result = applyIndexingPolicy(new Request("https://policy-test.netlify.app/missing", { method: "HEAD" }),
        new Response(null, { status, headers: { "Content-Type": "application/xhtml+xml" } }));
      expect(result.headers.get("X-Robots-Tag")).toBe("noindex");
      expect(result.status).toBe(status);
      expect(result.body).toBeNull();
    }
  });

  test("JSON, images, downloads and redirects without HTML stay unchanged", () => {
    for (const mediaType of ["application/json", "image/webp", "application/pdf", "text/plain"]) {
      const original = new Response("asset", { headers: { "Content-Type": mediaType } });
      expect(applyIndexingPolicy(new Request("https://policy-test.lovable.app/file"), original)).toBe(original);
    }
    const redirect = new Response(null, { status: 302, headers: { Location: "/menu" } });
    expect(applyIndexingPolicy(new Request("https://policy-test.lovable.app/"), redirect)).toBe(redirect);
  });
});