import { business } from "@/data/business";

export function DeliveryStrip({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`w-full border-y ${
        isDark
          ? "border-white/10 bg-[color:var(--color-brand-navy)] text-white"
          : "border-[color:var(--color-brand-border)] bg-white text-[color:var(--color-brand-navy)]"
      }`}
    >
      <div className="container-page flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between md:gap-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] md:text-left">
          Also available on your favourite delivery apps
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {business.delivery.map((d) => (
            <li key={d.name}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 opacity-90 transition hover:opacity-100"
                aria-label={`Order from TTOP Chicken on ${d.name}`}
              >
                <img
                  src={d.logo}
                  alt={d.name}
                  className={`h-10 w-auto rounded-md object-contain ${
                    isDark ? "bg-white p-1.5" : ""
                  }`}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
