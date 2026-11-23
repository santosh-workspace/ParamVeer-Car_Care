import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink pb-20 pt-32 text-white">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 size-96 rounded-full bg-orange/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="shell relative">
        <Logo />
        <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.22em] text-orange">
          404 — Page not found
        </p>
        <h1 className="display-1 mt-4 max-w-2xl">
          This road goes nowhere.
          <br />
          <span className="text-orange">Let us get you back.</span>
        </h1>
        <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/55">
          The page you were looking for may have moved. Head back to the homepage, or
          contact the workshop directly — we are happy to help.
        </p>
        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
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
      </div>
    </section>
  );
}
