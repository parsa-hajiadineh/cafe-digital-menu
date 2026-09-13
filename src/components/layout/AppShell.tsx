import type { ReactNode } from "react";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { OpeningVeil } from "@/components/layout/OpeningVeil";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden border-line sm:border-x">
      <Atmosphere />
      <OpeningVeil />
      <AppHeader />
      <main className="relative z-10 flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}
