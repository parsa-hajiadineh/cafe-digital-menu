"use client";

import { useMemo, useState } from "react";
import {
  ALL_CATEGORY_ID,
  CategoryTabs,
} from "@/components/menu/CategoryTabs";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { MenuPoster } from "@/components/menu/MenuPoster";
import { MenuSectionHeader } from "@/components/menu/MenuSectionHeader";
import { getSortedItems } from "@/data/menu";
import type { MenuCategory, MenuItem } from "@/lib/types/menu";

type MenuBoardProps = {
  categories: MenuCategory[];
  items: MenuItem[];
};

export function MenuBoard({ categories, items }: MenuBoardProps) {
  const [activeId, setActiveId] = useState(ALL_CATEGORY_ID);

  const houseSelection = useMemo(
    () => items.find((item) => item.isFeatured && item.isAvailable),
    [items],
  );

  const sections = useMemo(() => {
    return categories
      .map((category) => ({
        category,
        items: getSortedItems(
          items.filter((item) => item.categoryId === category.id),
        ),
      }))
      .filter((section) => {
        if (section.items.length === 0) {
          return false;
        }
        return activeId === ALL_CATEGORY_ID || section.category.id === activeId;
      });
  }, [activeId, categories, items]);

  return (
    <div>
      <CategoryTabs
        categories={categories}
        activeId={activeId}
        onChange={setActiveId}
      />
      <div className="flex flex-col gap-8 pt-6">
        {activeId === ALL_CATEGORY_ID && houseSelection ? (
          <MenuPoster item={houseSelection} />
        ) : null}
        {sections.map((section) => (
          <section key={section.category.id} className="flex flex-col gap-3">
            <MenuSectionHeader category={section.category} />
            <div className="flex flex-col gap-3">
              {section.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
