"use client";

import { useState } from "react";
import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/config/site";

export function OpeningVeil() {
  const [isTurning, setIsTurning] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const openMenu = () => {
    if (isTurning) {
      return;
    }

    setIsTurning(true);
    window.setTimeout(() => setIsHidden(true), 950);
  };

  if (isHidden) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openMenu}
      className={cn("opening-veil", isTurning && "is-turning")}
      aria-label="ورود به منو"
    >
      <div className="flex flex-col items-center px-8 text-center">
        <div className="opening-veil-mark mb-6 text-sage-deep">
          <span className="opening-veil-ring border-sage-deep/40" />
          <span className="font-display text-4xl tracking-[0.2em]">
            {siteConfig.monogram}
          </span>
        </div>
        <p className="font-display text-5xl tracking-[0.14em] text-sage-deep" dir="ltr">
          {siteConfig.name}
        </p>
        <p className="mt-2 text-sm text-sage-deep/80">{siteConfig.nameFa}</p>
        <BotanicalMark className="mt-6 h-8 w-8 text-sage-deep/70" />
        <p className="mt-8 text-[11px] tracking-[0.22em] text-sage-deep/70">
          برای ورود لمس کنید
        </p>
      </div>
    </button>
  );
}
