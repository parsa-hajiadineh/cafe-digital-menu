import { BotanicalMark } from "@/components/brand/BotanicalMark";

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="light-ray" />
      <div className="atmosphere-orb -right-16 top-8" />
      <div className="atmosphere-orb atmosphere-orb-delay -left-20 top-[26rem]" />
      <div className="atmosphere-orb atmosphere-orb-soft right-8 top-[52rem]" />
      <BotanicalMark className="atmosphere-drift absolute -left-6 top-36 h-28 w-28 opacity-20" />
      <BotanicalMark className="atmosphere-drift-slow absolute -right-8 top-[38rem] h-24 w-24 rotate-12 opacity-15" />
      <div className="vignette" />
    </div>
  );
}
