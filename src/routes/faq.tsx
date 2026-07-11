import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | TTOP Chicken" },
      { name: "description", content: "Answers to common questions about TTOP Chicken’s hours, ordering, catering, school meal programs, frozen foods, and loyalty rewards." },
      { property: "og:title", content: "FAQ | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/faq" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: Page,
});

function Page() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHero eyebrow="Support" heading="Frequently Asked Questions" />
      <section className="container-page py-12">
        <ul className="mx-auto max-w-3xl divide-y divide-[color:var(--color-brand-border)] rounded-md border border-[color:var(--color-brand-border)] bg-white">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-serif text-base font-semibold text-[color:var(--color-brand-navy)] md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--color-brand-blue)] transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[color:var(--color-brand-text-2)]">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </SiteLayout>
  );
}
