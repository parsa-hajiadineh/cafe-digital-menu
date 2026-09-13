import type { CSSProperties } from "react";

export function motionDelay(index: number, stepMs = 55): CSSProperties {
  return {
    "--motion-delay": `${index * stepMs}ms`,
  } as CSSProperties;
}
