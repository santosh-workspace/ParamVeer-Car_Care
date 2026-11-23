import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BrandStrip from "@/components/BrandStrip";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services } from "@/lib/services";
import { galleryItems } from "@/lib/gallery";
import {
  mapDirectionsUrl,
  mapEmbedUrl,
  site,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ParamVeer Car Care | Car Service Center in Moshi, Pimpri-Chinchwad",
  description:
    "Expert car care in Moshi, Pimpri-Chinchwad. Multi-brand servicing, AC repair, engine diagnostics, denting & painting and detailing. Established 2018. Open daily 9 AM – 9 PM. Call +91 75885 20106.",
  alternates: { canonical: "/" },
};

const featuredServices = services.filter((service) => service.featured).slice(0, 4);

const reasons = [
  {
    icon: ShieldCheck,
    title: "Straight answers before work begins",
    description:
      "We explain what we have found and what we recommend, so you can make the decision with confidence — not pressure.",
  },
  {
    icon: Wrench,
    title: "One workshop, many brands",
    description:
      "Hatchback, sedan or SUV; petrol or diesel. Our team handles a wide range of makes under one roof.",
  },
  {
    icon: Sparkles,
    title: "Care in the details",
    description:
      "From protection covers to a final check before handover, we treat every car with the attention it deserves.",
  },
  {
    icon: CalendarCheck,
    title: "Open when it suits you",
    description:
      "Seven days a week, 9 AM to 9 PM, right here in Moshi — so servicing does not have to disrupt your week.",
  },
];

const previewImages = [
  galleryItems[0],
  galleryItems[3],
  galleryItems[5],
  galleryItems[1],
  galleryItems[13],
  galleryItems[8],
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="section overflow-hidden">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Welcome to ParamVeer Car Care</p>
            <h2 className="display-2 mt-4 max-w-xl">
              The workshop your car deserves — and your schedule can trust.
            </h2>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
              Since {site.established}, ParamVeer Car Care has been a familiar name for
              car owners in Moshi and around Pimpri-Chinchwad. We are a multi-brand
              workshop built around a simple idea: do the job properly, explain it
              clearly, and treat every car as if it were our own.
            </p>
            <p className="mt-3.5 max-w-xl text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
              Whether it is a routine service, an AC that is not cooling, or bodywork
              after a scrape, you get a team that listens first and works with care.
            </p>

            <dl className="mt-7 grid max-w-lg grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {[
                { value: "2018", label: "Established" },
                { value: "8", label: "Core services" },
                { value: "7", label: "Days open" },
                { value: "1", label: "Point of contact" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-ink/10 pl-3.5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-[1.7rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                    {stat.value}
                  </dd>
                  <dd className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/about" className="btn btn-dark">
                Our story
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href={site.phoneHref} className="btn btn-outline-dark">
                <Phone className="size-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={1} className="relative pb-10 pr-6 sm:pr-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-charcoal ring-1 ring-ink/10">
              <Image
                src="/images/about-workshop.jpg"
                alt="Car raised on a lift inside a professional automotive workshop"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-0 right-0 aspect-square w-[46%] overflow-hidden rounded-[1.1rem] border-[5px] border-white bg-charcoal shadow-xl">
              <Image
                src="/images/team-service.jpg"
                alt="Technician working carefully under the bonnet of a car"
                fill
                sizes="(max-width: 1023px) 44vw, 21vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-4 top-4 rounded-xl bg-orange px-3.5 py-2.5 shadow-lg sm:left-5 sm:top-5">
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-ink/65">
                Serving Moshi since
              </p>
              <p className="text-xl font-extrabold leading-none tracking-tight text-ink">
                {site.established}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            eyebrow="Popular services"
            title="Popular services, handled properly."
            description="Everything from routine maintenance to cosmetic care — with clear guidance at every step."
            cta={
              <Link href="/services" className="btn btn-outline-dark min-h-11">
                View all services
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-ink/[0.08] bg-white px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-[13px] text-ink/55">
              Not sure what your car needs? Send us a message and we will point you in the
              right direction.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa min-h-10 shrink-0 px-4 text-[11.5px]"
            >
              <WhatsAppIcon className="size-3.5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 size-[30rem] rounded-full bg-orange/[0.07] blur-[120px]"
        />
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 className="display-2 mt-4 max-w-lg">Why drivers in Moshi keep coming back.</h2>
            <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-white/55 sm:text-[15.5px]">
              No jargon. No guesswork. Just a workshop that takes the time to understand
              your car and keeps you part of the conversation.
            </p>

            <figure className="mt-7 max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Quote className="size-5 text-orange" aria-hidden="true" />
              <blockquote className="mt-3 text-[13px] leading-relaxed text-white/75">
                “The owner is very trustworthy and makes sure customers are satisfied.”
              </blockquote>
              <figcaption className="mt-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Sachin Hosmani · Google review
              </figcaption>
            </figure>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/about" className="btn btn-primary">
                More about us
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon className="size-4" />
                Talk to our team
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <li key={reason.title} className="flex gap-4 py-5 sm:gap-5 sm:py-6">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange sm:size-10">
                      <Icon className="size-4 sm:size-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[9px] font-bold tabular-nums tracking-widest text-white/25">
                          0{index + 1}
                        </span>
                        <h3 className="text-[14.5px] font-bold tracking-tight text-white sm:text-[15.5px]">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <Clock className="size-4 shrink-0 text-orange" aria-hidden="true" />
              <p className="text-[11.5px] text-white/55">
                <span className="font-bold text-white">Open every day.</span>{" "}
                {site.hours}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Inside the workshop"
            title="Care you can see in the details."
            description="A look at the spaces and processes behind every service — from inspection to finishing."
            cta={
              <Link href="/gallery" className="btn btn-outline-dark min-h-11">
                Open full gallery
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:mt-10">
            <Reveal className="col-span-2">
              <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.2rem] sm:aspect-[2/1]">
                <Image
                  src="/images/workshop-wide.jpg"
                  alt="Wide view of a professional automotive workshop with a classic car"
                  fill
                  sizes="(max-width: 1023px) 100vw, 70vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-orange">
                    The workshop
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-white sm:text-[15px]">
                    Space to work, room to care.
                  </p>
                </div>
              </div>
            </Reveal>
            {[
              {
                src: "/images/gallery-inspection.jpg",
                alt: "Technician inspecting a car raised on a lift",
                label: "Inspection",
              },
              {
                src: "/images/service-general.jpg",
                alt: "Technician working carefully under the bonnet of a car",
                label: "Hands-on service",
              },
            ].map((image, index) => (
              <Reveal key={image.src} delay={(index + 1) as 1 | 2}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1023px) 50vw, 35vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent"
                  />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[11px] font-bold text-white sm:p-4 sm:text-[13px]">
                    {image.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-4 text-[10.5px] leading-relaxed text-ink/40">
            Illustrative photography — representative of a professional workshop
            environment, not photographs of our actual premises.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            eyebrow="Customer feedback"
            title="What our customers say."
            description="Real feedback shared with us on Google — the good, and the feedback we learn from."
            align="center"
          />
          <div className="mt-8 lg:mt-10">
            <Reviews />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="shell flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">From the gallery</p>
            <h2 className="display-2 mt-3.5 max-w-xl text-white">
              A little of what we do, up close.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-11 items-center gap-2 text-[12px] font-bold text-white/70 transition hover:text-orange"
          >
            Explore the gallery
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="no-scrollbar mx-auto mt-8 flex w-full max-w-[80rem] snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
          {previewImages.map((image) => (
            <Link
              key={image.src}
              href="/gallery"
              className="group relative aspect-[4/3] w-[76vw] max-w-[21rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-charcoal sm:w-[38vw] lg:w-[24rem]"
              aria-label={`View gallery — ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 76vw, (max-width: 1023px) 38vw, 24rem"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-orange">
                    {image.category}
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-white">{image.caption}</p>
                </div>
                <span className="grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur">
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="shell mt-3 text-[10.5px] text-white/35 sm:hidden">Swipe to explore →</p>
      </section>

      <section className="section bg-cream">
        <div className="shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-10">
          <Reveal>
            <p className="eyebrow">Find us</p>
            <h2 className="display-2 mt-4 max-w-md">Easy to find. Open seven days.</h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink/55">
              We are located in Moshi Gaon, Pimpri-Chinchwad — convenient for drivers
              across Moshi, Bhosari, Chakan and the wider PCMC area.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/[0.06]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                  <MapPin className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Workshop address
                  </p>
                  <address className="mt-1 text-[13px] font-semibold not-italic leading-relaxed text-ink">
                    {site.address.line1},<br />
                    {site.address.line2}
                  </address>
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/[0.06]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                  <Clock className="size-[18px]" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Business hours
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-3 text-[13px] font-semibold text-ink">
                    <span>Monday – Sunday</span>
                    <span>9:00 AM – 9:00 PM</span>
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-[#0b6b35]">
                    <span className="size-1.5 rounded-full bg-whatsapp" aria-hidden="true" />
                    Open all 7 days
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary col-span-2 min-h-11"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
              <a href={site.phoneHref} className="btn btn-outline-dark min-h-11">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa min-h-11"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>

            <a
              href={site.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-[11.5px] font-bold text-ink/55 transition hover:text-orange"
            >
              View our Google Business Profile
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={1}>
            <div className="h-full overflow-hidden rounded-[1.4rem] bg-white p-1.5 ring-1 ring-ink/[0.08]">
              <iframe
                title="Map showing ParamVeer Car Care in Moshi, Pimpri-Chinchwad"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[19rem] w-full rounded-[1.1rem] border-0 sm:h-[23rem] lg:h-full lg:min-h-[27rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
