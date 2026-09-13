import { cn } from "@/lib/cn";

type BotanicalMarkProps = {
  className?: string;
};

export function BotanicalMark({ className }: BotanicalMarkProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      className={cn("text-sage", className)}
    >
      <path
        d="M40 72c0-22 8-34 24-48-2 20-10 32-24 40-14-8-22-20-24-40 16 14 24 26 24 48Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 72V28"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M28 38c6 2 10 6 12 12 2-6 6-10 12-12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
