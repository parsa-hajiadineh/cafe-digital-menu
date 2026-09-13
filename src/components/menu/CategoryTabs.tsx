import { cn } from "@/lib/cn";
import type { MenuCategory } from "@/lib/types/menu";

const ALL_CATEGORY_ID = "all";

type CategoryTabsProps = {
  categories: MenuCategory[];
  activeId: string;
  onChange: (id: string) => void;
};

export function CategoryTabs({
  categories,
  activeId,
  onChange,
}: CategoryTabsProps) {
  const tabs = [{ id: ALL_CATEGORY_ID, name: "همه" }, ...categories];

  return (
    <div className="sticky top-[4.35rem] z-10 -mx-5 border-b border-line/70 bg-canvas/90 px-5 py-3 backdrop-blur-md">
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/60",
                isActive
                  ? "bg-sage text-cream"
                  : "border border-line bg-surface text-ink",
              )}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { ALL_CATEGORY_ID };
