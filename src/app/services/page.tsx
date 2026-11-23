import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  MessageSquareText,
  Phone,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Car services in Moshi, Pimpri-Chinchwad — general servicing, engine diagnostics, AC repair, brakes, denting & painting, washing & detailing, battery & electrical, suspension & tyres.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Car Services in Moshi | ParamVeer Car Care",
    description:
      "Multi-brand car servicing, AC repair, diagnostics, denting and painting, detailing and more in Moshi, Pimpri-Chinchwad.",
    url: "/services",
    images: ["/images/service-general.jpg"],
  },
};

const processSteps = [
  {
    icon: MessageSquareText,
    title: "Get in touch",
    description:
      "Call, message on WhatsApp or send an appointment request with your car details and what you have noticed.",
  },
  {
    icon: Search,
    title: "Inspect & advise",
    description:
      "We look at the vehicle, identify what needs attention and explain the options in plain language.",
  },
  {
    icon: ClipboardList,
    title: "Approve the work",
    description:
      "You decide what to proceed with. We confirm the scope before any work begins.",
  },
  {
    icon: Sparkles,
    title: "Collect your car",
    description:
      "We finish the job, check the work and hand your car back with the details you need.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Our Services"
        eyebrow="Multi-brand car care"
        title={
          <>
            Everything your car needs,
            <br className="hidden sm:block" /> under one roof.
          </>
        }
        description={
          <p>
            From routine servicing to repairs and cosmetic care, our Moshi workshop
            handles a wide range of jobs for most major car brands. Clear advice, careful
            work and a team that keeps you informed.
          </p>
        }
        wide
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
          Enquire on WhatsApp
        </a>
      </PageHero>

      <div className="border-b border-ink/[0.07] bg-white">
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
          <span className="hidden shrink-0 items-center pr-2 text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/35 lg:flex">
            Jump to
          </span>
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-ink/10 bg-white px-3.5 text-[11px] font-semibold text-ink/60 transition hover:border-orange hover:text-ink"
            >
              {service.title}
            </a>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Our services"
            title="Eight services. One accountable team."
            description="Each job starts with a conversation and an inspection. We will tell you what we find, what we recommend and what can safely wait."
            cta={
              <a
                href={site.phoneHref}
                className="btn btn-outline-dark min-h-11"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            }
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) as 0 | 1 | 2} className="h-full">
                <ServiceCard service={service} detailed priority={index < 2} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-ink/[0.08] bg-cream p-5 sm:grid-cols-3 sm:p-6">
            {[
              {
                title: "Clear before we start",
                text: "We explain the recommended work and confirm it with you first.",
              },
              {
                title: "Most major brands",
                text: "Tell us your model — we will confirm support for your required service.",
              },
              {
                title: "Seven days a week",
                text: "Open every day, 9 AM to 9 PM, in Moshi Gaon.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="text-[12px] font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink/50">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 size-80 rounded-full bg-orange/[0.08] blur-[110px]"
        />
        <div className="shell">
          <SectionHeading
            eyebrow="What to expect"
            title="A simple, transparent process."
            description="No mystery, no pressure. Just a clear path from your first message to collecting your car."
            dark
          />
          <ol className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <li className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-full bg-orange/15 text-orange">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <span className="text-2xl font-extrabold tracking-tight text-white/10">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[14.5px] font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2.5 text-[12px] text-white/60">
              <Wrench className="size-4 shrink-0 text-orange" aria-hidden="true" />
              Not sure which service you need? Describe the issue and we will help.
            </p>
            <a
              href={whatsappLink(
                "Hello ParamVeer Car Care, I am not sure which service my car needs. Could you help me understand the right option?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa min-h-10 shrink-0 px-4 text-[11.5px]"
            >
              <WhatsAppIcon className="size-3.5" />
              Ask our team
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Book the service your car needs."
        description="Send us your car details and preferred slot. We will confirm availability and guide you from there."
      />
    </>
  );
}
