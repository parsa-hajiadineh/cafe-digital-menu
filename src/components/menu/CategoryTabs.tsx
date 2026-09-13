"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { MenuCategory } from "@/lib/types/menu";

const ALL_CATEGORY_ID = "all";

type CategoryTabsProps = {
  categories: MenuCategory[];
  activeId: string;
  onChange: (id: string) => void;
};

export function CategoryTabs({
  categories,
  activeId,
  onChange,
}: CategoryTabsProps) {
  const tabs = [{ id: ALL_CATEGORY_ID, name: "همه" }, ...categories];
  const rowRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
  const [pill, setPill] = useState({ x: 0, width: 0 });

  useLayoutEffect(() => {
    const update = () => {
      const row = rowRef.current;
      const button = buttonRefs.current.get(activeId);
      if (!row || !button) {
        return;
      }

      const rowBox = row.getBoundingClientRect();
      const buttonBox = button.getBoundingClientRect();
      setPill({
        x: buttonBox.left - rowBox.left + row.scrollLeft,
        width: buttonBox.width,
      });
    };

    update();
    const row = rowRef.current;
    window.addEventListener("resize", update);
    row?.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      row?.removeEventListener("scroll", update);
    };
  }, [activeId]);

  return (
    <div className="sticky top-[4.35rem] z-10 -mx-5 border-b border-line/50 bg-canvas/70 px-5 py-3 backdrop-blur-xl">
      <div
        ref={rowRef}
        className="no-scrollbar relative flex gap-2 overflow-x-auto rounded-full bg-white/35 p-1"
      >
        <span
          className="tab-pill"
          style={{
            width: pill.width,
            transform: `translateX(${pill.x}px)`,
            opacity: pill.width ? 1 : 0,
          }}
        />
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              ref={(node) => {
                if (node) {
                  buttonRefs.current.set(tab.id, node);
                } else {
                  buttonRefs.current.delete(tab.id);
                }
              }}
              onClick={() => onChange(tab.id)}
              className={cn(
                "relative z-10 shrink-0 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/60",
                isActive ? "text-cream" : "text-ink",
              )}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { ALL_CATEGORY_ID };
