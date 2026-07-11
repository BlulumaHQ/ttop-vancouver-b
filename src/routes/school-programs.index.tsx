import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";
import { schoolTestimonials, partnerSchools } from "@/data/reviews";
import { schoolBrochureUrl } from "@/data/schoolPrograms";
import { SchoolConsultationForm } from "@/components/SchoolConsultationForm";

export const Route = createFileRoute("/school-programs/")({
  head: () => ({
    meta: [
      { title: "School Meal Programs | TTOP Chicken" },
      { name: "description", content: "Calm, organized Taiwanese meal service for Montessori centres, daycares, and elementary schools." },
      { property: "og:title", content: "School Meal Programs | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/school-programs" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/school-programs" }],
  }),
  component: SchoolProgramsOverview,
});

function SchoolProgramsOverview() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="School Meal Programs"
        heading="Calm, Organized Meal Service for Schools and Childcare Centres"
        intro="TTOP provides two distinct school meal pathways: daily Montessori and daycare meals, and organized elementary school hot lunch programs. Each pathway is designed to reduce administrative friction and support a more orderly meal experience."
      >
        <div className="flex flex-wrap gap-3">
          <a href="#consultation" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-red)] px-5 py-2.5 text-sm font-semibold text-white">
            Request a School Meal Consultation
          </a>
          <a
            href={schoolBrochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-brand-blue)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-blue)]"
          >
            <Download className="h-4 w-4" /> Download Chinese Program Brochure
          </a>
        </div>
      </PageHero>

      {/* Two programs */}
      <section className="container-page py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProgramPanel
            title="Daily Montessori & Daycare Meals"
            body="Daily meal service designed to extend the prepared classroom environment to the lunch table through age-appropriate portions, bite-sized presentation, rotating textures and flavours, and a delivery process intended to minimize disruption."
            cta="Explore Montessori & Daycare Meals"
            to="/school-programs/montessori-daycare"
          />
          <ProgramPanel
            title="School Hot Lunch Program"
            body="An organized hot lunch model using class-by-class sorting, clearly labelled meals, insulated transport, and coordinated delivery planning to make distribution easier for school staff."
            cta="Explore School Hot Lunch"
            to="/school-programs/hot-lunch"
          />
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-[color:var(--color-brand-border)] bg-white py-16">
        <div className="container-page">
          <h2 className="font-serif text-3xl text-[color:var(--color-brand-navy)]">
            Schools Featured in TTOP’s Program Materials
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[color:var(--color-brand-text-2)]">
            TTOP’s owner-supplied school meal materials describe partnerships with schools across Greater Vancouver beginning in 2024.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partnerSchools.map((s) => (
              <li key={s} className="border-b border-dashed border-[color:var(--color-brand-border)] py-2 text-sm text-[color:var(--color-brand-navy)]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16">
        <p className="eyebrow">From participating schools</p>
        <h2 className="mt-2 font-serif text-3xl text-[color:var(--color-brand-navy)]">In their own words</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schoolTestimonials.map((t) => (
            <li key={t.school} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
              <blockquote className="text-sm leading-relaxed text-[color:var(--color-brand-navy)]">
                “{t.text}”
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-red)]">
                {t.school}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Consultation */}
      <section id="consultation" className="border-t border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-navy)] py-16 text-white scroll-mt-[100px]">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Discuss a Meal Program for Your School or Centre
            </h2>
            <p className="mt-4 text-white/80">
              Share a few details and TTOP will follow up to discuss options for your school or centre.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${business.emails.school}`} className="inline-flex items-center gap-2 text-white hover:underline">
                <Mail className="h-4 w-4" /> {business.emails.school}
              </a>
              <br />
              <a href={business.phoneHref} className="inline-flex items-center gap-2 text-white hover:underline">
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
          </div>
          <div className="rounded-md bg-white p-6 text-[color:var(--color-brand-navy)] lg:col-span-7">
            <SchoolConsultationForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProgramPanel({
  title, body, cta, to,
}: { title: string; body: string; cta: string; to: string }) {
  return (
    <article className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-8">
      <h3 className="font-serif text-2xl text-[color:var(--color-brand-navy)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-brand-text-2)]">{body}</p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:underline"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
