import { useState, useId, type FormEvent } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

type Props = {
  fields: Field[];
  recipient: string;
  subject: string;
  className?: string;
  privacyNote?: string;
  buttonLabel?: string;
};

export function MailtoForm({
  fields,
  recipient,
  subject,
  className = "",
  privacyNote,
  buttonLabel = "Send Inquiry",
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !(values[f.name] || "").trim()) {
        errs[f.name] = `${f.label} is required.`;
      }
    });
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const body = fields
      .map((f) => `${f.label}: ${values[f.name] || ""}`)
      .join("\n");
    const href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {fields.map((f) => {
          const id = `${formId}-${f.name}`;
          const errId = `${id}-err`;
          const err = errors[f.name];
          const full = f.type === "textarea" || f.name === "message" || f.name === "additionalDetails";
          const wrap = `flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`;
          return (
            <div key={f.name} className={wrap}>
              <label htmlFor={id} className="text-sm font-semibold text-[color:var(--color-brand-navy)]">
                {f.label}{f.required && <span className="ml-0.5 text-[color:var(--color-brand-red)]">*</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  id={id}
                  rows={4}
                  aria-invalid={!!err}
                  aria-describedby={err ? errId : undefined}
                  value={values[f.name] || ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className="rounded-md border border-[color:var(--color-brand-border)] bg-white px-3 py-2.5 text-sm focus:border-[color:var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/20"
                />
              ) : f.type === "select" ? (
                <select
                  id={id}
                  aria-invalid={!!err}
                  aria-describedby={err ? errId : undefined}
                  value={values[f.name] || ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className="rounded-md border border-[color:var(--color-brand-border)] bg-white px-3 py-2.5 text-sm focus:border-[color:var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/20"
                >
                  <option value="">Select…</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  type={f.type || "text"}
                  placeholder={f.placeholder}
                  aria-invalid={!!err}
                  aria-describedby={err ? errId : undefined}
                  value={values[f.name] || ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className="rounded-md border border-[color:var(--color-brand-border)] bg-white px-3 py-2.5 text-sm focus:border-[color:var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/20"
                />
              )}
              {err && (
                <p id={errId} className="text-xs font-medium text-[color:var(--color-brand-red)]">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {privacyNote && (
        <p className="mt-4 rounded-md bg-[color:var(--color-brand-soft-blue)] p-3 text-xs text-[color:var(--color-brand-navy)]">
          {privacyNote}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-[color:var(--color-brand-red)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-[1px] hover:bg-[#b02a2d]"
        >
          {buttonLabel}
        </button>
        {submitted && (
          <p role="status" className="text-sm text-[color:var(--color-brand-text-2)]">
            Your email application should open with the inquiry details. If it does not open, email <a className="underline" href={`mailto:${recipient}`}>{recipient}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
