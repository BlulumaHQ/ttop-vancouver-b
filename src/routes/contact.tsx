import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Navigation, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { OrderOnlineButton } from "@/components/Buttons";
import { MailtoForm } from "@/components/MailtoForm";
import { business } from "@/data/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | TTOP Chicken" },
      { name: "description", content: "Contact TTOP Chicken in Richmond, BC about general questions, frozen food orders, catering, or school meal programs." },
      { property: "og:title", content: "Contact Us | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/contact" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/contact" }],
  }),
  component: Page,
});

const inquiryToEmail: Record<string, string> = {
  "General Question": business.emails.general,
  "Catering": business.emails.general,
  "School Program": business.emails.school,
  "Frozen Food or Large Order": business.emails.general,
};

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        heading="Contact TTOP Chicken"
        intro="Contact the restaurant about general questions, frozen food orders, catering, or school meal programs."
      />

      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
              <h2 className="font-serif text-2xl text-[color:var(--color-brand-navy)]">Restaurant</h2>
              <p className="mt-2 text-sm font-semibold text-[color:var(--color-brand-navy)]">TTOP Chicken</p>
              <address className="mt-4 space-y-3 text-sm not-italic text-[color:var(--color-brand-navy)]">
                <p className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 text-[color:var(--color-brand-red)]" />
                  <span>{business.address.street}<br />{business.address.city}, {business.address.region} {business.address.postal}</span>
                </p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--color-brand-red)]" />
                  <a href={business.phoneHref} className="hover:underline">{business.phone}</a>
                </p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--color-brand-red)]" />
                  <a href={`mailto:${business.emails.general}`} className="hover:underline">{business.emails.general}</a>
                </p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--color-brand-red)]" />
                  <span>School program: <a href={`mailto:${business.emails.school}`} className="hover:underline">{business.emails.school}</a></span>
                </p>
                <p className="pt-2 text-[color:var(--color-brand-text-2)]">
                  {business.hours.lines[0]}<br />{business.hours.lines[1]}
                </p>
              </address>

              <div className="mt-6 flex flex-wrap gap-2">
                <a href={business.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand-blue)] px-4 py-2 text-xs font-semibold text-white"><Phone className="h-3.5 w-3.5" /> Call TTOP</a>
                <a href={`mailto:${business.emails.general}`} className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-brand-blue)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--color-brand-blue)]"><Mail className="h-3.5 w-3.5" /> Email TTOP</a>
                <a href={business.map.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-brand-blue)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--color-brand-blue)]"><Navigation className="h-3.5 w-3.5" /> Get Directions</a>
                <OrderOnlineButton size="sm" />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-md border border-[color:var(--color-brand-border)]">
              <iframe
                title="TTOP Chicken location on Google Maps"
                src={business.map.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6 md:p-8">
              <h2 className="font-serif text-2xl text-[color:var(--color-brand-navy)]">Send a Message</h2>
              <p className="mt-2 text-sm text-[color:var(--color-brand-text-2)]">
                Choose an inquiry type and TTOP will receive your message at the correct email address.
              </p>
              <div className="mt-6">
                <ContactFormRouter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactFormRouter() {
  // Simple approach: user chooses inquiry type, routing done via select value + label mapping.
  return (
    <MailtoForm
      recipient={inquiryToEmail["General Question"]}
      subject="TTOP Website Inquiry"
      buttonLabel="Send Message"
      fields={[
        { name: "fullName", label: "Full Name", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel" },
        {
          name: "inquiryType",
          label: "Inquiry Type",
          type: "select",
          required: true,
          options: Object.keys(inquiryToEmail),
        },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
    />
  );
}
