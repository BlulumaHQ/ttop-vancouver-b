import { useState } from "react";
import { Phone, Globe, ChevronDown } from "lucide-react";
import { business } from "@/data/business";

export function TopBar() {
  const [lang, setLang] = useState<"EN" | "中文">("EN");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[color:var(--color-brand-blue)] text-white">
      <div className="container-page flex h-10 items-center justify-between gap-4 text-xs md:text-sm">
        {/* Phone — always visible, prominent */}
        <a
          href={business.phoneHref}
          className="inline-flex min-w-0 items-center gap-2 font-semibold text-white hover:text-white/80"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">Call {business.phone}</span>
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden text-white/80 md:inline">
            {business.hours.display}
          </span>

          {/* Language switcher (visual only for now) */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-semibold hover:bg-white/20"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              {lang}
              <ChevronDown className="h-3 w-3 opacity-80" />
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-50 mt-1 w-32 overflow-hidden rounded-sm border border-white/20 bg-white text-[color:var(--color-brand-navy)] shadow-lg"
              >
                {(["EN", "中文"] as const).map((l) => (
                  <li key={l}>
                    <button
                      type="button"
                      onClick={() => {
                        setLang(l);
                        setOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-xs font-semibold hover:bg-[color:var(--color-brand-soft-blue)] ${
                        lang === l ? "text-[color:var(--color-brand-blue)]" : ""
                      }`}
                    >
                      {l === "EN" ? "English" : "中文 (Coming soon)"}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
