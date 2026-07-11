import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Website Terms | TTOP Chicken" },
      { name: "description", content: "TTOP Chicken website terms covering information accuracy, external ordering, content usage, and third-party services." },
      { property: "og:title", content: "Website Terms | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/terms-of-service" }],
  }),
  component: Page,
});

const items = [
  "Website information is provided for general reference.",
  "Menu prices, products, hours, and availability may change.",
  "Online orders are completed through ChatChefs, an external platform.",
  "Orders placed through an external service are also subject to that service’s policies and terms.",
  "TTOP logos, photography, menu content, and website content may not be copied or commercially reused without permission.",
  "Visitors may not misuse the website or attempt to interfere with its operation.",
  "TTOP is not responsible for the content or operation of third-party websites.",
];

function Page() {
  return (
    <SiteLayout>
      <PageHero heading="Website Terms" />
      <article className="container-page max-w-3xl py-12">
        <p className="text-[color:var(--color-brand-text-2)]">
          By using the TTOP Chicken website, you agree to the following terms.
        </p>
        <ol className="mt-6 space-y-3 text-sm leading-relaxed text-[color:var(--color-brand-navy)]">
          {items.map((t, i) => (
            <li key={i} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-4">
              <span className="mr-2 font-mono text-xs font-bold text-[color:var(--color-brand-red)]">{String(i + 1).padStart(2, "0")}</span>
              {t}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-[color:var(--color-brand-text-2)]">
          Questions may be sent to{" "}
          <a className="text-[color:var(--color-brand-blue)] underline" href={`mailto:${business.emails.general}`}>
            {business.emails.general}
          </a>.
        </p>
      </article>
    </SiteLayout>
  );
}
