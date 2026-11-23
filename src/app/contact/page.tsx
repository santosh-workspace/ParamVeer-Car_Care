import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  mapDirectionsUrl,
  mapEmbedUrl,
  mapPlaceUrl,
  site,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit ParamVeer Car Care in Moshi Gaon, Pimpri-Chinchwad. Call +91 75885 20106, WhatsApp us, get directions and see business hours. Open daily 9 AM – 9 PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Location | ParamVeer Car Care, Moshi",
    description:
      "Call, WhatsApp or visit ParamVeer Car Care in Moshi, Pimpri-Chinchwad. Address, map, directions and business hours.",
    url: "/contact",
    images: ["/images/hero.jpg"],
  },
};

const contactCards = [
  {
    icon: Phone,
    label: "Call the workshop",
    value: site.phoneDisplay,
    note: "Tap to dial directly",
    href: site.phoneHref,
    external: false,
    accent: "orange",
  },
  {
    icon: null,
    label: "WhatsApp",
    value: "Chat with our team",
    note: "Usually the quickest way to reach us",
    href: whatsappLink(),
    external: true,
    accent: "green",
  },
  {
    icon: MapPin,
    label: "Workshop address",
    value: "Moshi Gaon, PCMC",
    note: "Pimpri-Chinchwad, 411070",
    href: mapPlaceUrl,
    external: true,
    accent: "orange",
  },
  {
    icon: Clock,
    label: "Business hours",
    value: "9 AM – 9 PM",
    note: "Open Monday to Sunday",
    href: "/appointment",
    external: false,
    accent: "orange",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        eyebrow="Contact"
        title={
          <>
            Talk to us.
            <br />
            Find us. Visit us.
          </>
        }
        description={
          <p>
            Questions about a service, a quote or the right time to visit? Call, WhatsApp
            or drop by the workshop in Moshi Gaon — we are open every day.
          </p>
        }
      >
        <a href={site.phoneHref} className="btn btn-primary">
          <Phone className="size-4" aria-hidden="true" />
          Call {site.phoneDisplay}
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp us
        </a>
      </PageHero>

      <section className="relative z-10 -mt-6 pb-3 sm:-mt-8">
        <div className="shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-[0_18px_45px_-38px_rgba(16,18,20,0.4)] transition duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-[0_22px_50px_-32px_rgba(16,18,20,0.32)] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid size-10 place-items-center rounded-full ${
                        card.accent === "green"
                          ? "bg-whatsapp/12 text-[#0b6b35]"
                          : "bg-orange/10 text-orange"
                      }`}
                    >
                      {Icon ? (
                        <Icon className="size-[18px]" aria-hidden="true" />
                      ) : (
                        <WhatsAppIcon className="size-[18px]" />
                      )}
                    </span>
                    <ArrowUpRight className="size-4 text-ink/20 transition group-hover:text-orange" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    {card.label}
                  </p>
                  <p className="mt-1.5 text-[15px] font-extrabold leading-tight tracking-tight text-ink">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-ink/45">{card.note}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section pt-10 sm:pt-12">
        <div className="shell grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-10">
          <Reveal>
            <div>
              <p className="eyebrow">Our location</p>
              <h2 className="display-2 mt-4 max-w-lg">Right here in Moshi Gaon.</h2>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/55">
                Easy to reach from Moshi, Bhosari, Chakan and across Pimpri-Chinchwad.
                If you are visiting for the first time, call ahead and we will guide you
                in.
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.3rem] border border-ink/[0.08] bg-white p-1.5">
                <iframe
                  title="Google Map showing ParamVeer Car Care, Moshi Gaon, Pimpri-Chinchwad"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[19rem] w-full rounded-[1rem] border-0 sm:h-[23rem] lg:h-[25rem]"
                />
              </div>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary min-h-12"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={site.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark min-h-12"
                >
                  Google Business Profile
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-cream p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Address
                  </p>
                  <address className="mt-1.5 text-[13px] font-semibold not-italic leading-relaxed text-ink">
                    ParamVeer Car Care
                    <br />
                    {site.address.line1},
                    <br />
                    {site.address.line2}
                  </address>
                </div>
                <div className="rounded-xl bg-cream p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Business hours
                  </p>
                  <div className="mt-1.5 space-y-1.5 text-[12px] text-ink/65">
                    <div className="flex items-center justify-between gap-2">
                      <span>Monday – Sunday</span>
                      <span className="font-semibold text-ink">9 AM – 9 PM</span>
                    </div>
                    <p className="flex items-center gap-1.5 pt-1 text-[10.5px] font-semibold text-[#0b6b35]">
                      <span className="size-1.5 rounded-full bg-whatsapp" aria-hidden="true" />
                      Open all 7 days
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={site.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-ink/[0.08] px-4 py-3 transition hover:border-orange/40 hover:bg-orange/[0.03]"
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-3.5 fill-orange text-orange" />
                    ))}
                  </span>
                  <span className="text-[12px] font-bold text-ink">
                    {site.googleRating} / 5 on Google
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-ink/45">
                  Read reviews
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:sticky lg:top-28">
            <ContactForm />
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <a
                href={site.phoneHref}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-ink text-[12px] font-bold text-white transition hover:bg-charcoal"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp text-[12px] font-bold text-[#052e16] transition hover:brightness-105"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-center text-[10px] leading-relaxed text-ink/35">
              Enquiries sent through this form open in WhatsApp. No details are stored on
              this website.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-14">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Call us",
              text: "For quick questions, availability and directions.",
              href: site.phoneHref,
              label: site.phoneDisplay,
              external: false,
              icon: Phone,
            },
            {
              title: "WhatsApp",
              text: "Send photos, car details or a service enquiry.",
              href: whatsappLink(),
              label: "Start a chat",
              external: true,
              icon: null,
            },
            {
              title: "Visit",
              text: "Moshi Gaon, Moshi, Pimpri-Chinchwad 411070.",
              href: mapDirectionsUrl,
              label: "Get directions",
              external: true,
              icon: MapPin,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-ink/[0.06] transition hover:ring-orange/30"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                  {Icon ? (
                    <Icon className="size-4" aria-hidden="true" />
                  ) : (
                    <WhatsAppIcon className="size-4" />
                  )}
                </span>
                <span>
                  <span className="block text-[13px] font-bold text-ink">{item.title}</span>
                  <span className="mt-0.5 block text-[10.5px] leading-relaxed text-ink/45">
                    {item.text}
                  </span>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[10.5px] font-bold text-ink/65 group-hover:text-orange">
                    {item.label}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
