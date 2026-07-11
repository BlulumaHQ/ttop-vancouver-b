import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export function OrderOnlineButton({ className = "", children = "Order Online", size = "md" }: Props) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };
  return (
    <a
      href={business.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--color-brand-red)] font-semibold text-white shadow-sm transition-all hover:-translate-y-[1px] hover:bg-[#b02a2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-red)] ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

export function InternalButton({
  to,
  children,
  variant = "primary",
  className = "",
  size = "md",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-[color:var(--color-brand-blue)] text-white hover:bg-[color:var(--color-brand-navy)]",
    secondary:
      "border border-[color:var(--color-brand-blue)] text-[color:var(--color-brand-blue)] bg-white hover:bg-[color:var(--color-brand-soft-blue)]",
    ghost:
      "border border-white/30 text-white bg-transparent hover:bg-white/10",
  };
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all hover:-translate-y-[1px] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
