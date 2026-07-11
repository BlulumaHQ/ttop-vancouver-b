import { MailtoForm } from "./MailtoForm";
import { business } from "@/data/business";

export function SchoolConsultationForm() {
  return (
    <MailtoForm
      recipient={business.emails.school}
      subject="TTOP School Meal Program Inquiry"
      buttonLabel="Request a Consultation"
      privacyNote="Do not enter student names, medical records, or other sensitive personal information in this form."
      fields={[
        { name: "school", label: "School or Centre Name", required: true },
        { name: "contactName", label: "Contact Name", required: true },
        { name: "role", label: "Role or Position" },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        {
          name: "programType",
          label: "Program Type",
          type: "select",
          required: true,
          options: ["Montessori or Daycare Meals", "School Hot Lunch", "Not Sure Yet"],
        },
        { name: "students", label: "Estimated Number of Students", type: "number" },
        {
          name: "frequency",
          label: "Preferred Service Frequency",
          type: "select",
          options: ["Daily", "Weekly", "Monthly", "Seasonal or Term-Based", "Not Sure Yet"],
        },
        { name: "startPeriod", label: "Requested Start Period" },
        { name: "dietary", label: "General Dietary or Allergy Requirements", type: "textarea" },
        { name: "message", label: "Message", type: "textarea" },
      ]}
    />
  );
}
