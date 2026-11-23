import type { Metadata } from "next";
import {
  CalendarCheck,
  Check,
  Clock,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { appointmentNote, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request a car service appointment at ParamVeer Car Care in Moshi, Pimpri-Chinchwad. Share your car details, preferred date and service — we will confirm availability on WhatsApp.",
  alternates: { canonical: "/appointment" },
  openGraph: {
    title: "Book a Car Service Appointment | ParamVeer Car Care",
    description:
      "Send an appointment enquiry to ParamVeer Car Care, Moshi. Open daily 9 AM – 9 PM.",
    url: "/appointment",
    images: ["/images/service-general.jpg"],
  },
};

const nextSteps = [
  {
    title: "Send your request",
    text: "Share your car details, the service you need and a preferred date and time.",
  },
  {
    title: "We check availability",
    text: "Our team reviews the workshop schedule and gets back to you on WhatsApp or by phone.",
  },
  {
    title: "Visit the workshop",
    text: "Once confirmed, bring your car to Moshi Gaon at the agreed time.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        breadcrumb="Book an Appointment"
        eyebrow="Appointments"
        title={
          <>
            Book your visit.
            <br />
            We will take it from there.
          </>
        }
        description={
          <p>
            Send us your car details and preferred slot. This is an appointment enquiry,
            not an instant confirmation — our team will check workshop availability and
            get back to you.
          </p>
        }
      >
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-white/55">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-orange" aria-hidden="true" />
            Open daily, 9 AM – 9 PM
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageSquareText className="size-3.5 text-orange" aria-hidden="true" />
            Request sent via WhatsApp
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-orange" aria-hidden="true" />
            Moshi Gaon, PCMC
          </span>
        </div>
      </PageHero>

      <section className="section bg-cream">
        <div className="shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-8">
          <div>
            <AppointmentForm />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-5 text-white sm:p-6">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-36 rounded-full bg-orange/15 blur-2xl"
              />
              <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-orange">
                What happens next
              </p>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                Three simple steps.
              </h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-orange text-[10px] font-black text-ink">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold text-white">{step.title}</p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-white/50">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/[0.06] px-3 py-2.5 text-[10.5px] text-white/55">
                <ShieldCheck className="size-4 shrink-0 text-orange" aria-hidden="true" />
                No online payment. No account needed.
              </div>
            </div>

            <div className="card p-5 sm:p-6">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-orange">
                Prefer to speak?
              </p>
              <h2 className="mt-2 text-lg font-extrabold tracking-tight text-ink">
                We are one call away.
              </h2>
              <p className="mt-2 text-[12px] leading-relaxed text-ink/55">
                Not sure about the service or the right slot? Talk to us directly — we
                will help you choose.
              </p>
              <div className="mt-4 grid gap-2">
                <a href={site.phoneHref} className="btn btn-dark min-h-11 w-full text-[12px]">
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa min-h-11 w-full text-[12px]"
                >
                  <WhatsAppIcon className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-4 space-y-2 border-t border-ink/[0.07] pt-4 text-[11.5px] leading-relaxed text-ink/55">
                <p className="flex gap-2">
                  <Clock className="mt-0.5 size-3.5 shrink-0 text-orange" aria-hidden="true" />
                  {site.hours}
                </p>
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-orange" aria-hidden="true" />
                  {site.address.full}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-orange/20 bg-orange/[0.06] p-4">
              <p className="flex gap-2 text-[10.5px] leading-relaxed text-ink/60">
                <Wrench className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                <span>
                  <strong className="font-bold text-ink">Please note:</strong>{" "}
                  {appointmentNote}
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink/[0.07] bg-white py-10">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CalendarCheck,
              title: "Choose your slot",
              text: "Request a date and time that suits you. We confirm based on availability.",
            },
            {
              icon: MessageSquareText,
              title: "Everything in WhatsApp",
              text: "Your details are formatted into a message — no need to repeat yourself.",
            },
            {
              icon: Check,
              title: "No obligation",
              text: "An enquiry does not commit you to any work. We advise, you decide.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink/50">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
