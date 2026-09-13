import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-gold-dim px-2.5 py-1 text-[11px] tracking-[0.18em] text-gold-bright",
        className,
      )}
    >
      {children}
    </span>
  );
}
