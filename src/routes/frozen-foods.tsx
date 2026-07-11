import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ExternalLink } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { OrderOnlineButton } from "@/components/Buttons";
import { business } from "@/data/business";
import { frozenProducts, frozenNotice, type FrozenCategory } from "@/data/frozenFoods";

export const Route = createFileRoute("/frozen-foods")({
  head: () => ({
    meta: [
      { title: "Frozen Foods | TTOP Chicken" },
      { name: "description", content: "TTOP’s frozen food catalogue: signature chicken pot, beef noodles, LOBA sauce, marinated products, and more, ready for home." },
      { property: "og:title", content: "Frozen Foods | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/frozen-foods" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/frozen-foods" }],
  }),
  component: Page,
});

const filters: (FrozenCategory | "All")[] = ["All", "Frozen Cooked Foods", "Frozen Raw Products"];

function Page() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = f === "All" ? frozenProducts : frozenProducts.filter((p) => p.category === f);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Frozen Foods"
        heading="TTOP Favourites, Ready for Home"
        intro="Explore prepared meals, sauces, frozen noodle dishes, marinated products, and ingredients from TTOP’s owner-supplied frozen food catalogue."
      >
        <p className="max-w-2xl rounded-md bg-[color:var(--color-brand-soft-blue)] p-3 text-sm text-[color:var(--color-brand-navy)]">
          {frozenNotice}
        </p>
      </PageHero>

      <section className="container-page py-12">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Frozen food categories">
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={f === label}
              onClick={() => setF(label)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${
                f === label
                  ? "border-[color:var(--color-brand-blue)] bg-[color:var(--color-brand-blue)] text-white"
                  : "border-[color:var(--color-brand-border)] bg-white text-[color:var(--color-brand-navy)] hover:border-[color:var(--color-brand-blue)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.code + p.name} className="flex flex-col rounded-md border border-[color:var(--color-brand-border)] bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-brand-cream)]">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-4" />
              </div>
              <div className="flex flex-1 flex-col border-t border-[color:var(--color-brand-border)] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-[color:var(--color-brand-red)]">{p.code}</span>
                    <h3 className="mt-1 font-serif text-lg leading-tight text-[color:var(--color-brand-navy)]">{p.name}</h3>
                  </div>
                  <span className="shrink-0 font-mono text-sm font-semibold text-[color:var(--color-brand-navy)]">{p.price}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-[color:var(--color-brand-text-2)]">
                  {p.category}
                </p>
                {p.details && (
                  <p className="mt-3 flex-1 text-sm text-[color:var(--color-brand-text-2)]">{p.details}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={business.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-brand-blue)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-brand-blue)] hover:bg-[color:var(--color-brand-soft-blue)]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Check Availability
                  </a>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--color-brand-red)] px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call to Pre-Order
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-md bg-[color:var(--color-brand-navy)] p-8 text-white md:p-12">
          <h2 className="font-serif text-2xl text-white md:text-3xl">Ask About a Large Order</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            For large frozen food orders, please contact TTOP at least one week in advance to confirm availability and coordinate pickup or delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={business.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-navy)]">
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
            <a href={`mailto:${business.emails.general}?subject=TTOP Large Frozen Food Order`} className="inline-flex items-center gap-2 rounded-md border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Email TTOP
            </a>
            <OrderOnlineButton />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
