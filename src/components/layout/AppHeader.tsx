import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-canvas/85 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/40 font-display text-xl text-sage">
            {siteConfig.monogram}
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-[0.28em] text-ink">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted">{siteConfig.nameFa}</p>
          </div>
        </div>
        <p className="text-[11px] tracking-[0.22em] text-sage">
          {siteConfig.tagline}
        </p>
      </Container>
    </header>
  );
}
