import { ArrowUpRight, Quote } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

function GoogleMark() {
  return (
    <span
      aria-hidden="true"
      className="flex size-6 items-center justify-center rounded-full bg-white text-[12px] font-black shadow-sm ring-1 ring-ink/10"
    >
      <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
        G
      </span>
    </span>
  );
}

type Props = {
  compact?: boolean;
};

export default function Reviews({ compact = false }: Props) {
  return (
    <div>
      <div className={`grid gap-3.5 sm:grid-cols-2 ${compact ? "" : "lg:grid-cols-3"}`}>
        {reviews.map((review, index) => (
          <figure
            key={review.name}
            className={`flex flex-col rounded-2xl border p-5 transition duration-300 sm:p-6 ${
              review.tone === "critical"
                ? "border-ink/[0.09] bg-ink/[0.025]"
                : "border-ink/[0.08] bg-white hover:border-ink/15 hover:shadow-[0_20px_50px_-34px_rgba(16,18,20,0.4)]"
            } ${!compact && index === 2 ? "lg:col-span-1" : ""}`}
          >
            <div className="flex items-center justify-between">
              <GoogleMark />
              <Quote className="size-5 text-ink/10" aria-hidden="true" />
            </div>
            <blockquote className="mt-4 flex-1">
              <p className="text-[14.5px] leading-relaxed text-ink/75">“{review.quote}”</p>
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/[0.07] pt-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">
                {review.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <span>
                <span className="block text-[13px] font-bold text-ink">{review.name}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/40">
                  Google review
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-ink/[0.035] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p className="max-w-xl text-[11px] leading-relaxed text-ink/50">
          <span className="font-bold text-ink/70">{site.googleRating} / 5</span> Google
          rating, shown as supplied by the business. Reviews are reproduced as provided —
          please check the latest ratings and feedback on Google.
        </p>
        <a
          href={site.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark min-h-11 shrink-0 px-5 text-[12px]"
        >
          View all Google reviews
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
