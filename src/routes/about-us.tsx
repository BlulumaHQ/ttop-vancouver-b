import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SteamRibbon } from "@/components/SteamRibbon";
import { business } from "@/data/business";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | TTOP Chicken" },
      { name: "description", content: "TTOP Chicken was founded in Richmond in 2014 by brothers Eric and Albert, honouring three generations of Taiwanese family cooking traditions." },
      { property: "og:title", content: "About Us | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/about-us" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/about-us" }],
  }),
  component: Page,
});

const sections = [
  {
    eyebrow: "01",
    title: "Founded in Richmond",
    body: "TTOP was founded in Richmond in 2014 by brothers Eric and Albert, two first-generation Taiwanese immigrants whose connection to food began with the meals that shaped their childhood.",
  },
  {
    eyebrow: "02",
    title: "Inspired by Family",
    body: "Rooted in three generations of family cooking traditions, TTOP is a tribute to the grandmother and father who taught them. It is both a restaurant and a way to preserve the flavours, techniques, and memories that travelled with their family from Taiwan.",
  },
  {
    eyebrow: "03",
    title: "Taiwanese Flavours, Reintroduced",
    body: "Signature Hua Diao chicken pots, classic bentos, street food, and drinks anchor the menu. Each dish is designed to introduce Richmond diners to the flavours the brothers grew up with.",
  },
  {
    eyebrow: "04",
    title: "From Restaurant Meals to Home and School Programs",
    body: "Over time, TTOP has extended its kitchen through frozen dishes, catering, and organized school meal programs, allowing more families, offices, and schools to enjoy Taiwanese cooking beyond the restaurant.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About TTOP Chicken"
        heading="A Family Story, Three Generations in the Making"
      />
      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/ttop/brand/ttop-banner-1.png"
              alt="TTOP Chicken brand image"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[color:var(--color-brand-text-2)]">
              TTOP was founded in Richmond in 2014 by brothers Eric and Albert, two first-generation Taiwanese immigrants whose connection to food began with the meals that shaped their childhood.
            </p>
            <p className="mt-4 text-[color:var(--color-brand-text-2)]">
              Rooted in three generations of family cooking traditions, TTOP is a tribute to the grandmother and father who taught them. It is both a restaurant and a way to preserve the flavours, techniques, and memories that travelled with their family from Taiwan.
            </p>
            <p className="mt-4 text-[color:var(--color-brand-text-2)]">
              Through signature Hua Diao chicken pots, classic bentos, street food, frozen dishes, catering, and school meal programs, Eric and Albert continue sharing those flavours with the Richmond community.
            </p>
          </div>
        </div>

        <ol className="mt-16 space-y-8">
          {sections.map((s, i) => (
            <>
              {i === 2 && (
                <li key="ribbon" aria-hidden="true" className="flex justify-center py-4">
                  <SteamRibbon className="h-6 w-56 opacity-70" />
                </li>
              )}
              <li key={s.title} className="rounded-md border-l-4 border-[color:var(--color-brand-red)] bg-white p-6 md:p-8">
                <span className="font-mono text-xs font-bold text-[color:var(--color-brand-red)]">{s.eyebrow}</span>
                <h2 className="mt-1 font-serif text-2xl text-[color:var(--color-brand-navy)]">{s.title}</h2>
                <p className="mt-3 text-[color:var(--color-brand-text-2)]">{s.body}</p>
              </li>
            </>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
