"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

const INTERACTIVE_SELECTOR =
  'input, select, textarea, [data-floating-avoid]';

export default function FloatingActions() {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const stack = stackRef.current;
      if (!stack) return;

      const rect = stack.getBoundingClientRect();
      const points: [number, number][] = [
        [rect.left + rect.width / 2, rect.top + 12],
        [rect.left + rect.width / 2, rect.bottom - 12],
        [rect.right - 8, rect.top + rect.height / 2],
      ];

      let conflict = false;
      for (const [x, y] of points) {
        if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) continue;
        const elements = document.elementsFromPoint(x, y);
        for (const element of elements) {
          if (stack === element || stack.contains(element)) continue;
          if (!(element instanceof HTMLElement)) continue;
          if (element.matches(INTERACTIVE_SELECTOR)) {
            conflict = true;
            break;
          }
          const parent = element.closest(INTERACTIVE_SELECTOR);
          if (parent && !stack.contains(parent)) {
            conflict = true;
            break;
          }
        }
        if (conflict) break;
      }

      setHidden(conflict);
    };

    const requestEvaluate = () => {
      if (!frame) frame = window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", requestEvaluate, { passive: true });
    window.addEventListener("resize", requestEvaluate);
    const interval = window.setInterval(evaluate, 1200);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestEvaluate);
      window.removeEventListener("resize", requestEvaluate);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={stackRef}
      className={`fixed right-3.5 z-40 flex flex-col items-center gap-2.5 transition-[opacity,transform,visibility] duration-300 sm:right-5 lg:right-6 ${
        hidden
          ? "invisible translate-y-2 opacity-0"
          : "visible translate-y-0 opacity-100"
      }`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-hidden={hidden || undefined}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
        aria-label="Chat on WhatsApp"
        className="group relative grid size-[50px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.65)] ring-1 ring-black/5 transition duration-300 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 lg:size-14"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring motion-reduce:hidden"
        />
        <WhatsAppIcon className="relative size-6 lg:size-7" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block"
        >
          Chat on WhatsApp
        </span>
      </a>

      <a
        href={site.phoneHref}
        tabIndex={hidden ? -1 : undefined}
        aria-label={`Call ParamVeer Car Care on ${site.phoneDisplay}`}
        className="group relative grid size-[50px] place-items-center rounded-full bg-orange text-ink shadow-[0_12px_32px_-8px_rgba(255,107,0,0.65)] ring-1 ring-black/5 transition duration-300 hover:scale-105 hover:bg-orange-soft active:scale-95 lg:size-14"
      >
        <Phone className="size-[21px] lg:size-6" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block"
        >
          Call ParamVeer Car Care
        </span>
      </a>
    </div>
  );
}
