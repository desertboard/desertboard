import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler:{
    removeConsole : process.env.NODE_ENV === 'production'
  },
  async redirects() {
    return [
      { source: "/tag/formwork", destination: "/", permanent: true },
      { source: "/tag/formaldehyde", destination: "/article/building-towards-a-formaldehyde-free-future", permanent: true },
      { source: "/tag/desertboard", destination: "/", permanent: true },
      { source: "/category/press", destination: "/", permanent: true },
      { source: "/psb-fire-rated", destination: "/", permanent: true },
      { source: "/desertboard-at-swe24", destination: "/", permanent: true },
      { source: "/tag/carbon-footprint", destination: "/article/how-to-calculate-the-carbon-footprint-of-building-materials", permanent: true },
      { source: "/dubai-woodshow-announcement", destination: "/article/dubai-wood-show-announcement", permanent: true },
      { source: "/tag/big5-global", destination: "/article/desertboard-stands-out-at-big-5-global-with-its-unique-lineup-of-sustainable-solutions", permanent: true },
      { source: "/tag/wooden-boards", destination: "/", permanent: true },
      { source: "/tag/saudi-wood-expo", destination: "/", permanent: true },
      { source: "/making-furniture-in-uae", destination: "/", permanent: true },
      { source: "/tag/shuttering-board-for-construction", destination: "/article/factors-to-consider-when-choosing-the-right-shuttering-board", permanent: true },
      { source: "/desertboard-at-big5-global-2024", destination: "/", permanent: true },
      { source: "/desertboard-at-abu-dhabi-sustainability-week-2025", destination: "/", permanent: true },
      { source: "/desert-board-at-dubai-wood-show-2022", destination: "/article/desert-board-at-dubai-wood-show-2022", permanent: true },
      { source: "/desert-board-showcases-sustainable-innovation-at-icc-technical-workshop", destination: "/article/desert-board-showcases-sustainable-innovation-at-icc-technical-workshop", permanent: true },
      { source: "/desertboard-stands-out-at-big-5-global-with-its-unique-lineup-of-sustainable-solutions", destination: "/article/desertboard-stands-out-at-big-5-global-with-its-unique-lineup-of-sustainable-solutions", permanent: true },
    ];
  },
};

export default nextConfig;
