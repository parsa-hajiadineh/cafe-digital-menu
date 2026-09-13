import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { motionDelay } from "@/lib/motion";
import { siteConfig } from "@/lib/config/site";

export function MenuHero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-4 pt-10 text-center">
      <div className="motion-seal relative mb-5 flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-sage/35" />
        <span className="absolute inset-1.5 rounded-full border border-sage/20" />
        <span className="font-display text-2xl text-sage">
          {siteConfig.monogram}
        </span>
      </div>
      <p
        className="motion-rise text-[11px] tracking-[0.32em] text-sage"
        style={motionDelay(1, 80)}
      >
        منوی امروز
      </p>
      <h1
        className="motion-rise mt-3 font-display text-6xl tracking-[0.12em] text-ink"
        style={motionDelay(2, 80)}
      >
        {siteConfig.name}
      </h1>
      <div className="motion-line mt-4 flex items-center gap-3 text-sage">
        <span className="h-px w-10 bg-gradient-to-l from-sage to-transparent" />
        <BotanicalMark className="h-7 w-7" />
        <span className="h-px w-10 bg-gradient-to-r from-sage to-transparent" />
      </div>
      <p
        className="motion-rise mt-4 max-w-[16rem] text-sm leading-8 text-muted"
        style={motionDelay(3, 80)}
      >
        انتخاب‌های تازه {siteConfig.nameFa}؛ آرام، دقیق و مناسب همین لحظه.
      </p>
    </section>
  );
}
