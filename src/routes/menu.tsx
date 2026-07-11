import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { OrderOnlineButton } from "@/components/Buttons";
import { SteamRibbon } from "@/components/SteamRibbon";
import { business } from "@/data/business";
import { menuCategories, menuCategoryNav, menuNotice, loyaltyProgram } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | TTOP Chicken" },
      { name: "description", content: "Signature Hua Diao chicken pots, Taiwanese bentos, rice bowls, street food, drinks, and the ChuChu Bar at TTOP Chicken in Richmond, BC." },
      { property: "og:title", content: "Menu | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/menu" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Restaurant Menu"
        heading="Taiwanese Comfort Food, Made the TTOP Way"
        intro="Explore signature pots, bentos, rice bowls, street food, side dishes, drinks, ChuChu Bar selections, and frozen products."
      >
        <SteamRibbon className="h-5 w-40" />
        <div className="mt-6 flex flex-wrap gap-3">
          <OrderOnlineButton />
          <a
            href={loyaltyProgram.pdfUrl}
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-brand-blue)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-blue)]"
          >
            <Download className="h-4 w-4" /> Loyalty Program PDF
          </a>
        </div>
        <p className="mt-6 rounded-md bg-[color:var(--color-brand-soft-blue)] px-4 py-3 text-sm text-[color:var(--color-brand-navy)]">
          {menuNotice}
        </p>
      </PageHero>

      {/* Sticky category nav */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[76px] z-20 border-b border-[color:var(--color-brand-border)] bg-white/95 backdrop-blur"
      >
        <div className="container-page">
          <ul className="flex gap-2 overflow-x-auto py-3">
            {menuCategoryNav.map((c) => (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  className="inline-flex items-center rounded-full border border-[color:var(--color-brand-border)] bg-white px-4 py-1.5 text-xs font-semibold text-[color:var(--color-brand-navy)] hover:border-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-blue)]"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container-page py-12 md:py-16">
        <div className="space-y-16">
          {menuCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-[160px]">
              <header className="border-b border-[color:var(--color-brand-red)]/40 pb-4">
                <p className="eyebrow">Section</p>
                <h2 className="mt-2 font-serif text-3xl text-[color:var(--color-brand-navy)] md:text-4xl">
                  {cat.title}
                </h2>
                {cat.intro && (
                  <p className="mt-2 text-sm text-[color:var(--color-brand-text-2)]">{cat.intro}</p>
                )}
              </header>

              <ul className="mt-6 divide-y divide-[color:var(--color-brand-border)] rounded-md border border-[color:var(--color-brand-border)] bg-white">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        {item.code && (
                          <span className="text-xs font-bold text-[color:var(--color-brand-red)]">{item.code}</span>
                        )}
                        <h3 className="font-sans text-base font-semibold text-[color:var(--color-brand-navy)]">
                          {item.name}
                        </h3>
                        {item.tags?.map((t) => (
                          <span
                            key={t}
                            className={`rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              t === "Vegetarian"
                                ? "bg-emerald-100 text-emerald-800"
                                : t === "Spicy"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {item.note && (
                        <p className="mt-1 text-xs text-[color:var(--color-brand-text-2)]">{item.note}</p>
                      )}
                    </div>
                    {item.price && (
                      <span className="shrink-0 font-mono text-sm font-semibold text-[color:var(--color-brand-navy)]">
                        {item.price}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {cat.options && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {cat.options.map((opt) => (
                    <div key={opt.title} className="rounded-md border border-dashed border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-cream)] p-5">
                      <h4 className="font-serif text-lg text-[color:var(--color-brand-navy)]">{opt.title}</h4>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {opt.entries.map((e) => (
                          <li key={e.name} className="flex items-baseline justify-between gap-3">
                            <span className="text-[color:var(--color-brand-text)]">{e.name}</span>
                            <span className="font-mono text-xs font-semibold text-[color:var(--color-brand-text-2)]">{e.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Frozen foods link section */}
          <section id="frozen-foods" className="scroll-mt-[160px] rounded-md bg-[color:var(--color-brand-navy)] p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-brand-red)]">Take-home</p>
            <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">Frozen Foods</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Explore prepared meals, sauces, frozen noodle dishes, marinated products, and ingredients from TTOP’s owner-supplied frozen food catalogue.
            </p>
            <a
              href="/frozen-foods"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-red)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              View Frozen Food Catalogue
            </a>
          </section>

          {/* Loyalty */}
          <section id="loyalty-program" className="scroll-mt-[160px]">
            <p className="eyebrow">Rewards</p>
            <h2 className="mt-2 font-serif text-3xl text-[color:var(--color-brand-navy)] md:text-4xl">{loyaltyProgram.title}</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6 lg:col-span-1">
                <h3 className="font-serif text-lg text-[color:var(--color-brand-navy)]">How it works</h3>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-brand-text-2)]">
                  {loyaltyProgram.rules.map((r) => <li key={r}>• {r}</li>)}
                </ul>
                <a
                  href={loyaltyProgram.pdfUrl}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:underline"
                >
                  <ExternalLink className="h-4 w-4" /> View Loyalty Program Details
                </a>
              </div>
              <div className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6 lg:col-span-2">
                <h3 className="font-serif text-lg text-[color:var(--color-brand-navy)]">Rewards</h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {loyaltyProgram.rewards.map((r) => (
                    <li key={r.stars} className="flex items-baseline justify-between gap-3 border-b border-dashed border-[color:var(--color-brand-border)] py-2 text-sm">
                      <span className="font-mono font-bold text-[color:var(--color-brand-red)]">{r.stars}★</span>
                      <span className="text-right text-[color:var(--color-brand-navy)]">{r.reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 rounded-md bg-[color:var(--color-brand-soft-blue)] p-3 text-xs text-[color:var(--color-brand-navy)]">
              {loyaltyProgram.disclaimer}
            </p>
          </section>

          {/* Menu scans as secondary reference */}
          <section aria-labelledby="original-menu-heading">
            <h2 id="original-menu-heading" className="font-serif text-2xl text-[color:var(--color-brand-navy)]">Original Menu Sheets</h2>
            <p className="mt-2 text-sm text-[color:var(--color-brand-text-2)]">
              For reference only. See the interactive menu above for the current listings.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "/images/ttop/menu/menu-blue-1.jpg",
                "/images/ttop/menu/menu-blue-2.jpg",
                "/images/ttop/menu/menu-red-1.jpg",
                "/images/ttop/menu/menu-red-2.jpg",
              ].map((src) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md border border-[color:var(--color-brand-border)] bg-white">
                  <img src={src} alt="Original TTOP Chicken menu sheet" loading="lazy" className="aspect-[3/4] w-full object-cover" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
