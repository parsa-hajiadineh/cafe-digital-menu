import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { tagLabels } from "@/lib/config/tags";
import { formatPrice } from "@/lib/format/price";
import type { MenuItem } from "@/lib/types/menu";

type MenuItemCardProps = {
  item: MenuItem;
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article
      className={cn(
        "flex gap-4 rounded-[1.35rem] border px-4 py-4",
        item.isFeatured
          ? "border-sage/25 bg-sage-dim"
          : "border-line bg-surface",
        !item.isAvailable && "opacity-50",
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-elevated font-display text-2xl text-sage">
        {item.name.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base text-ink">{item.name}</h3>
          <p className="shrink-0 text-sm text-sage-bright">
            {item.isAvailable ? formatPrice(item.price) : "ناموجود"}
          </p>
        </div>
        {item.description ? (
          <p className="mt-1 text-sm leading-7 text-muted">{item.description}</p>
        ) : null}
        {item.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag}>{tagLabels[tag]}</Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
