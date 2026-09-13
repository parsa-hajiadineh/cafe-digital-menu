"use client";

import { useState } from "react";
import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { PowerIcon } from "@/components/brand/PowerIcon";
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
    window.setTimeout(() => setIsHidden(true), 850);
  };

  if (isHidden) {
    return null;
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="ورود به منو"
      onPointerUp={openMenu}
      onClick={openMenu}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openMenu();
        }
      }}
      className={cn("opening-veil", isTurning && "is-turning")}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="opening-veil-mark mb-4 text-sage-deep">
          <span className="opening-veil-ring border-sage-deep/40" />
          <PowerIcon className="h-8 w-8" />
        </div>
        <p className="text-3xl text-sage-deep">{siteConfig.nameFa}</p>
        <p className="mt-1 text-[11px] tracking-[0.28em] text-sage-deep/80">
          POWER
        </p>
        <BotanicalMark className="mt-4 h-6 w-6 text-sage-deep/70" />
        <p className="mt-5 text-[11px] tracking-[0.22em] text-sage-deep/70">
          برای ورود لمس کنید
        </p>
      </div>
    </div>
  );
}
