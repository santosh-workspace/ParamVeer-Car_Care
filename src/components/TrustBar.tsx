import Link from "next/link";
import { CalendarCheck, MapPin, Settings2, Star, Wrench } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  {
    icon: Star,
    label: "Google rating",
    value: `${site.googleRating} / 5`,
    detail: "As supplied by the business",
    href: site.googleProfileUrl,
    external: true,
  },
  {
    icon: Wrench,
    label: "Multi-brand",
    value: "Most major brands",
    detail: "Tell us your model",
    href: "/services",
    external: false,
  },
  {
    icon: CalendarCheck,
    label: "Open every day",
    value: "9 AM – 9 PM",
    detail: "Monday to Sunday",
    href: "/appointment",
    external: false,
  },
  {
    icon: MapPin,
    label: "Find us in",
    value: "Moshi, PCMC",
    detail: "Pimpri-Chinchwad, 411070",
    href: "/contact",
    external: false,
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Workshop highlights" className="border-b border-ink/[0.07] bg-white">
      <div className="shell grid grid-cols-2 gap-x-4 gap-y-6 py-6 sm:py-8 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange sm:size-10">
                <Icon className="size-4 sm:size-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink/40">
                  {item.label}
                </span>
                <span className="mt-1 block text-[14.5px] font-extrabold leading-tight tracking-tight text-ink sm:text-sm">
                  {item.value}
                </span>
                <span className="mt-0.5 hidden text-[10.5px] leading-tight text-ink/45 sm:block">
                  {item.detail}
                </span>
              </span>
            </>
          );

          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition hover:opacity-80"
            >
              {content}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-start gap-3 transition hover:opacity-80"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
