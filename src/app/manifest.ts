import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ParamVeer Car Care — Multi-Brand Car Workshop, Moshi",
    short_name: "ParamVeer Car Care",
    description:
      "Car servicing, AC repair, diagnostics, denting and painting in Moshi, Pimpri-Chinchwad.",
    start_url: "/",
    display: "standalone",
    background_color: "#101214",
    theme_color: "#101214",
    icons: [
      {
        src: "/logo.png",
        sizes: "768x768",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
