import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";

type Slide = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; to: string };
  accent?: "red" | "blue";
};

const slides: Slide[] = [
  {
    image: "/images/ttop/dishes/hero-chicken-pot-spread.webp",
    eyebrow: "Taiwan Taipei Original Pot · Richmond, BC",
    title: (
      <>
        A Taste of Taiwan,
        <br />
        <span className="text-[color:var(--color-brand-red)]">From Our Family Table.</span>
      </>
    ),
    subtitle:
      "Signature Hua Diao chicken pots, comforting bentos, and frozen favourites — served in Richmond since 2014.",
    primaryCta: { label: "Order Online", href: business.orderUrl, external: true },
    secondaryCta: { label: "View Our Menu", to: "/menu" },
  },
  {
    image: "/images/ttop/dishes/hero-fried-chicken-bento.webp",
    eyebrow: "Limited Time · Featured This Season",
    title: (
      <>
        Family Bento Sets
        <br />
        <span className="text-[color:var(--color-brand-red)]">Made for Sharing.</span>
      </>
    ),
    subtitle:
      "Bundle signature bentos, hibachi favourites, and side dishes for the whole table — pickup or delivery available.",
    primaryCta: { label: "See Featured Menu", href: "/menu#bento" },
    secondaryCta: { label: "Call to Pre-Order", to: "/contact" },
    accent: "blue",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % total), 6500);
    return () => clearInterval(t);
  }, [total]);

  const s = slides[i];

  return (
    <section
      aria-label="Featured"
      className="relative isolate h-[560px] w-full overflow-hidden bg-[color:var(--color-brand-navy)] md:h-[640px] lg:h-[720px]"
    >
      {/* Slides (crossfade) */}
      {slides.map((sl, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== i}
        >
          <img
            src={sl.image}
            alt=""
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          {/* Dark gradient for legibility — navy dominant */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-brand-navy)]/85 via-[color:var(--color-brand-navy)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-navy)]/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container-page relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-red)]">
            {s.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">{s.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {s.primaryCta.external ? (
              <a
                href={s.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:-translate-y-[1px]"
              >
                {s.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                to={s.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:-translate-y-[1px]"
              >
                {s.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {s.secondaryCta && (
              <Link
                to={s.secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-md border border-white/60 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                {s.secondaryCta.label}
              </Link>
            )}
          </div>
          <a
            href={business.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setI((v) => (v - 1 + total) % total)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur hover:bg-black/45"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setI((v) => (v + 1) % total)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur hover:bg-black/45"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
