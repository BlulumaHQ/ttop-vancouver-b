import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Star, Mail, Phone, MapPin } from "lucide-react";
import { business } from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-navy)] text-white">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/ttop/ttop-chicken-icon.png" alt="" width={44} height={44} className="h-11 w-11" />
            <div>
              <div className="font-serif text-lg font-bold">TTOP Chicken</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                Taiwan Taipei Original Pot
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            TTOP Chicken brings the flavours of Taiwan to Richmond through signature Hua Diao chicken pots, traditional bentos, frozen favourites, catering, and organized school meal programs.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/frozen-foods" className="hover:text-white">Frozen Foods</Link></li>
            <li><Link to="/catering" className="hover:text-white">Catering</Link></li>
            <li><Link to="/school-programs" className="hover:text-white">School Programs</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Visit</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
              <span>{business.address.street}<br />{business.address.city}, {business.address.region} {business.address.postal}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
              <a href={business.phoneHref} className="hover:text-white">{business.phone}</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[color:var(--color-brand-red)]" />
              <a href={`mailto:${business.emails.general}`} className="hover:text-white">{business.emails.general}</a>
            </p>
            <p className="pt-2 text-white/70">
              {business.hours.lines[0]}<br />
              {business.hours.lines[1]}
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[color:var(--color-brand-red)] hover:text-white">
                Order Online →
              </a>
            </li>
            <li>
              <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </li>
            <li>
              <a href={business.socials.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Star className="h-4 w-4" /> Google Reviews
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-xs text-white/70 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Website Terms</Link>
          </div>
          <p>
            © {year} TTOP Chicken. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
