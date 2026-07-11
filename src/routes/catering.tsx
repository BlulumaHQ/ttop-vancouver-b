import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { MailtoForm } from "@/components/MailtoForm";
import { business } from "@/data/business";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering | TTOP Chicken" },
      { name: "description", content: "Taiwanese catering inquiries for group meals and events. Tell TTOP what you need and we’ll confirm available dishes, quantities, and pricing." },
      { property: "og:title", content: "Catering | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/catering" },
    ],
    links: [{ rel: "canonical", href: business.canonicalOrigin + "/catering" }],
  }),
  component: Page,
});

const inquiryCategories = [
  { title: "Signature chicken pot inquiries", body: "Bring the signature Hua Diao chicken pot experience to your group meal." },
  { title: "Bento and rice meal inquiries", body: "Organized bento and rice bowl orders for offices, teams, or gatherings." },
  { title: "Group street food inquiries", body: "Taiwanese popcorn chicken, taro fries, and shared plates for informal gatherings." },
  { title: "Frozen food and prepared meal inquiries", body: "Larger frozen food orders and prepared meal packs for events or resale discussions." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Catering"
        heading="Taiwanese Catering for Groups and Events"
        intro="Bring TTOP’s Taiwanese comfort food to your next organized meal, gathering, or event. Tell us about your requirements and TTOP will confirm available dishes, quantities, timing, pickup or delivery options, and pricing."
      />
      <section className="container-page py-16">
        <ul className="grid gap-4 md:grid-cols-2">
          {inquiryCategories.map((c) => (
            <li key={c.title} className="rounded-md border border-[color:var(--color-brand-border)] bg-white p-6">
              <h2 className="font-serif text-lg text-[color:var(--color-brand-navy)]">{c.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--color-brand-text-2)]">{c.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs italic text-[color:var(--color-brand-text-2)]">
          These are inquiry categories, not guaranteed packages.
        </p>

        <div className="mt-12 rounded-md border border-[color:var(--color-brand-border)] bg-white p-6 md:p-10">
          <h2 className="font-serif text-2xl text-[color:var(--color-brand-navy)] md:text-3xl">
            Catering Inquiry
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-brand-text-2)]">
            Submit your details and TTOP will respond by email to confirm available dishes, quantities, pickup or delivery, and pricing.
          </p>
          <div className="mt-6">
            <MailtoForm
              recipient={business.emails.general}
              subject="TTOP Catering Inquiry"
              buttonLabel="Send Catering Inquiry"
              fields={[
                { name: "fullName", label: "Full Name", required: true },
                { name: "org", label: "Organization or Company" },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "eventDate", label: "Event Date", type: "date", required: true },
                { name: "guests", label: "Estimated Number of Guests", type: "number", required: true },
                { name: "pickupDelivery", label: "Preferred Pickup or Delivery", type: "select", options: ["Pickup", "Delivery", "Not Sure Yet"] },
                { name: "mealType", label: "Type of Meal or Event" },
                { name: "dietary", label: "Dietary Requirements" },
                { name: "additionalDetails", label: "Additional Details", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
