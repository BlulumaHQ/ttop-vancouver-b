import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TTOP Chicken" },
      { name: "description", content: "How TTOP Chicken’s informational website handles contact forms, external ordering, and visitor privacy." },
      { property: "og:title", content: "Privacy Policy | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/privacy-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero heading="Privacy Policy" />
      <article className="container-page prose prose-slate max-w-3xl py-12 text-[color:var(--color-brand-navy)]">
        <p>
          This page explains how the TTOP Chicken website handles visitor information. It reflects what this website actually does today.
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[color:var(--color-brand-text-2)]">
          <li>• This website does not create customer accounts.</li>
          <li>• This website does not process payments directly.</li>
          <li>• Online ordering occurs on the external ChatChefs platform.</li>
          <li>• Contact forms use the visitor’s email application and are not stored in a TTOP website database.</li>
          <li>• The website does not intentionally collect student names or medical records.</li>
          <li>• Visitors should not submit sensitive personal or health information.</li>
          <li>• External websites, including ChatChefs, Google, Instagram, and Facebook, have their own privacy practices.</li>
          <li>
            • Privacy questions may be sent to{" "}
            <a className="text-[color:var(--color-brand-blue)] underline" href={`mailto:${business.emails.general}`}>
              {business.emails.general}
            </a>.
          </li>
        </ul>
      </article>
    </SiteLayout>
  );
}
