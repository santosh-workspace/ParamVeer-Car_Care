export const galleryCategories = [
  "All",
  "Workshop",
  "Car Servicing",
  "Engine Repair",
  "Denting & Painting",
  "Detailing",
  "Before & After",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
  wide?: boolean;
};

/**
 * Illustrative photography. These are representative service images,
 * not photographs of the actual workshop or customer vehicles.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-classic.jpg",
    alt: "Classic car inside a well-equipped automotive workshop",
    caption: "Inside the workshop",
    category: "Workshop",
    wide: true,
  },
  {
    src: "/images/gallery-inspection.jpg",
    alt: "Technician inspecting a vehicle on a workshop lift",
    caption: "Multi-point inspection",
    category: "Car Servicing",
  },
  {
    src: "/images/gallery-bmw.jpg",
    alt: "BMW coupe photographed at dusk after a service",
    caption: "Serviced and road-ready",
    category: "Car Servicing",
  },
  {
    src: "/images/gallery-finish.jpg",
    alt: "Glossy painted rear panel after denting and painting work",
    caption: "Paint finish detail",
    category: "Denting & Painting",
  },
  {
    src: "/images/gallery-wash.jpg",
    alt: "Car being hand-washed with a sponge",
    caption: "Hand wash & care",
    category: "Detailing",
  },
  {
    src: "/images/gallery-dark-garage.jpg",
    alt: "Car parked inside a dimly lit workshop bay",
    caption: "Workshop bay",
    category: "Workshop",
    wide: true,
  },
  {
    src: "/images/gallery-technician.jpg",
    alt: "Automotive technician standing in a workshop",
    caption: "Skilled hands at work",
    category: "Workshop",
  },
  {
    src: "/images/service-diagnostics.jpg",
    alt: "Close-up of engine diagnostics and repair work",
    caption: "Engine diagnostics",
    category: "Engine Repair",
  },
  {
    src: "/images/gallery-foam.jpg",
    alt: "Car covered in foam during a detailing wash",
    caption: "Foam wash",
    category: "Detailing",
  },
  {
    src: "/images/gallery-audi.jpg",
    alt: "Black Audi coupe parked on a cobbled street",
    caption: "Clean lines, clean finish",
    category: "Denting & Painting",
  },
  {
    src: "/images/gallery-mustang.jpg",
    alt: "Ford Mustang front end in dramatic light",
    caption: "Performance check",
    category: "Engine Repair",
    wide: true,
  },
  {
    src: "/images/gallery-wash-bay.jpg",
    alt: "Car being pressure-washed in a wash bay",
    caption: "Wash bay",
    category: "Detailing",
  },
  {
    src: "/images/service-electrical.jpg",
    alt: "Engine belts and electrical components under the bonnet",
    caption: "Electrical & belt checks",
    category: "Engine Repair",
  },
  {
    src: "/images/service-general.jpg",
    alt: "Technician working under the bonnet during a service",
    caption: "General servicing",
    category: "Car Servicing",
  },
  {
    src: "/images/gallery-classic-fog.jpg",
    alt: "Classic car after a wash with mist around it",
    caption: "Before & after — refreshed finish",
    category: "Before & After",
  },
  {
    src: "/images/gallery-mercedes.jpg",
    alt: "Silver Mercedes-AMG on an open road",
    caption: "Road test complete",
    category: "Car Servicing",
    wide: true,
  },
];
