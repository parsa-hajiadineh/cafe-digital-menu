import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/format/price";
import type { MenuItem } from "@/lib/types/menu";

type MenuPosterProps = {
  item: MenuItem;
};

export function MenuPoster({ item }: MenuPosterProps) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-sage/25 bg-[linear-gradient(155deg,#dce8d8_0%,#f4efe4_46%,#e8dcc6_100%)] px-5 py-6 shadow-[0_18px_40px_rgba(36,48,39,0.06)]">
      <BotanicalMark className="pointer-events-none absolute -left-4 -top-3 h-28 w-28 opacity-20" />
      <BotanicalMark className="pointer-events-none absolute -bottom-6 -right-3 h-24 w-24 rotate-12 opacity-10" />
      <div className="relative">
        <Badge>انتخاب خانه</Badge>
        <h2 className="mt-4 font-display text-4xl tracking-wide text-ink">
          {item.name}
        </h2>
        {item.description ? (
          <p className="mt-2 max-w-[16rem] text-sm leading-7 text-muted">
            {item.description}
          </p>
        ) : null}
        <div className="mt-5 flex items-end justify-between gap-3">
          <span className="h-px flex-1 bg-gradient-to-l from-sage/40 to-transparent" />
          <p className="text-sm tracking-wide text-sage-bright">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
