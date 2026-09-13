import type { MenuCatalog, MenuCatalogStats } from "@/lib/types/menu";

export const menuCatalog: MenuCatalog = {
  categories: [
    {
      id: "cat-coffee",
      slug: "coffee",
      name: "قهوه",
      description: "اسپرسو و نوشیدنی‌های بر پایه قهوه",
      sortOrder: 1,
    },
    {
      id: "cat-dessert",
      slug: "dessert",
      name: "دسر",
      sortOrder: 2,
    },
  ],
  items: [
    {
      id: "item-espresso",
      categoryId: "cat-coffee",
      slug: "espresso",
      name: "اسپرسو",
      description: "شات غلیظ و خوش‌عطر",
      price: 95000,
      tags: ["signature"],
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: "item-latte",
      categoryId: "cat-coffee",
      slug: "latte",
      name: "لاته",
      price: 145000,
      isAvailable: true,
    },
    {
      id: "item-tiramisu",
      categoryId: "cat-dessert",
      slug: "tiramisu",
      name: "تیرامیسو",
      price: 185000,
      tags: ["popular"],
      isAvailable: true,
    },
  ],
};

export function getCatalogStats(
  catalog: MenuCatalog = menuCatalog,
): MenuCatalogStats {
  return {
    categoryCount: catalog.categories.length,
    itemCount: catalog.items.length,
    featuredCount: catalog.items.filter((item) => item.isFeatured).length,
  };
}
