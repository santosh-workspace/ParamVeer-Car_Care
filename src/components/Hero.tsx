import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[37rem] flex-col overflow-hidden bg-ink text-white sm:min-h-[41rem] lg:min-h-[45rem]">
      <picture>
        <source media="(max-width: 639px)" srcSet="/images/hero-mobile.jpg" />
        <img
          src="/images/hero.jpg"
          alt="Premium car photographed at dusk, representing the multi-brand vehicles serviced at ParamVeer Car Care"
          width={1920}
          height={1180}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[66%_center] sm:object-[60%_center]"
        />
      </picture>

      <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20 sm:via-ink/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/75 to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/3 size-72 rounded-full bg-orange/10 blur-[100px]"
      />

      <div className="shell relative flex flex-1 flex-col justify-end pb-9 pt-28 sm:pb-12 sm:pt-32 lg:pb-16 lg:pt-40">
        <div className="max-w-[43rem]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm sm:text-[10px]">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex size-1.5 rounded-full bg-orange" />
              </span>
              Moshi, Pimpri-Chinchwad
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm sm:text-[10px]">
              <Star className="size-3 fill-orange text-orange" aria-hidden="true" />
              {site.googleRating} Google rating
            </span>
          </div>

          <h1 className="display-1 mt-5">
            Expert Car Care.
            <br />
            <span className="text-orange">Complete Peace</span>
            <br className="sm:hidden" /> of Mind.
          </h1>

          <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-white/70 sm:text-[15px]">
            A multi-brand workshop in Moshi, caring for everyday cars and premium
            vehicles since {site.established}. Honest advice, careful workmanship and a
            team that keeps you informed.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center">
            <Link href="/appointment" className="btn btn-primary col-span-2 sm:col-auto">
              Book Appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[10.5px] font-medium text-white/55 sm:text-[11.5px]">
            <a
              href={site.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Star className="size-3.5 fill-orange text-orange" aria-hidden="true" />
              <span>
                <strong className="font-bold text-white">{site.googleRating} / 5</strong> on
                Google
              </span>
            </a>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-orange" aria-hidden="true" />
              Open daily, 9 AM – 9 PM
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
            <a href="/contact" className="inline-flex items-center gap-1.5 transition hover:text-white">
              <MapPin className="size-3.5 text-orange" aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
