import { cn } from "@/lib/cn";

type PowerIconProps = {
  className?: string;
};

export function PowerIcon({ className }: PowerIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("text-current", className)}
    >
      <path
        d="M12 3v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.05 6.05a7 7 0 1 0 9.9 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
