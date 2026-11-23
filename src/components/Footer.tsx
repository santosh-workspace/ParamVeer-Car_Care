import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services } from "@/lib/services";
import {
  mapDirectionsUrl,
  site,
  whatsappLink,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.2fr] lg:gap-12 lg:py-20">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/55">
            A multi-brand automobile workshop in Moshi, Pimpri-Chinchwad — caring for
            everyday cars and premium vehicles since {site.established}.
          </p>

          <a
            href={site.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3 fill-orange text-orange" />
              ))}
            </span>
            <span className="text-xs font-semibold text-white">{site.googleRating}/5</span>
            <span className="text-[11px] text-white/45">Google rating</span>
            <ArrowUpRight className="size-3.5 text-white/40" aria-hidden="true" />
          </a>

          <div className="mt-5 flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="icon-btn size-10 bg-white/[0.06] text-white ring-1 ring-white/10 hover:bg-orange hover:text-ink"
              aria-label={`Call ${site.name} on ${site.phoneDisplay}`}
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn size-10 bg-white/[0.06] text-white ring-1 ring-white/10 hover:bg-whatsapp hover:text-[#052e16]"
              aria-label="Chat with ParamVeer Car Care on WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href={site.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-white/[0.06] px-3.5 text-[11px] font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white hover:text-ink"
            >
              Google Business Profile
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/40">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/appointment", label: "Book an Appointment" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-7 items-center text-[13px] text-white/60 transition hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/40">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex min-h-7 items-center text-[13px] text-white/60 transition hover:text-orange"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex min-h-7 items-center gap-1 text-[13px] font-semibold text-orange"
              >
                View all services
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/40">
            Visit the workshop
          </h2>
          <ul className="mt-4 space-y-3.5 text-[13px] leading-relaxed text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
              <address className="not-italic">
                {site.address.line1},<br />
                {site.address.line2}
              </address>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
              <a href={site.phoneHref} className="font-semibold text-white hover:text-orange">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.06] px-4 text-[12px] font-semibold text-white ring-1 ring-white/10 transition hover:bg-white hover:text-ink"
          >
            <MapPin className="size-3.5" aria-hidden="true" />
            Get directions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 pb-28 text-[11px] leading-relaxed text-white/35 sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Photographs are illustrative and may not depict the actual workshop. Ratings
            and reviews are shown as supplied — please verify current details on Google.
          </p>
        </div>
      </div>
    </footer>
  );
}
