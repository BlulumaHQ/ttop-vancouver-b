import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { business } from "@/data/business";

const exploreLinks: { to: string; label: string }[] = [
  { to: "/menu", label: "Menu" },
  { to: "/frozen-foods", label: "Frozen Foods" },
  { to: "/catering", label: "Catering" },
  { to: "/school-programs", label: "School Programs" },
  { to: "/about-us", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10 sm:border-none">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-wider text-white sm:pointer-events-none sm:py-0"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform sm:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-4 sm:mt-4 sm:block sm:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-navy)] text-white">
      {/* Delivery / follow strip */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col items-center gap-5 py-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/ttop/ttop-chicken-icon.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div>
              <div className="font-serif text-base font-bold text-white">TTOP Chicken</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                Taiwan Taipei Original Pot
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-3">
            {business.delivery.map((d) => (
              <li key={d.name}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order on ${d.name}`}
                  className="grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-white p-1 transition hover:-translate-y-[1px]"
                >
                  <img src={d.logo} alt={d.name} className="h-full w-full object-contain" />
                </a>
              </li>
            ))}
            <li aria-hidden className="mx-1 h-6 w-px bg-white/20" />
            <li>
              <a
                href={business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href={business.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href={business.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10"
              >
                <Star className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main footer — compact on mobile via accordion */}
      <div className="container-page py-6 sm:py-10">
        {/* Visit — always expanded on all sizes, it's the most important */}
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Visit</h3>
            <address className="mt-3 space-y-2 text-sm not-italic text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region} {business.address.postal}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
                <a href={`mailto:${business.emails.general}`} className="hover:text-white">
                  {business.emails.general}
                </a>
              </p>
            </address>
          </div>

          <AccordionSection title="Hours">
            <p className="text-sm text-white/80">
              {business.hours.lines[0]}
              <br />
              {business.hours.lines[1]}
            </p>
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md bg-[color:var(--color-brand-red)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
            >
              Order Online →
            </a>
          </AccordionSection>

          <AccordionSection title="Explore">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80 sm:grid-cols-1">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionSection>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white">
              Website Terms
            </Link>
          </div>
          <p>
            © {year} TTOP Chicken. Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Bluluma
            </a>
          {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of TTOP Chicken.</span></p>
        </div>
      </div>
    </footer>
  );
}
