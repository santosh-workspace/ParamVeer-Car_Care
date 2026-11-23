import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Eye,
  HeartHandshake,
  MessageSquareText,
  Phone,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ParamVeer Car Care — a multi-brand automobile workshop in Moshi, Pimpri-Chinchwad, established in 2018. Our story, mission, service philosophy and workshop.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ParamVeer Car Care | Multi-Brand Workshop in Moshi",
    description:
      "A multi-brand automobile workshop in Moshi, Pimpri-Chinchwad. Caring for cars since 2018 with honest advice and careful workmanship.",
    url: "/about",
    images: ["/images/about-workshop.jpg"],
  },
};

const principles = [
  {
    icon: MessageSquareText,
    title: "Listen first",
    description:
      "We start by understanding your complaint, your routine and what you have already tried. It saves time and avoids unnecessary work.",
  },
  {
    icon: Sparkles,
    title: "Respect the car",
    description:
      "Careful handling, protection and a tidy workspace are part of the job — not an optional extra.",
  },
  {
    icon: HeartHandshake,
    title: "Be straight with people",
    description:
      "We explain what we found, what we recommend and what can wait. The decision stays with you.",
  },
  {
    icon: Check,
    title: "Check the finish",
    description:
      "Before handover, we check the work and make sure the car is ready for the road again.",
  },
];

const capabilities = [
  "Periodic servicing and maintenance",
  "Engine diagnostics and repair guidance",
  "Car AC inspection, servicing and repair",
  "Brake inspection and replacement",
  "Denting, painting and bodywork",
  "Washing, cleaning and detailing",
  "Battery and electrical checks",
  "Suspension and tyre services",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="Since 2018 · Moshi, PCMC"
        title={
          <>
            A workshop built on care,
            <br />
            not shortcuts.
          </>
        }
        description={
          <p>
            ParamVeer Car Care is a multi-brand automobile workshop in Moshi,
            Pimpri-Chinchwad. We look after everyday cars and premium vehicles with the
            same simple approach: understand the problem, explain it clearly, and do the
            work with care.
          </p>
        }
        image={{
          src: "/images/about-workshop.jpg",
          alt: "Car on a lift inside a professionally equipped workshop",
        }}
        imagePriority
        badge={{ value: "2018", label: "Serving Moshi since" }}
      >
        <Link href="/appointment" className="btn btn-primary">
          Book Appointment
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <WhatsAppIcon className="size-4" />
          Talk to us
        </a>
      </PageHero>

      <section className="section">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="display-2 mt-4 max-w-xl">
              It started with a simple promise.
            </h2>
            <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
              <p>
                ParamVeer Car Care opened its doors in {site.established} with a
                straightforward goal: give car owners in Moshi a workshop they could rely
                on. Not just for the work itself, but for the way they were treated while
                they were here.
              </p>
              <p>
                Over the years, the workshop has grown into a multi-brand destination for
                servicing, repairs and cosmetic care. What has not changed is the
                hands-on involvement in every job and the belief that a customer who
                understands the work is a customer who can trust it.
              </p>
              <p>
                Today, drivers come to us for everything from a routine oil change to AC
                repairs, denting and painting, or a full detailing session. Whatever the
                reason, the approach stays the same: listen, explain, and do it properly.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-dark">
                <Phone className="size-4" aria-hidden="true" />
                Call the workshop
              </a>
              <Link href="/services" className="btn btn-outline-dark">
                Explore services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] ring-1 ring-ink/10">
                <Image
                  src="/images/about-story.jpg"
                  alt="Workshop shelves stocked with car care products and parts"
                  fill
                  sizes="(max-width: 1023px) 100vw, 46vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
                />
                <p className="absolute bottom-3 left-3.5 rounded-full bg-ink/55 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur">
                  Illustrative photograph
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-ink/[0.08] bg-cream px-4 py-3.5">
                  <p className="text-xl font-extrabold tracking-tight text-ink">2018</p>
                  <p className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                    Established
                  </p>
                </div>
                <div className="rounded-xl border border-ink/[0.08] bg-cream px-4 py-3.5">
                  <p className="text-xl font-extrabold tracking-tight text-ink">7 days</p>
                  <p className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                    Open every week
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:gap-5">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <span className="grid size-10 place-items-center rounded-full bg-orange/15 text-orange">
                <Target className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                Our mission
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                To make quality car care straightforward for every driver in Moshi and
                Pimpri-Chinchwad — with clear communication, careful workmanship and a
                service experience that respects your time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <span className="grid size-10 place-items-center rounded-full bg-orange/15 text-orange">
                <Eye className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                Our vision
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                To be the neighbourhood workshop that car owners recommend without
                hesitation — known for honest advice, consistent quality and genuine care
                for every vehicle that comes through our doors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            eyebrow="Service philosophy"
            title="How we approach every job."
            description="Good car care is as much about communication as it is about tools. These are the principles that guide our work."
            align="center"
          />
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <div className="card h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-full bg-orange/10 text-orange">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <span className="text-[10px] font-bold tabular-nums tracking-widest text-ink/20">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold tracking-tight text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] ring-1 ring-ink/10 lg:aspect-[5/4]">
              <Image
                src="/images/workshop-wide.jpg"
                alt="Interior of a professional car workshop with equipment and a vehicle"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-orange">
                  Workshop capabilities
                </p>
                <p className="mt-1 text-[14px] font-bold text-white">
                  The work we take on, under one roof.
                </p>
                <p className="mt-1 text-[9.5px] text-white/50">Illustrative photograph</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="eyebrow">Our facilities</p>
            <h2 className="display-2 mt-4 max-w-lg">
              Equipped for the services you actually need.
            </h2>
            <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/55">
              Our workshop handles a broad range of maintenance, repair and cosmetic
              work. Tell us your car model and the service you have in mind — we will
              confirm what we can do and how long it is likely to take.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-2 rounded-xl bg-cream px-3.5 py-3 text-[12px] leading-snug text-ink/70"
                >
                  <Check className="mt-0.5 size-3.5 shrink-0 text-orange" aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn btn-dark mt-6">
              See all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow">The people behind the work</p>
            <h2 className="display-2 mt-4 max-w-lg text-white">
              A team that treats your car like their own.
            </h2>
            <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-white/55 sm:text-[15.5px]">
              Experienced hands, a practical mindset and pride in a job done well. From
              the first inspection to the final handover, the same team stays accountable
              for your car.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Hands-on involvement from the workshop team",
                "Clear updates on what your car needs",
                "Careful handling and a tidy finish",
                "Seven-day availability for your convenience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/65">
                  <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/appointment" className="btn btn-primary">
                Book an appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] ring-1 ring-white/10 sm:aspect-[16/11]">
                <Image
                  src="/images/team-foreman.jpg"
                  alt="Automotive technician standing in a workshop"
                  fill
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] text-white/55 sm:p-5">
                  Illustrative photograph — representative of a professional workshop
                  team, not a photo of our actual staff.
                </figcaption>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            eyebrow="Why choose us"
            title="The difference is in how you are treated."
            description="A good workshop should leave you feeling informed, respected and confident about the work on your car."
          />
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wrench,
                title: "Multi-brand know-how",
                text: "Experience across a wide range of makes and models, from daily drivers to premium cars.",
              },
              {
                icon: MessageSquareText,
                title: "Clear communication",
                text: "We explain the work and the options before we proceed, so there are no surprises.",
              },
              {
                icon: Sparkles,
                title: "Careful workmanship",
                text: "Attention to the small things — protection, cleanliness and a proper final check.",
              },
              {
                icon: CalendarCheck,
                title: "Seven days a week",
                text: "Open every day from 9 AM to 9 PM, making it easier to fit servicing around life.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <div className="card h-full p-5">
                    <span className="grid size-10 place-items-center rounded-full bg-ink text-orange">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[14.5px] font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/55">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-ink/[0.08] bg-white px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-[13px] text-ink/55">
              Have a question about your car? We are happy to help before you book.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href={site.phoneHref} className="btn btn-outline-dark min-h-10 px-4 text-[11.5px]">
                <Phone className="size-3.5" aria-hidden="true" />
                Call us
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa min-h-10 px-4 text-[11.5px]"
              >
                <WhatsAppIcon className="size-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-[10.5px] text-ink/35">
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <Link href="/gallery" className="font-semibold underline-offset-4 hover:text-ink hover:underline">
              See representative photographs in our gallery
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Come and see the workshop for yourself."
        description="We are in Moshi Gaon, open every day. Book a slot or call ahead and we will guide you on the next step."
      />
    </>
  );
}
