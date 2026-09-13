import { Container } from "@/components/ui/Container";
import { MenuBoard } from "@/components/menu/MenuBoard";
import { MenuHero } from "@/components/menu/MenuHero";
import { getSortedCategories, menuCatalog } from "@/data/menu";

export default function HomePage() {
  const categories = getSortedCategories();

  return (
    <Container className="relative z-10 pb-10">
      <MenuHero />
      <MenuBoard categories={categories} items={menuCatalog.items} />
    </Container>
  );
}
