import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/ui/Container";
import { MenuBoard } from "@/components/menu/MenuBoard";
import { getSortedCategories, menuCatalog } from "@/data/menu";
import { siteConfig } from "@/lib/config/site";

export default function HomePage() {
  const categories = getSortedCategories();

  return (
    <Container className="pb-8">
      <section className="flex flex-col items-center pb-2 pt-8 text-center">
        <p className="text-[11px] tracking-[0.28em] text-sage">منوی امروز</p>
        <h1 className="mt-3 font-display text-5xl tracking-[0.2em] text-ink">
          {siteConfig.name}
        </h1>
        <Divider className="my-4" />
        <p className="max-w-xs text-sm leading-8 text-muted">
          انتخاب‌های تازه کافه {siteConfig.nameFa}؛ آرام، دقیق و مناسب همین لحظه.
        </p>
      </section>
      <MenuBoard categories={categories} items={menuCatalog.items} />
    </Container>
  );
}
