import { cn } from "@/lib/cn";

type ItemMarkProps = {
  categoryId: string;
  className?: string;
};

export function ItemMark({ categoryId, className }: ItemMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("text-sage", className)}
    >
      {categoryId === "cat-specials" ? (
        <path
          d="M24 40c0-12 5-19 14-27-1 12-6 19-14 23-8-4-13-11-14-23 9 8 14 15 14 27Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : categoryId === "cat-dessert" ? (
        <>
          <path
            d="M12 28c0-8 5-14 12-14s12 6 12 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 28h28v4a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M24 10v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : categoryId === "cat-breakfast" ? (
        <>
          <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M24 10v3M24 31v3M13 22h-3M38 22h-3M16 14l-2-2M34 30l-2-2M32 14l2-2M16 30l-2 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M16 20h16v10a8 8 0 0 1-16 0V20Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18 20c0-4 3-7 6-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 38h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
