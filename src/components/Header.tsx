import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { business, siteNav } from "@/data/business";
import { OrderOnlineButton } from "./Buttons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-brand-border)] bg-white/95 backdrop-blur">


      {/* Main bar */}
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="TTOP Chicken — Home">
          <img
            src="/images/ttop/ttop-chicken-icon.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <div className="hidden leading-tight sm:block">
            <div className="font-serif text-lg font-bold text-[color:var(--color-brand-navy)]">
              TTOP Chicken
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--color-brand-red)]">
              Taiwan Taipei Original Pot
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteNav.primary.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--color-brand-navy)] hover:bg-[color:var(--color-brand-soft-blue)]"
                activeProps={{ className: "text-[color:var(--color-brand-red)]" }}
                
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-1 rounded-md border border-[color:var(--color-brand-border)] bg-white p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.to + c.label}
                      to={c.to}
                      className="block rounded-sm px-3 py-2 text-sm text-[color:var(--color-brand-navy)] hover:bg-[color:var(--color-brand-soft-blue)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <OrderOnlineButton className="hidden lg:inline-flex" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--color-brand-border)] bg-white text-[color:var(--color-brand-navy)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[color:var(--color-brand-border)] bg-white lg:hidden">
          <div className="container-page py-3">
            <ul className="divide-y divide-[color:var(--color-brand-border)]">
              {siteNav.primary.map((item) => (
                <li key={item.label} className="py-1">
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-[color:var(--color-brand-navy)]"
                        aria-expanded={expanded === item.label}
                        onClick={() =>
                          setExpanded((v) => (v === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded === item.label && (
                        <ul className="pb-3 pl-3">
                          {item.children.map((c) => (
                            <li key={c.to + c.label}>
                              <Link
                                to={c.to}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm text-[color:var(--color-brand-text-2)] hover:text-[color:var(--color-brand-blue)]"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-semibold text-[color:var(--color-brand-navy)]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 pt-3">
              <OrderOnlineButton size="lg" />
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[color:var(--color-brand-border)] px-4 py-3 text-sm font-semibold text-[color:var(--color-brand-navy)]"
              >
                <Phone className="h-4 w-4" /> Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
