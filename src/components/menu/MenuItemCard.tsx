import type { CSSProperties } from "react";
import { ItemMark } from "@/components/brand/ItemMark";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { tagLabels } from "@/lib/config/tags";
import { formatPrice } from "@/lib/format/price";
import type { MenuItem } from "@/lib/types/menu";

type MenuItemCardProps = {
  item: MenuItem;
  style?: CSSProperties;
};

export function MenuItemCard({ item, style }: MenuItemCardProps) {
  return (
    <article
      style={style}
      className={cn(
        "menu-card relative overflow-hidden rounded-[1.35rem] border px-4 py-4",
        item.isFeatured
          ? "border-sage/25 bg-[linear-gradient(135deg,rgba(125,154,120,0.18),rgba(255,253,248,0.92))]"
          : "border-line/80 bg-surface/90",
        !item.isAvailable && "opacity-45",
      )}
    >
      <div className="relative flex items-start gap-3">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
            item.isFeatured
              ? "border-sage/25 bg-cream/60"
              : "border-line bg-surface-elevated/80",
          )}
        >
          <ItemMark
            categoryId={item.categoryId}
            className="icon-float h-8 w-8"
          />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-baseline gap-2">
            <h3 className="text-[15px] text-ink">{item.name}</h3>
            <span className="mb-1 flex-1 border-b border-dotted border-sage/30" />
            <p className="shrink-0 text-sm text-sage-bright">
              {item.isAvailable ? formatPrice(item.price) : "ناموجود"}
            </p>
          </div>
          {item.description ? (
            <p className="mt-1 text-[13px] leading-7 text-muted">
              {item.description}
            </p>
          ) : null}
          {item.tags?.length ? (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tagLabels[tag]}</Badge>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
