import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, ImageOff } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { OrderOnlineButton } from "@/components/Buttons";
import { SteamRibbon } from "@/components/SteamRibbon";
import { business } from "@/data/business";
import {
  menuCategories,
  menuCategoryNav,
  menuNotice,
  loyaltyProgram,
  type MenuItem,
  type MenuOptionSection,
} from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | TTOP Chicken" },
      {
        name: "description",
        content:
          "See what TTOP Chicken serves: signature Hua Diao chicken pots, Taiwanese bentos, rice bowls, street food, drinks and the ChuChu Bar in Richmond, BC.",
      },
      { property: "og:title", content: "Menu | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/menu" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/menu" }],
  }),
  component: MenuPage,
});

function TagBadge({ t }: { t: string }) {
  const cls =
    t === "Vegetarian"
      ? "bg-emerald-100 text-emerald-800"
      : t === "Spicy"
        ? "bg-red-100 text-red-800"
        : "bg-amber-100 text-amber-800";
  return (
    <span
      className={`rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cls}`}
    >
      {t}
    </span>
  );
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[color:var(--color-brand-border)] bg-white transition hover:border-[color:var(--color-brand-blue)]">
      <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--color-brand-cream)]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[color:var(--color-brand-text-2)]">
            <ImageOff className="h-6 w-6 opacity-40" aria-hidden />
            <span className="px-3 text-center text-[11px] font-semibold uppercase tracking-wider">
              Photo coming soon
            </span>
          </div>
        )}
        {item.code && (
          <span className="absolute left-2 top-2 rounded-md bg-[color:var(--color-brand-blue)] px-2 py-1 font-mono text-sm font-bold leading-none text-white shadow-sm">
            {item.code}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="font-sans text-sm font-semibold leading-tight text-[color:var(--color-brand-navy)]">
          {item.name}
        </h3>
        {item.note && (
          <p className="text-[11px] leading-snug text-[color:var(--color-brand-text-2)]">
            {item.note}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          {item.price && (
            <span className="font-mono text-sm font-semibold text-[color:var(--color-brand-red)]">
              {item.price}
            </span>
          )}
          {item.tags && (
            <div className="flex flex-wrap justify-end gap-1">
              {item.tags.map((t) => (
                <TagBadge key={t} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function OptionList({ entries }: { entries: { name: string; price: string }[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
      {entries.map((e) => (
        <li
          key={e.name}
          className="flex items-baseline justify-between gap-3 border-b border-dashed border-[color:var(--color-brand-border)] py-1.5 text-sm"
        >
          <span className="text-[color:var(--color-brand-text)]">{e.name}</span>
          <span className="font-mono text-xs font-semibold text-[color:var(--color-brand-text-2)]">
            {e.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

function OptionSection({ section }: { section: MenuOptionSection }) {
  return (
    <details className="group rounded-md border border-[color:var(--color-brand-border)] bg-white open:border-[color:var(--color-brand-blue)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
        <span className="font-serif text-base text-[color:var(--color-brand-navy)] md:text-lg">
          {section.title}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-blue)] group-open:hidden">
          Show
        </span>
        <span className="hidden text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-blue)] group-open:inline">
          Hide
        </span>
      </summary>
      <div className="border-t border-[color:var(--color-brand-border)] px-5 py-4">
        {section.entries && <OptionList entries={section.entries} />}
        {section.groups && (
          <div className="space-y-5">
            {section.groups.map((g) => (
              <div key={g.title}>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[color:var(--color-brand-red)]">
                  {g.title}
                </h4>
                <OptionList entries={g.entries} />
              </div>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

function MenuPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What We Serve"
        heading="A Look at the TTOP Chicken Menu"
        intro="This page shows what our restaurant serves — signature pots, Taiwanese bentos, rice bowls, street food, drinks and the ChuChu Bar. To place an order, tap Order Online."
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

      <div className="container-page py-10 md:py-14">
        <div className="space-y-14">
          {menuCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-[160px]">
              <header className="border-b border-[color:var(--color-brand-red)]/40 pb-4">
                <p className="eyebrow">Section</p>
                <h2 className="mt-2 font-serif text-3xl text-[color:var(--color-brand-navy)] md:text-4xl">
                  {cat.title}
                </h2>
                {cat.intro && (
                  <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-brand-text-2)]">
                    {cat.intro}
                  </p>
                )}
              </header>

              {/* Grid of dish cards */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                {cat.items.map((item, i) => (
                  <DishCard key={`${item.code ?? ""}-${i}`} item={item} />
                ))}
              </div>

              {cat.options && (
                <div className="mt-6 space-y-3">
                  {cat.options.map((opt) => (
                    <OptionSection key={opt.title} section={opt} />
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Frozen foods link section */}
          <section
            id="frozen-foods"
            className="scroll-mt-[160px] rounded-md bg-[color:var(--color-brand-navy)] p-8 text-white md:p-12"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-brand-red)]">
              Take-home
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">Frozen Foods</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Prepared meals, sauces, frozen noodle dishes, marinated products, and ingredients
              from TTOP’s frozen food catalogue.
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
            <h2 className="mt-2 font-serif text-3xl text-[color:var(--color-brand-navy)] md:text-4xl">
              {loyaltyProgram.title}
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6 lg:col-span-1">
                <h3 className="font-serif text-lg text-[color:var(--color-brand-navy)]">
                  How it works
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-brand-text-2)]">
                  {loyaltyProgram.rules.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
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
                    <li
                      key={r.stars}
                      className="flex items-baseline justify-between gap-3 border-b border-dashed border-[color:var(--color-brand-border)] py-2 text-sm"
                    >
                      <span className="font-mono font-bold text-[color:var(--color-brand-red)]">
                        {r.stars}★
                      </span>
                      <span className="text-right text-[color:var(--color-brand-navy)]">
                        {r.reward}
                      </span>
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
            <h2
              id="original-menu-heading"
              className="font-serif text-2xl text-[color:var(--color-brand-navy)]"
            >
              Original Menu Sheets
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-brand-text-2)]">
              For reference only. See the interactive menu above for current listings.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "/images/ttop/menu/menu-blue-1.jpg",
                "/images/ttop/menu/menu-blue-2.jpg",
                "/images/ttop/menu/menu-red-1.jpg",
                "/images/ttop/menu/menu-red-2.jpg",
              ].map((src) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-md border border-[color:var(--color-brand-border)] bg-white"
                >
                  <img
                    src={src}
                    alt="Original TTOP Chicken menu sheet"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
