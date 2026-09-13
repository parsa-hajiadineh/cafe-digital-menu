import { BotanicalMark } from "@/components/brand/BotanicalMark";
import type { MenuCategory } from "@/lib/types/menu";

type MenuSectionHeaderProps = {
  category: MenuCategory;
};

export function MenuSectionHeader({ category }: MenuSectionHeaderProps) {
  return (
    <div className="flex flex-col items-center pt-2 text-center">
      <div className="flex w-full items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-l from-sage/40 to-transparent" />
        <BotanicalMark className="h-5 w-5 opacity-70" />
        <h2 className="text-sm tracking-[0.18em] text-sage">{category.name}</h2>
        <BotanicalMark className="h-5 w-5 opacity-70 -scale-x-100" />
        <span className="h-px flex-1 bg-gradient-to-r from-sage/40 to-transparent" />
      </div>
      {category.description ? (
        <p className="mt-2 text-xs leading-6 text-muted">{category.description}</p>
      ) : null}
    </div>
  );
}
