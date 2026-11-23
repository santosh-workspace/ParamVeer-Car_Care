import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, ImageIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the ParamVeer Car Care gallery — workshop, car servicing, engine repair, denting & painting, detailing and before/after photography from Moshi, Pimpri-Chinchwad.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | ParamVeer Car Care, Moshi",
    description:
      "Illustrative photography of car servicing, workshop, detailing and bodywork.",
    url: "/gallery",
    images: ["/images/gallery-classic.jpg"],
  },
};

const categories = new Set(galleryItems.map((item) => item.category));

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Gallery"
        title={
          <>
            The workshop,
            <br />
            up close.
          </>
        }
        description={
          <p>
            Servicing bays, engine work, bodywork and detailing finishes. Browse by
            category to see the kind of care that goes into every job.
          </p>
        }
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 text-[10.5px] font-semibold text-white/65">
            <Camera className="size-3.5 text-orange" aria-hidden="true" />
            {galleryItems.length} images
          </span>
          <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 text-[10.5px] font-semibold text-white/65">
            <ImageIcon className="size-3.5 text-orange" aria-hidden="true" />
            {categories.size} categories
          </span>
        </div>
      </PageHero>

      <section className="section pt-10 sm:pt-12 lg:pt-14">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Browse the gallery</p>
              <h2 className="display-3 mt-3.5">Find a category. Take a closer look.</h2>
            </div>
            <p className="max-w-sm text-[11.5px] leading-relaxed text-ink/45">
              Tap any photograph to open the full-size viewer. Use arrow keys or the
              on-screen controls to move between images.
            </p>
          </div>

          <div className="mt-7">
            <GalleryGrid />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-cream px-5 py-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[12px] leading-relaxed text-ink/55">
              Looking for a specific type of work? Tell us what you need and we will share
              more details about the service.
            </p>
            <Link href="/services" className="btn btn-dark min-h-11 shrink-0">
              Explore our services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Like what you see? Let us look after your car."
        description="Book a service or send us a message with your car details. We will take it from there."
      />
    </>
  );
}
