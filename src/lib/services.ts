import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  CarFront,
  Disc3,
  Droplets,
  Gauge,
  PaintBucket,
  Snowflake,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  includes: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "general-car-servicing",
    title: "General Car Servicing",
    short: "Periodic servicing, oil changes and multi-point checks that keep your car running like it should.",
    description:
      "From routine oil and filter changes to a full multi-point inspection, we look after the essentials so small issues never become expensive ones.",
    image: "/images/service-general.jpg",
    imageAlt: "Technician carrying out a general car service under the bonnet",
    icon: Wrench,
    includes: ["Engine oil & filter change", "Multi-point inspection", "Fluid top-ups", "Service guidance"],
    featured: true,
  },
  {
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    short: "Careful diagnosis of warning lights, starting trouble and performance issues.",
    description:
      "We trace the root cause before recommending a repair, using systematic checks and a clear explanation of what your car needs and why.",
    image: "/images/service-diagnostics.jpg",
    imageAlt: "Close-up of a technician working on an engine",
    icon: Gauge,
    includes: ["Warning-light checks", "Starting & idle issues", "Performance diagnosis", "Repair advice"],
    featured: false,
  },
  {
    slug: "ac-repair-maintenance",
    title: "AC Repair & Maintenance",
    short: "Get your cabin cool again with AC inspection, servicing and repair.",
    description:
      "Weak cooling, strange noises or unpleasant smells? We inspect the AC system, check for leaks and restore comfortable cabin temperatures.",
    image: "/images/service-ac.jpg",
    imageAlt: "Technicians inspecting a car engine bay during an AC service",
    icon: Snowflake,
    includes: ["Cooling performance check", "Gas & leak inspection", "AC servicing", "Cabin comfort care"],
    featured: true,
  },
  {
    slug: "brake-inspection-repair",
    title: "Brake Inspection & Repair",
    short: "Safer stops, with brake pads, discs and fluid checked by trained hands.",
    description:
      "Brakes are your most important safety system. We inspect wear and performance, then explain your options in plain language.",
    image: "/images/service-brakes.jpg",
    imageAlt: "Technician removing a wheel to inspect the brakes",
    icon: Disc3,
    includes: ["Brake pad inspection", "Disc & drum checks", "Brake fluid checks", "Repair & replacement"],
    featured: false,
  },
  {
    slug: "denting-painting",
    title: "Denting & Painting",
    short: "Bodywork and paint finishing that brings your car's appearance back.",
    description:
      "From minor dents and scuffs to panel painting, we focus on careful preparation and a clean, even finish that matches your car.",
    image: "/images/service-denting.jpg",
    imageAlt: "Polished rear panel of a car after bodywork and paint finishing",
    icon: PaintBucket,
    includes: ["Dent assessment", "Panel preparation", "Paint finishing", "Finish polishing"],
    featured: true,
  },
  {
    slug: "car-washing-detailing",
    title: "Car Washing & Detailing",
    short: "Deep cleaning inside and out, with a finish that feels showroom fresh.",
    description:
      "A thorough wash, interior clean-up and detailing session that removes road grime and restores the feel of your car.",
    image: "/images/service-detailing.jpg",
    imageAlt: "Car covered in foam during a premium wash and detailing session",
    icon: Droplets,
    includes: ["Exterior foam wash", "Interior cleaning", "Wheel & tyre care", "Finishing touches"],
    featured: true,
  },
  {
    slug: "battery-electrical",
    title: "Battery & Electrical Services",
    short: "Battery, starting and electrical checks to get you moving again.",
    description:
      "If your car is slow to start or an electrical fault has appeared, we check the battery and related systems before suggesting a fix.",
    image: "/images/service-electrical.jpg",
    imageAlt: "Close-up of engine belts and electrical components",
    icon: BatteryCharging,
    includes: ["Battery health check", "Starting system checks", "Electrical fault tracing", "Replacement support"],
    featured: false,
  },
  {
    slug: "suspension-tyre",
    title: "Suspension & Tyre Services",
    short: "Comfort, grip and control — checked at every corner.",
    description:
      "Knocking noises, uneven tyre wear or a rough ride? We inspect suspension and tyre condition so your car feels stable again.",
    image: "/images/service-tyres.jpg",
    imageAlt: "Technician checking tyre pressure during a suspension and tyre service",
    icon: CarFront,
    includes: ["Tyre pressure & wear", "Suspension inspection", "Ride comfort checks", "Repair guidance"],
    featured: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
