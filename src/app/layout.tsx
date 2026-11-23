import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { services } from "@/lib/services";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const description =
  "ParamVeer Car Care is a multi-brand car service center in Moshi, Pimpri-Chinchwad. General servicing, AC repair, engine diagnostics, denting & painting, detailing and more. Open daily, 9 AM – 9 PM. Call +91 75885 20106.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "ParamVeer Car Care | Car Service Center in Moshi, Pimpri-Chinchwad",
    template: "%s | ParamVeer Car Care",
  },
  description,
  applicationName: site.name,
  category: "automotive",
  keywords: [
    "Car Garage in Moshi",
    "Car Service Center in Moshi",
    "Car Repair in Pimpri-Chinchwad",
    "Multi Brand Car Service in Moshi",
    "Car AC Repair in Moshi",
    "Automobile Workshop Near Me",
    "ParamVeer Car Care",
    "car service Moshi Gaon",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "ParamVeer Car Care | Multi-Brand Car Service in Moshi, PCMC",
    description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1180,
        alt: "Premium car photographed at dusk — ParamVeer Car Care, Moshi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParamVeer Car Care | Car Service in Moshi, Pimpri-Chinchwad",
    description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "rating": "4.8",
    "geo.region": "IN-MH",
    "geo.placename": "Moshi, Pimpri-Chinchwad",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#101214" },
    { media: "(prefers-color-scheme: dark)", color: "#101214" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${siteUrl}/#business`,
  name: site.name,
  alternateName: "ParamVeer Car Care Moshi",
  description:
    "Multi-brand automobile workshop in Moshi, Pimpri-Chinchwad offering car servicing, engine diagnostics, AC repair, brakes, denting and painting, washing and detailing, battery and electrical services, suspension and tyre services.",
  url: siteUrl,
  telephone: "+917588520106",
  image: [`${siteUrl}/images/hero.jpg`, `${siteUrl}/images/workshop-wide.jpg`],
  logo: `${siteUrl}/logo.png`,
  foundingDate: "2018",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Moshi Gaon, Moshi",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "411070",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Place", name: "Moshi" },
    { "@type": "City", name: "Pimpri-Chinchwad" },
    { "@type": "City", name: "Pune" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [site.googleProfileUrl],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "ParamVeer Car Care, Moshi Gaon, Moshi, Pimpri-Chinchwad, Maharashtra 411070",
  )}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917588520106",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car care services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.short,
      },
    })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-orange px-4 py-3 text-sm font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
