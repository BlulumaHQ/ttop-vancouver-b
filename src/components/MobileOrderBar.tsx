import { business } from "@/data/business";

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[color:var(--color-brand-border)] bg-white pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
      <div className="container-page py-2">
        <a
          href={business.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-[color:var(--color-brand-red)] px-4 text-base font-bold text-white shadow-sm active:translate-y-[1px]"
        >
          Order Online →
        </a>
      </div>
    </div>
  );
}
