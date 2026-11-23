import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export default function CTASection({
  title = "Ready when your car is.",
  description = "Tell us what your car needs and we will help you find a convenient slot. Simple, honest and straight to the point.",
  compact = false,
}: Props) {
  return (
    <section className={`bg-ink ${compact ? "py-12 sm:py-14" : "py-16 sm:py-20"}`}>
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[1.6rem] bg-orange px-5 py-10 text-ink sm:px-8 sm:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-24 select-none text-[18rem] font-black italic leading-none tracking-[-0.15em] text-ink/[0.06] sm:text-[24rem]"
          >
            PV
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,transparent,transparent_10px,#101214_10px,#101214_11px)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-ink/65">
                <span className="h-px w-6 bg-ink/50" aria-hidden="true" />
                Book your visit
              </p>
              <h2 className="display-2 mt-4 max-w-xl text-ink">{title}</h2>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/70">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link href="/appointment" className="btn btn-dark w-full">
                <CalendarDays className="size-4" aria-hidden="true" />
                Book Appointment
              </Link>
              <div className="grid grid-cols-2 gap-2.5">
                <a href={site.phoneHref} className="btn min-h-11 w-full bg-ink/10 text-ink ring-1 ring-ink/20 hover:bg-ink/15">
                  <Phone className="size-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn min-h-11 w-full bg-white text-ink hover:bg-cream"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </div>
              <p className="mt-1 text-center text-[10.5px] font-medium text-ink/55">
                {site.hoursShort} · Moshi, PCMC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
