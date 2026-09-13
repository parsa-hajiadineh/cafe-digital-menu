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
        "inline-flex items-center rounded-full border border-line bg-sage-dim px-2.5 py-1 text-[11px] text-sage-bright",
        className,
      )}
    >
      {children}
    </span>
  );
}
