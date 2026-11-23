import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: { src: string; alt: string };
  imagePriority?: boolean;
  badge?: { value: string; label: string };
  children?: ReactNode;
  breadcrumb: string;
  wide?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePriority = false,
  badge,
  children,
  breadcrumb,
  wide = false,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-[26rem] rounded-full bg-orange/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/4 size-[22rem] rounded-full bg-white/[0.04] blur-[100px]"
      />

      <div className={`shell relative ${image ? "" : "text-center"}`}>
        <nav
          aria-label="Breadcrumb"
          className={`mb-6 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/40 sm:mb-8 ${
            image ? "" : "justify-center"
          }`}
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
          <span aria-current="page" className="text-white/70">
            {breadcrumb}
          </span>
        </nav>

        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div>
              <p className="eyebrow">
                {eyebrow}
              </p>
              <h1 className="display-1 mt-5">{title}</h1>
              <div className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/60 sm:text-[15.5px] lg:mx-0">
                {description}
              </div>
              {children ? (
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9">
                  {children}
                </div>
              ) : null}
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] ring-1 ring-white/12 sm:aspect-[16/10] lg:aspect-[4/3.4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={imagePriority}
                  sizes="(max-width: 1023px) 100vw, 44vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                />
              </div>
              {badge ? (
                <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/12 bg-ink/90 px-4 py-3 shadow-xl backdrop-blur-md sm:left-5">
                  <span className="text-2xl font-extrabold leading-none tracking-tight text-orange">
                    {badge.value}
                  </span>
                  <span className="text-[9.5px] font-bold uppercase leading-tight tracking-[0.16em] text-white/55">
                    {badge.label}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={`${wide ? "max-w-5xl" : "mx-auto max-w-3xl"}`}>
            <p className="eyebrow eyebrow-center justify-center">{eyebrow}</p>
            <h1 className="display-1 mt-5">{title}</h1>
            <div className="mx-auto mt-5 max-w-2xl text-[14.5px] leading-relaxed text-white/60 sm:text-[15.5px]">
              {description}
            </div>
            {children ? (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                {children}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
