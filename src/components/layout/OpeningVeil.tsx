"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config/site";

export function OpeningVeil() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setHidden(true), 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="opening-veil" aria-hidden>
      <div className="opening-veil-mark">
        <span className="opening-veil-ring" />
        <span className="font-display text-4xl tracking-[0.2em] text-cream">
          {siteConfig.monogram}
        </span>
      </div>
    </div>
  );
}
