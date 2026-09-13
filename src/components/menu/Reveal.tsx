import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({ children, className, style }: RevealProps) {
  return (
    <div style={style} className={cn("motion-rise", className)}>
      {children}
    </div>
  );
}
