import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";

export function AppHeader() {
  return (
    <header className="pt-[max(1.25rem,env(safe-area-inset-top))]">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 font-display text-xl text-gold">
            {siteConfig.monogram}
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-[0.28em] text-cream">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted">{siteConfig.nameFa}</p>
          </div>
        </div>
        <p className="text-[11px] tracking-[0.22em] text-gold/80">
          {siteConfig.tagline}
        </p>
      </Container>
    </header>
  );
}
