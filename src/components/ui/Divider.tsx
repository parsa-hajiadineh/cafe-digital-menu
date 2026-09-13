import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        "mx-auto h-px w-16 bg-gradient-to-l from-transparent via-gold to-transparent",
        className,
      )}
    />
  );
}
