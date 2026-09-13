import { siteConfig } from "@/lib/config/site";

export function formatNumber(value: number) {
  return new Intl.NumberFormat(siteConfig.locale).format(value);
}

export function formatPrice(amount: number) {
  return `${formatNumber(amount)} ${siteConfig.currencyLabel}`;
}
