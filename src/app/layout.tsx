import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/config/site";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.nameFa} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.nameFa}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.nameFa,
  appleWebApp: {
    capable: true,
    title: siteConfig.nameFa,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#F3EFE4",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.lang}
      dir={siteConfig.dir}
      className={`${vazirmatn.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
