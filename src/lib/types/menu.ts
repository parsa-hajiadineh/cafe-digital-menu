export type MenuItemTag =
  | "signature"
  | "new"
  | "popular"
  | "vegetarian"
  | "spicy";

export type MenuCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  sortOrder: number;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  slug: string;
  name: string;
  description?: string;
  price: number;
  imageSrc?: string;
  tags?: MenuItemTag[];
  isAvailable: boolean;
  isFeatured?: boolean;
};

export type MenuCatalog = {
  categories: MenuCategory[];
  items: MenuItem[];
};

export type MenuCatalogStats = {
  categoryCount: number;
  itemCount: number;
  featuredCount: number;
};
