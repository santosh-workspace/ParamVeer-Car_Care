import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/reviews";
import { site } from "@/lib/site";

export default function BrandStrip() {
  const row = [...brands, ...brands];

  return (
    <section aria-labelledby="brands-heading" className="overflow-hidden bg-cream py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Multi-brand workshop</p>
            <h2 id="brands-heading" className="display-2 mt-3.5 max-w-xl">
              One workshop for the cars you actually drive.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-ink/50">
            From daily commuters to family SUVs, we work on most major brands. Tell us
            your model and the service you need — we will confirm what we can do.
          </p>
        </div>
      </div>

      <div className="marquee relative mt-9 sm:mt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28"
        />
        <ul className="marquee-track flex items-center gap-3 pr-3" aria-label="Brands we commonly service">
          {row.map((brand, index) => (
            <li
              key={`${brand}-${index}`}
              aria-hidden={index >= brands.length ? true : undefined}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-ink/[0.08] bg-white px-4 py-3.5 sm:px-5 sm:py-4"
            >
              <span className="grid size-7 place-items-center rounded-full bg-orange text-[9px] font-black text-ink sm:size-8">
                {brand
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <span className="whitespace-nowrap text-[14.5px] font-bold tracking-[-0.01em] text-ink/75 sm:text-sm">
                {brand}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-[10.5px] leading-relaxed text-ink/40">
          Brand names are shown as text references only. Support may vary by model,
          variant and service — please confirm with our team before booking.
        </p>
        <a
          href={site.phoneHref}
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 text-[11.5px] font-bold text-ink transition hover:text-orange"
        >
          Ask about your model
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
