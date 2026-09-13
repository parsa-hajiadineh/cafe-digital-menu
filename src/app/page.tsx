import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { getCatalogStats, menuCatalog } from "@/data/menu";
import { formatNumber, formatPrice } from "@/lib/format/price";
import { siteConfig } from "@/lib/config/site";

const palette = [
  { name: "Canvas", className: "bg-canvas border-cream/20" },
  { name: "Surface", className: "bg-surface border-line" },
  { name: "Gold", className: "bg-gold border-gold" },
  { name: "Cream", className: "bg-cream border-cream" },
] as const;

export default function HomePage() {
  const stats = getCatalogStats();
  const featured = menuCatalog.items.find((item) => item.isFeatured);

  return (
    <Container className="flex flex-col gap-12 py-8 pb-16">
      <section className="flex flex-col items-center text-center">
        <Badge>مرحله ۱ · زیرساخت</Badge>
        <h1 className="mt-6 font-display text-6xl tracking-[0.22em] text-cream">
          {siteConfig.name}
        </h1>
        <Divider className="my-5" />
        <p className="max-w-xs text-sm leading-8 text-muted">
          منوی دیجیتال لوکس، سریع و Mobile-First. مشتری با QR وارد می‌شود و
          تجربه از همین شِل و سیستم طراحی شروع می‌شود.
        </p>
      </section>

      <section className="rounded-[1.5rem] border border-line bg-surface/80 p-5">
        <p className="text-[11px] tracking-[0.22em] text-gold">پالت و حروف</p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {palette.map((token) => (
            <div key={token.name} className="flex flex-col items-center gap-2">
              <div
                className={`h-12 w-full rounded-2xl border ${token.className}`}
              />
              <span className="text-[10px] tracking-wider text-muted">
                {token.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2">
          <p className="font-display text-3xl text-cream">Elegant Display</p>
          <p className="text-sm leading-7 text-muted">
            بدنه خوانا با وزیرمتن برای فارسی، و حروف نمایشی برای هویت برند.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-[11px] tracking-[0.22em] text-gold">کامپوننت‌های پایه</p>
        <div className="flex flex-col gap-3">
          <Button>دکمه اصلی</Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary">ثانویه</Button>
            <Button variant="ghost">خطی</Button>
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-line bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] tracking-[0.22em] text-gold">قرارداد داده</p>
          <Badge>
            {formatNumber(stats.categoryCount)} دسته ·{" "}
            {formatNumber(stats.itemCount)} آیتم
          </Badge>
        </div>
        {featured ? (
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-lg text-cream">{featured.name}</p>
              <p className="mt-1 text-sm text-muted">{featured.description}</p>
            </div>
            <p className="shrink-0 text-sm text-gold-bright">
              {formatPrice(featured.price)}
            </p>
          </div>
        ) : null}
        <p className="mt-5 text-xs leading-6 text-muted">
          کاتالوگ فعلاً محلی است تا در مراحل بعد به رابط کاربری منو وصل شود.
        </p>
      </section>
    </Container>
  );
}
