"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { PowerIcon } from "@/components/brand/PowerIcon";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/config/site";

export function OpeningVeil() {
  const [isMounted, setIsMounted] = useState(false);
  const [isTurning, setIsTurning] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openMenu = () => {
    if (isTurning) {
      return;
    }

    setIsTurning(true);
    window.setTimeout(() => setIsHidden(true), 850);
  };

  if (!isMounted || isHidden) {
    return null;
  }

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      aria-label="ورود به منو"
      onPointerUp={openMenu}
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
    </div>,
    document.body,
  );
}
