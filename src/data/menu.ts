import type { MenuCatalog, MenuCatalogStats, MenuCategory, MenuItem } from "@/lib/types/menu";

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
      id: "cat-specials",
      slug: "specials",
      name: "نوشیدنی ویژه",
      description: "ماچا، دمنوش و طعم‌های خانه",
      sortOrder: 2,
    },
    {
      id: "cat-dessert",
      slug: "dessert",
      name: "دسر",
      sortOrder: 3,
    },
    {
      id: "cat-breakfast",
      slug: "breakfast",
      name: "صبحانه",
      sortOrder: 4,
    },
  ],
  items: [
    {
      id: "item-espresso",
      categoryId: "cat-coffee",
      slug: "espresso",
      name: "اسپرسو",
      description: "شات غلیظ، شکلاتی و خوش‌عطر",
      price: 95000,
      tags: ["signature"],
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: "item-americano",
      categoryId: "cat-coffee",
      slug: "americano",
      name: "آمریکانو",
      description: "اسپرسو با آب داغ، طعمی تمیز و بلند",
      price: 110000,
      isAvailable: true,
    },
    {
      id: "item-latte",
      categoryId: "cat-coffee",
      slug: "latte",
      name: "لاته",
      description: "شیر مخملی روی اسپرسو دابل",
      price: 145000,
      tags: ["popular"],
      isAvailable: true,
    },
    {
      id: "item-cappuccino",
      categoryId: "cat-coffee",
      slug: "cappuccino",
      name: "کاپوچینو",
      description: "فوم فشرده و تعادل کلاسیک",
      price: 145000,
      isAvailable: true,
    },
    {
      id: "item-mocha",
      categoryId: "cat-coffee",
      slug: "mocha",
      name: "موکا",
      description: "اسپرسو، شکلات تلخ و شیر گرم",
      price: 165000,
      isAvailable: false,
    },
    {
      id: "item-matcha",
      categoryId: "cat-specials",
      slug: "matcha-latte",
      name: "ماچا لاته",
      description: "ماچای ژاپنی با شیر جو دوسر",
      price: 175000,
      tags: ["new", "vegetarian"],
      isAvailable: true,
      isFeatured: true,
    },
    {
      id: "item-green-tea",
      categoryId: "cat-specials",
      slug: "green-tea",
      name: "چای سبز",
      description: "برگ‌های سبک با عطر یاس",
      price: 85000,
      tags: ["vegetarian"],
      isAvailable: true,
    },
    {
      id: "item-lemonade",
      categoryId: "cat-specials",
      slug: "lemonade",
      name: "لیموناد خانگی",
      description: "لیمو تازه، نعناع و عسل",
      price: 120000,
      isAvailable: true,
    },
    {
      id: "item-tiramisu",
      categoryId: "cat-dessert",
      slug: "tiramisu",
      name: "تیرامیسو",
      description: "ماسکارپونه، قهوه و کاکائو",
      price: 185000,
      tags: ["popular"],
      isAvailable: true,
    },
    {
      id: "item-cheesecake",
      categoryId: "cat-dessert",
      slug: "cheesecake",
      name: "چیزکیک",
      description: "پایه‌ی بیسکویت و بافت خامه‌ای",
      price: 175000,
      isAvailable: true,
    },
    {
      id: "item-brownie",
      categoryId: "cat-dessert",
      slug: "brownie",
      name: "براونی",
      description: "شکلات تلخ، مغز گردو و نمک دریا",
      price: 155000,
      isAvailable: true,
    },
    {
      id: "item-croissant",
      categoryId: "cat-breakfast",
      slug: "croissant",
      name: "کرواسان کره‌ای",
      description: "پخته‌ی صبح، لایه‌لایه و طلایی",
      price: 135000,
      isAvailable: true,
    },
    {
      id: "item-avocado",
      categoryId: "cat-breakfast",
      slug: "avocado-toast",
      name: "تست آووکادو",
      description: "نان خمیرترش، آووکادو و روغن زیتون",
      price: 195000,
      tags: ["vegetarian"],
      isAvailable: true,
    },
  ],
};

export function getSortedCategories(
  catalog: MenuCatalog = menuCatalog,
): MenuCategory[] {
  return [...catalog.categories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSortedItems(
  items: MenuItem[],
  locale = "fa",
): MenuItem[] {
  return [...items].sort((a, b) => {
    if (Boolean(a.isFeatured) !== Boolean(b.isFeatured)) {
      return a.isFeatured ? -1 : 1;
    }
    return a.name.localeCompare(b.name, locale);
  });
}

export function getCatalogStats(
  catalog: MenuCatalog = menuCatalog,
): MenuCatalogStats {
  return {
    categoryCount: catalog.categories.length,
    itemCount: catalog.items.length,
    featuredCount: catalog.items.filter((item) => item.isFeatured).length,
  };
}
