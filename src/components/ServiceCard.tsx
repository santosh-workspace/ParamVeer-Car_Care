import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { serviceWhatsAppLink } from "@/lib/site";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
  detailed?: boolean;
  priority?: boolean;
};

export default function ServiceCard({ service, detailed = false, priority = false }: Props) {
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      className="group card flex h-full scroll-mt-28 flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-32px_rgba(16,18,20,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent"
        />
        <span className="absolute left-3.5 top-3.5 grid size-9 place-items-center rounded-xl bg-white/95 text-ink shadow-sm backdrop-blur">
          <Icon className="size-[17px]" aria-hidden="true" />
        </span>
        <span className="absolute bottom-3.5 left-3.5 rounded-full bg-ink/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
          Multi-brand care
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-[17px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-lg">
          {service.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55 sm:text-[13px]">
          {detailed ? service.description : service.short}
        </p>

        {detailed ? (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-ink/65">
                <Check className="mt-0.5 size-3 shrink-0 text-orange" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center gap-2 pt-4">
          <a
            href={serviceWhatsAppLink(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa-outline min-h-11 flex-1 px-4 text-[11.5px]"
            aria-label={`Enquire about ${service.title} on WhatsApp`}
          >
            <WhatsAppIcon className="size-3.5" />
            Enquire on WhatsApp
          </a>
          <Link
            href="/appointment"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/12 text-ink transition hover:border-orange hover:bg-orange hover:text-ink"
            aria-label={`Book ${service.title}`}
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
