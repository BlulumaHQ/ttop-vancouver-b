import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";
import { montessoriSections, montessoriGoals } from "@/data/schoolPrograms";
import { SchoolConsultationForm } from "@/components/SchoolConsultationForm";

export const Route = createFileRoute("/school-programs/montessori-daycare")({
  head: () => ({
    meta: [
      { title: "Montessori & Daycare Meals | TTOP Chicken" },
      { name: "description", content: "Daily meal program for Montessori centres and daycares featuring age-appropriate portions, rotating textures, and calm delivery." },
      { property: "og:title", content: "Montessori & Daycare Meals | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/school-programs/montessori-daycare" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/school-programs/montessori-daycare" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Program"
        heading="Daily Montessori & Daycare Meals"
        intro="A daily meal program designed to make lunch a natural extension of the prepared classroom environment."
      />
      <section className="container-page py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {montessoriSections.map((s) => (
            <li key={s.title} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
              <h2 className="font-serif text-xl text-[color:var(--color-brand-navy)]">{s.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--color-brand-text-2)]">{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-md border-l-4 border-[color:var(--color-brand-red)] bg-white p-6">
          <h2 className="font-serif text-2xl text-[color:var(--color-brand-navy)]">Program Goals</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {montessoriGoals.map((g) => (
              <li key={g} className="flex items-start gap-2 text-sm text-[color:var(--color-brand-navy)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-red)]" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-12 rounded-md bg-[color:var(--color-brand-cream)] p-8 text-center">
          <p className="mx-auto max-w-2xl font-serif text-xl italic text-[color:var(--color-brand-navy)]">
            “The children finished everything. There was not a bite left, and now they keep asking when the lunch delivery will return.”
          </p>
          <cite className="mt-3 block text-xs font-bold uppercase tracking-widest not-italic text-[color:var(--color-brand-red)]">
            — Cambie Montessori
          </cite>
        </blockquote>

        <div className="mt-12 rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
          <h2 className="font-serif text-2xl text-[color:var(--color-brand-navy)]">Allergy and Dietary Notice</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-brand-text-2)]">
            Dietary and allergy requirements must be discussed directly with TTOP before service begins. Do not submit student names, medical records, or sensitive personal health information through the website form.
          </p>
        </div>

        <section className="mt-14 rounded-md bg-[color:var(--color-brand-navy)] p-6 text-white md:p-10">
          <h2 className="font-serif text-2xl text-white md:text-3xl">Request a Consultation</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Share a few details and we’ll follow up to discuss options for your centre.
          </p>
          <div className="mt-6 rounded-md bg-white p-6 text-[color:var(--color-brand-navy)]">
            <SchoolConsultationForm />
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
