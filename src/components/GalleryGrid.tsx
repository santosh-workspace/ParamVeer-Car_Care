"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/gallery";

export default function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      category === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category],
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  const close = useCallback(() => {
    setActiveIndex(null);
    requestAnimationFrame(() => previousFocus.current?.focus());
  }, []);

  const openAt = (index: number) => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    setActiveIndex(index);
  };

  const next = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % filtered.length;
    });
  }, [filtered.length]);

  const previous = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + filtered.length) % filtered.length;
    });
  }, [filtered.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();

      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null || element === document.activeElement);
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
    };
  }, [activeIndex, close, next, previous]);

  return (
    <div>
      <div className="relative">
        <div
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Filter gallery by category"
        >
        {galleryCategories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setCategory(item);
                setActiveIndex(null);
              }}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-[11.5px] font-bold transition duration-300 ${
                active
                  ? "bg-ink text-white shadow-sm"
                  : "border border-ink/10 bg-white text-ink/60 hover:border-ink/25 hover:text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-cream via-cream/80 to-transparent sm:hidden" />
      </div>

      <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/35" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "image" : "images"}
        {category !== "All" ? ` · ${category}` : ""}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openAt(index)}
            className={`group relative overflow-hidden rounded-xl bg-charcoal text-left ring-1 ring-ink/5 focus-visible:outline-none sm:rounded-2xl ${
              item.wide ? "col-span-2 aspect-[16/9] lg:aspect-[2/1]" : "aspect-[4/5] sm:aspect-[4/3]"
            }`}
            aria-label={`View larger image: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 transition group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:size-9"
            >
              <Expand className="size-3.5" />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <span className="block text-[8.5px] font-bold uppercase tracking-[0.16em] text-orange sm:text-[9px]">
                {item.category}
              </span>
              <span className="mt-1 block text-[11.5px] font-bold leading-snug text-white sm:text-[13px]">
                {item.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-[10.5px] leading-relaxed text-ink/40">
        Illustrative photography — representative of the services we offer, not actual
        customer vehicles or workshop premises.
      </p>

      {activeItem && activeIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${activeItem.caption}`}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/96 text-white backdrop-blur-md animate-fade-in"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange">
                {activeItem.category}
              </p>
              <p className="mt-0.5 truncate text-[13px] font-semibold text-white/85">
                {activeItem.caption}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden pr-1 text-[10px] font-semibold tabular-nums text-white/40 sm:block">
                {activeIndex + 1} / {filtered.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close image viewer"
            tabIndex={-1}
            onClick={close}
            className="relative flex min-h-0 flex-1 cursor-zoom-out items-center justify-center px-3"
          >
            <span className="relative block h-full w-full max-w-6xl">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </span>
          </button>

          <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[max(0.9rem,env(safe-area-inset-bottom))] sm:px-6">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/20"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <span className="text-[10px] font-semibold tabular-nums text-white/40 sm:hidden">
              {activeIndex + 1} / {filtered.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/20"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
