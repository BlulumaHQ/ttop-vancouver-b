import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Instagram, Facebook, Phone, MapPin, Navigation } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { OrderOnlineButton, InternalButton } from "@/components/Buttons";
import { SteamRibbon } from "@/components/SteamRibbon";
import { HeroSlider } from "@/components/HeroSlider";
import { DeliveryStrip } from "@/components/DeliveryStrip";
import { business } from "@/data/business";
import { featuredDishes } from "@/data/menu";
import { customerReviews } from "@/data/reviews";
import { galleryImages } from "@/data/gallery";
import ttopThreeFlavors from "@/assets/ttop-3-flavors.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taiwanese Food in Richmond | TTOP Chicken" },
      {
        name: "description",
        content:
          "Discover TTOP Chicken in Richmond, BC for signature Hua Diao chicken pots, Taiwanese bentos, frozen favourites, catering, and organized school meal programs.",
      },
      { property: "og:title", content: "Taiwanese Food in Richmond | TTOP Chicken" },
      { property: "og:description", content: "Signature Hua Diao chicken pots, bentos, frozen foods, catering, and school meal programs." },
      { property: "og:url", content: business.canonicalOrigin + "/" },
      { property: "og:image", content: business.canonicalOrigin + "/images/og-image.png" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/" }],
  }),
  component: Home,
});

const heroImage = ttopThreeFlavors.url;

function Home() {
  return (
    <SiteLayout>
      <HeroSlider />
      <DeliveryStrip variant="light" />


      {/* FOUR VISITOR PATHS */}
      <section className="border-b border-[color:var(--color-brand-border)] bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Ways to enjoy TTOP</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">What Are You Looking For Today?</h2>
            <p className="mt-4 text-[color:var(--color-brand-text-2)]">
              Choose the TTOP experience that best fits your meal, event, school, or home kitchen.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PathCard
              image="/images/ttop/home/card-menu.jpg"
              eyebrow="01 · Dine In or Take Out"
              title="Restaurant Menu"
              body="Explore signature chicken pots, Taiwanese bentos, rice bowls, street food, drinks, and ChuChu Bar favourites."
              cta="View Menu"
              to="/menu"
              tone="cream"
            />
            <PathCard
              image="/images/ttop/home/card-school.jpg"
              eyebrow="02 · For Schools & Centres"
              title="School Meal Programs"
              body="Discover organized meal solutions for Montessori centres, daycares, and elementary school hot lunch programs."
              cta="Explore School Programs"
              to="/school-programs"
              tone="navy"
            />
            <PathCard
              image="/images/ttop/home/card-catering.jpg"
              eyebrow="03 · Groups & Events"
              title="Catering"
              body="Planning a group meal or event? Tell us what you need and TTOP will confirm available dishes, quantities, pickup or delivery details, and pricing."
              cta="Request Catering Information"
              to="/catering"
              tone="cream"
            />
            <PathCard
              image="/images/ttop/home/card-frozen.jpg"
              eyebrow="04 · Home Kitchen"
              title="Frozen Foods"
              body="Bring TTOP favourites home with prepared dishes, sauces, noodles, marinated products, and frozen meal options."
              cta="Explore Frozen Foods"
              to="/frozen-foods"
              tone="red"
            />

          </div>
        </div>
      </section>

      {/* SIGNATURE DISH */}
      <section className="bg-[color:var(--color-brand-cream)] py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-3 top-3 h-full w-full rounded-md border border-[color:var(--color-brand-blue)]/20" />
              <img
                src={heroImage}
                alt="Close-up of TTOP Chicken Pot showing tender chicken and rich Hua Diao sauce"
                width={1200}
                height={900}
                className="relative aspect-[4/3] w-full rounded-md object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">The TTOP Signature</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Three Layers of Flavour in One Pot</h2>
            <SteamRibbon className="mt-4 h-5 w-40" />
            <p className="mt-6 text-[color:var(--color-brand-text-2)]">
              TTOP Chicken Pot begins with tender chicken cooked in a rich, aromatic sauce infused with Hua Diao cooking wine and Taiwanese seasonings. From the moment the lid is lifted, the fragrance, sauce, and tender chicken create a warm and memorable dining experience.
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-brand-navy)]">
              Available as a restaurant dish and as a frozen prepared meal for home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/menu#signature-pot"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-navy)]"
              >
                View Signature Pots <ArrowRight className="h-4 w-4" />
              </a>
              <OrderOnlineButton />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="border-t border-[color:var(--color-brand-border)] bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Customer Favourites</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">A Menu Built Around Taiwanese Comfort Food</h2>
            </div>
            <InternalButton to="/menu" variant="secondary">
              Explore the Full Menu <ArrowRight className="h-4 w-4" />
            </InternalButton>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((d) => (
              <li key={d.name} className="group overflow-hidden rounded-md border border-[color:var(--color-brand-border)] bg-white">
                <div className="overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-[color:var(--color-brand-border)] p-5">
                  <h3 className="font-serif text-lg text-[color:var(--color-brand-navy)]">{d.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAMILY STORY */}
      <section className="bg-[color:var(--color-brand-cream)] py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/ttop/brand/ttop-banner-2.png"
              alt="TTOP Chicken founding brothers and family cooking heritage"
              width={900}
              height={1100}
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">A Family Story, Three Generations in the Making</h2>
            <p className="mt-5 text-[color:var(--color-brand-text-2)]">
              TTOP was founded in Richmond in 2014 by brothers Eric and Albert, two first-generation Taiwanese immigrants with a deep connection to the food that shaped their childhood.
            </p>
            <p className="mt-4 text-[color:var(--color-brand-text-2)]">
              Rooted in three generations of family cooking traditions, TTOP is a tribute to the grandmother and father who taught them. Their goal is to honour those memories while sharing the flavours of Taiwan through a modern Richmond restaurant.
            </p>
            <div className="mt-6">
              <InternalButton to="/about-us" variant="secondary">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </InternalButton>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL PROGRAM BAND */}
      <section className="bg-[color:var(--color-brand-navy)] py-16 text-white md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-brand-red)]">
              Meals Beyond the Restaurant
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Organized School Meals Designed Around the Classroom
            </h2>
            <p className="mt-5 text-white/80">
              Since 2024, TTOP’s school meal materials describe partnerships with schools across Greater Vancouver. The programs are designed to reduce administrative friction, support age-appropriate portions, organize meals by class, and minimize disruption during the school day.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-md border border-white/15 bg-white/5 p-6">
              <h3 className="font-serif text-xl text-white">Daily Montessori & Daycare Meals</h3>
              <p className="mt-3 text-sm text-white/80">
                Age-appropriate portions, bite-sized presentation, rotating textures and flavours, and a delivery process designed to respect the classroom environment.
              </p>
            </div>
            <div className="rounded-md border border-white/15 bg-white/5 p-6">
              <h3 className="font-serif text-xl text-white">School Hot Lunch Program</h3>
              <p className="mt-3 text-sm text-white/80">
                Organized class-by-class delivery, clearly labelled meals, insulated transport, and flexible service planning for participating schools.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/school-programs"
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-red)] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-[1px]"
            >
              Explore School Programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FROZEN FOODS */}
      <section className="border-t border-[color:var(--color-brand-border)] bg-white py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">From Our Kitchen to Yours</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Enjoy TTOP Favourites at Home</h2>
            <p className="mt-5 text-[color:var(--color-brand-text-2)]">
              Choose from prepared dishes, sauces, noodle meals, marinated products, and frozen ingredients based on TTOP’s owner-supplied frozen food catalogue.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Frozen TTOP Chicken Pot",
                "Old Country Rustic Beef Noodle",
                "LOBA Sauce",
                "OG Stewed Pork Belly",
                "Chicken Soup Bamboo Shoot Confit",
                "Shiitake Pork Ragu",
              ].map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-[color:var(--color-brand-navy)]">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-red)]" />
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <InternalButton to="/frozen-foods" variant="primary">
                View All Frozen Foods <ArrowRight className="h-4 w-4" />
              </InternalButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/ttop/frozen/frozen-cooked-foods-01.jpg" alt="TTOP frozen cooked foods" className="aspect-square rounded-md object-cover" />
            <img src="/images/ttop/frozen/frozen-cooked-foods-02.jpg" alt="Assorted TTOP frozen meals" className="mt-8 aspect-square rounded-md object-cover" />
            <img src="/images/ttop/frozen/frozen-cooked-foods-03.jpg" alt="TTOP frozen sauces and prepared products" className="aspect-square rounded-md object-cover" />
            <img src="/images/ttop/frozen/catalogue-02.png" alt="Frozen TTOP Chicken Pot packaging" className="mt-8 aspect-square rounded-md bg-[color:var(--color-brand-cream)] object-contain p-4" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[color:var(--color-brand-cream)] py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">What Guests Say</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Comforting Food, Generous Meals, and Friendly Service
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {customerReviews.map((r) => (
              <li key={r.name} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
                <div className="mb-3 flex gap-0.5 text-[color:var(--color-brand-red)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-[color:var(--color-brand-navy)]">
                  “{r.text}”
                </blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-text-2)]">
                  — {r.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={business.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:underline"
            >
              Read More Google Reviews <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-3xl md:text-4xl">A Look Inside the TTOP Kitchen</h2>
            <InternalButton to="/gallery" variant="secondary">
              View Gallery <ArrowRight className="h-4 w-4" />
            </InternalButton>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryImages.slice(0, 6).map((img) => (
              <li key={img.src} className="overflow-hidden rounded-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-cream)] py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Visit TTOP Chicken in Richmond</h2>
            <address className="mt-6 space-y-3 text-base not-italic text-[color:var(--color-brand-navy)]">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-brand-red)]" />
                <span>{business.address.street}<br />{business.address.city}, {business.address.region} {business.address.postal}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[color:var(--color-brand-red)]" />
                <a href={business.phoneHref} className="hover:underline">{business.phone}</a>
              </p>
              <p className="text-sm text-[color:var(--color-brand-text-2)]">
                {business.hours.lines[0]}<br />{business.hours.lines[1]}
              </p>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.map.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-blue)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <OrderOnlineButton />
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-brand-blue)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-blue)]"
              >
                <Phone className="h-4 w-4" /> Call TTOP
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-[color:var(--color-brand-border)]">
            <iframe
              title="TTOP Chicken location on Google Maps"
              src={business.map.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[color:var(--color-brand-red)] py-14 text-white md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Ready for Your Next TTOP Meal?
            </h2>
            <p className="mt-3 text-white/90">
              Order online, explore the full menu, or contact us about catering and school meal programs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-bold text-[color:var(--color-brand-red)] hover:-translate-y-[1px]"
            >
              Order Online
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Socials footer strip */}
      <section className="border-t border-white/10 bg-[color:var(--color-brand-navy)] py-6 text-white">
        <div className="container-page flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
            <Instagram className="h-4 w-4" /> @ttopchicken
          </a>
          <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
            <Facebook className="h-4 w-4" /> TTOPChicken
          </a>
          <a href={business.socials.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
            <Star className="h-4 w-4" /> Google Reviews
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}

function PathCard({
  image, eyebrow, title, body, cta, to, tone,
}: {
  image: string; eyebrow: string; title: string; body: string; cta: string; to: string;
  tone: "cream" | "navy" | "red";
}) {
  const bg = tone === "navy" ? "bg-[color:var(--color-brand-navy)] text-white" : tone === "red" ? "bg-[color:var(--color-brand-soft-red)]" : "bg-[color:var(--color-brand-cream)]";
  const eb = tone === "navy" ? "text-[color:var(--color-brand-red)]" : "text-[color:var(--color-brand-red)]";
  const h = tone === "navy" ? "text-white" : "text-[color:var(--color-brand-navy)]";
  const p = tone === "navy" ? "text-white/80" : "text-[color:var(--color-brand-text-2)]";
  const link = tone === "navy" ? "text-white" : "text-[color:var(--color-brand-blue)]";
  return (
    <article className={`grid overflow-hidden rounded-md border border-[color:var(--color-brand-border)] sm:grid-cols-2 ${bg}`}>
      <img src={image} alt="" className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full" />
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className={`text-[11px] font-bold uppercase tracking-widest ${eb}`}>{eyebrow}</p>
          <h3 className={`mt-3 font-serif text-2xl ${h}`}>{title}</h3>
          <p className={`mt-3 text-sm leading-relaxed ${p}`}>{body}</p>
        </div>
        <Link to={to} className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${link} hover:underline`}>
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
