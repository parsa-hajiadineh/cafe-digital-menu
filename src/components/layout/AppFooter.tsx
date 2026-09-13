import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export function AppFooter() {
  return (
    <footer className="relative z-10 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <Container className="border-t border-line py-6 text-center">
        <BotanicalMark className="mx-auto mb-2 h-5 w-5 opacity-50" />
        <p className="text-xs tracking-[0.28em] text-muted">{siteConfig.nameFa}</p>
      </Container>
    </footer>
  );
}
