"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { navLinks, site, whatsappLink } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/95 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/80 via-ink/35 to-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-height)] items-center justify-between gap-4 lg:h-[5.25rem]">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-[13px] font-semibold tracking-[0.01em] transition-colors ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-orange transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={site.phoneHref}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[13px] font-semibold text-white/80 transition hover:text-white"
              aria-label={`Call ParamVeer Car Care on ${site.phoneDisplay}`}
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/10 transition group-hover:bg-orange group-hover:text-ink">
                <Phone className="size-3.5" aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
            <Link href="/appointment" className="btn btn-primary min-h-11 px-5 text-[13px]">
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Call ParamVeer Car Care on ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition active:bg-orange active:text-ink"
            >
              <Phone className="size-[18px]" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition active:bg-white/20"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-black/65 backdrop-blur-sm animate-fade-in"
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-[min(91vw,25rem)] flex-col overflow-y-auto overscroll-contain bg-ink px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-white shadow-2xl animate-menu-in sm:px-6"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-7">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href} className="border-b border-white/10">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[3.35rem] items-center justify-between gap-4 py-3"
                      >
                        <span className="flex items-baseline gap-3.5">
                          <span className="w-5 text-[10px] font-bold tabular-nums tracking-widest text-white/35">
                            0{index + 1}
                          </span>
                          <span
                            className={`text-[1.45rem] font-bold tracking-tight ${
                              active ? "text-orange" : "text-white"
                            }`}
                          >
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          className={`size-4 ${active ? "text-orange" : "text-white/30"}`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 grid gap-2.5">
              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                <CalendarDays className="size-4" aria-hidden="true" />
                Book an Appointment
              </Link>
              <div className="grid grid-cols-2 gap-2.5">
                <a href={site.phoneHref} className="btn btn-outline min-h-11 text-xs">
                  <Phone className="size-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa min-h-11 text-xs"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-7 space-y-3 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-white/65">
              <p className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                <span>
                  {site.address.line1},<br />
                  {site.address.line2}
                </span>
              </p>
              <p className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                <span>{site.hours}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Star className="size-4 shrink-0 fill-orange text-orange" aria-hidden="true" />
                <span>
                  {site.googleRating} / 5 on Google ·{" "}
                  <a
                    href={site.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-orange"
                  >
                    View profile
                  </a>
                </span>
              </p>
            </div>

            <p className="mt-auto pt-6 text-[10.5px] uppercase tracking-[0.2em] text-white/30">
              Multi-brand workshop · Since {site.established}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
