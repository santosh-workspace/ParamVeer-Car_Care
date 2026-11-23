export const site = {
  name: "ParamVeer Car Care",
  tagline: "Expert Car Care. Complete Peace of Mind.",
  category: "Multi-Brand Automobile Workshop",
  established: 2018,
  address: {
    line1: "Moshi Gaon, Moshi",
    line2: "Pimpri-Chinchwad, Maharashtra 411070, India",
    full: "Moshi Gaon, Moshi, Pimpri-Chinchwad, Maharashtra 411070, India",
  },
  phoneDisplay: "+91 75885 20106",
  phoneHref: "tel:+917588520106",
  whatsappNumber: "917588520106",
  whatsappDisplay: "+91 75885 20106",
  hours: "Monday – Sunday, 9:00 AM – 9:00 PM",
  hoursShort: "Open daily · 9 AM – 9 PM",
  googleRating: "4.8",
  googleProfileUrl: "https://share.google/tENcjIyLLV5mERKTf",
  paymentNote: "Enquiry only — no online payment required.",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://paramveercarcare.in";

export const defaultWhatsAppMessage =
  "Hello ParamVeer Car Care, I would like to enquire about your car service. Please share more details.";

export function whatsappLink(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsAppLink(service: string): string {
  return whatsappLink(
    `Hello ParamVeer Car Care, I would like to enquire about ${service} for my car. Please share the details, pricing and available slots.`,
  );
}

const mapQuery = encodeURIComponent(
  "ParamVeer Car Care, Moshi Gaon, Moshi, Pimpri-Chinchwad, Maharashtra 411070",
);

export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
export const mapPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const hoursRows = [
  { days: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
  { days: "Saturday", time: "9:00 AM – 9:00 PM" },
  { days: "Sunday", time: "9:00 AM – 9:00 PM" },
] as const;

export const appointmentNote =
  "Your appointment request will be sent to ParamVeer Car Care. Confirmation is subject to workshop availability.";
