import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export function AppFooter() {
  return (
    <footer className="pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <Container className="border-t border-line py-6 text-center">
        <p className="relative z-10 text-xs tracking-[0.28em] text-muted">
          {siteConfig.nameFa}
        </p>
      </Container>
    </footer>
  );
}
