import { PowerIcon } from "@/components/brand/PowerIcon";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/50 bg-canvas/70 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <span className="seal-ring-header" />
            <PowerIcon className="h-5 w-5 text-sage-deep" />
          </div>
          <div className="leading-tight">
            <p className="text-base text-ink">{siteConfig.nameFa}</p>
            <p className="text-xs text-muted">{siteConfig.tagline}</p>
          </div>
        </div>
        <p className="text-[11px] tracking-[0.18em] text-sage-deep">POWER</p>
      </Container>
    </header>
  );
}
