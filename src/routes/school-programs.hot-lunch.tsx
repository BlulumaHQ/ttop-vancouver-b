import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";
import { hotLunchSections } from "@/data/schoolPrograms";
import { SchoolConsultationForm } from "@/components/SchoolConsultationForm";

export const Route = createFileRoute("/school-programs/hot-lunch")({
  head: () => ({
    meta: [
      { title: "School Hot Lunch Program | TTOP Chicken" },
      { name: "description", content: "Organized hot lunch program for schools featuring class-by-class sorting, clear labels, insulated transport, and coordinated delivery." },
      { property: "og:title", content: "School Hot Lunch Program | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/school-programs/hot-lunch" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/school-programs/hot-lunch" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Program"
        heading="School Hot Lunch Without the Midday Confusion"
        intro="An organized meal-service process built around class sorting, clear labels, insulated transport, and coordinated delivery."
      />

      <section className="container-page py-16">
        <ol className="grid gap-6 md:grid-cols-2">
          {hotLunchSections.map((s, i) => (
            <li key={s.title} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
              <span className="font-mono text-xs font-bold text-[color:var(--color-brand-red)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 font-serif text-xl text-[color:var(--color-brand-navy)]">{s.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--color-brand-text-2)]">{s.body}</p>
              {s.note && (
                <p className="mt-3 rounded-md bg-[color:var(--color-brand-soft-blue)] p-3 text-xs text-[color:var(--color-brand-navy)]">
                  {s.note}
                </p>
              )}
            </li>
          ))}
        </ol>

        <section className="mt-14 rounded-md bg-[color:var(--color-brand-navy)] p-6 text-white md:p-10">
          <h2 className="font-serif text-2xl text-white md:text-3xl">Discuss a Hot Lunch Program</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Share your school’s details and TTOP will follow up to discuss options.
          </p>
          <div className="mt-6 rounded-md bg-white p-6 text-[color:var(--color-brand-navy)]">
            <SchoolConsultationForm />
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
