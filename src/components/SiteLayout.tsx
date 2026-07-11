import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileOrderBar } from "./MobileOrderBar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-brand-cream)]">
      <Header />
      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  );
}

export function PageHero({
  eyebrow,
  heading,
  intro,
  children,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-[color:var(--color-brand-border)] bg-white">
      <div className="container-page py-14 md:py-20">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[color:var(--color-brand-navy)] md:text-5xl">
          {heading}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--color-brand-text-2)] md:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
