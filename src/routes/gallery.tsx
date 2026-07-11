import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { business } from "@/data/business";
import { galleryImages, galleryCategories } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | TTOP Chicken" },
      { name: "description", content: "A visual look at TTOP Chicken’s signature pots, bentos, street food, frozen foods, and restaurant moments." },
      { property: "og:title", content: "Gallery | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/gallery" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/gallery" }],
  }),
  component: Page,
});

function Page() {
  const [filter, setFilter] = useState<string>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const activeCategories = galleryCategories.filter((c) =>
    galleryImages.some((img) => img.category === c),
  );
  const list =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((i) => i.category === filter);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? null : (i - 1 + list.length) % list.length)), [list.length]);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? null : (i + 1) % list.length)), [list.length]);

  useEffect(() => {
    if (openIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx, close, prev, next]);

  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" heading="The Food and Story of TTOP" />
      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {["All", ...activeCategories].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${
                filter === c
                  ? "border-[color:var(--color-brand-blue)] bg-[color:var(--color-brand-blue)] text-white"
                  : "border-[color:var(--color-brand-border)] bg-white text-[color:var(--color-brand-navy)] hover:border-[color:var(--color-brand-blue)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
          {list.map((img, i) => (
            <li key={img.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="block w-full overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)]"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={list[openIdx].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-[color:var(--color-brand-navy)]"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-white/90 p-2 text-[color:var(--color-brand-navy)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[color:var(--color-brand-navy)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-6xl">
            <img src={list[openIdx].src} alt={list[openIdx].alt} className="max-h-[80vh] w-auto rounded-md object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/85">{list[openIdx].alt}</figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
