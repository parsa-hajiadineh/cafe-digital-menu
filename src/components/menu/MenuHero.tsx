import { BotanicalMark } from "@/components/brand/BotanicalMark";
import { PowerIcon } from "@/components/brand/PowerIcon";
import { motionDelay } from "@/lib/motion";
import { siteConfig } from "@/lib/config/site";

export function MenuHero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-4 pt-10 text-center">
      <div className="motion-seal relative mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center text-sage-deep">
        <span className="seal-ring-outer" />
        <span className="seal-ring-inner" />
        <PowerIcon className="h-8 w-8" />
      </div>
      <p
        className="motion-rise text-[11px] tracking-[0.32em] text-sage-deep"
        style={motionDelay(1, 90)}
      >
        منوی امروز
      </p>
      <h1
        className="motion-rise mt-3 text-4xl text-ink"
        style={motionDelay(2, 90)}
      >
        {siteConfig.nameFa}
      </h1>
      <div className="motion-line mt-4 flex items-center gap-3 text-sage-deep">
        <span className="h-px w-10 bg-gradient-to-l from-sage to-transparent" />
        <BotanicalMark className="h-7 w-7 atmosphere-drift" />
        <span className="h-px w-10 bg-gradient-to-r from-sage to-transparent" />
      </div>
      <p
        className="motion-rise mt-4 max-w-[16rem] text-sm leading-8 text-muted"
        style={motionDelay(3, 90)}
      >
        انتخاب‌های تازه {siteConfig.nameFa}؛ آرام، دقیق و مناسب همین لحظه.
      </p>
    </section>
  );
}
