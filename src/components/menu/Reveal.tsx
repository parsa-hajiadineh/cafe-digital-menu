"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({ children, className, style }: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={style}
      className={cn(isVisible ? "motion-rise" : "reveal-wait", className)}
    >
      {children}
    </div>
  );
}
