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
      { source: "/article/67ab4af0ad0aabc6e9df99fb", destination: "/article/desertboard-stands-out-at-big-5-global-with-its-unique-lineup-of-sustainable-solutions", permanent: true },
      { source: "/article/67ab5557bd0bf33621fa1d78", destination: "/article/desertboard-at-al-ain-dates-festival-2025-honouring-emirati-heritage-with-sustainable-building-solutions", permanent: true },
      { source: "/article/67ab591b5468983c9c1365dc", destination: "/article/discover-the-regions-most-sustainable-building-material-with-desertboard-at-big5-global-2024", permanent: true },
      { source: "/category/product-specific", destination: "/products", permanent: true },
      { source: "/article/67ab5af917943e174fbf3cce", destination: "/article/desertboard-showcases-the-regions-most-sustainable-building-material-at-saudi-wood-expo", permanent: true },
      { source: "/sector-details/Landscape", destination: "/sectors/landscape", permanent: true },
      { source: "/building-a-sustainable-hospitality-industry", destination: "/sustainability", permanent: true },
      { source: "/product-details/PSB%C2%AE%20Supreme", destination: "/product-details/psb-supreme", permanent: true },
      { source: "/sector-details/Engineering%20&%20Construction", destination: "/sectors/engineering-and-construction", permanent: true },
      { source: "/product-details/news-and-events", destination: "/news-and-events", permanent: true },
      { source: "/sector-details/Interior%20Design", destination: "/sectors/interior-design", permanent: true }
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/applications/:application",
  //       has: [
  //         { type: "query", key: "application" },
  //         { type: "query", key: "sector" }
  //       ],
  //       destination: "/sectors/:sector/:application"
  //     },
  //     {
  //       source: "/applications/psb-supreme",
  //       has: [
  //         { type: "query", key: "application" },
  //         { type: "query", key: "sector" }
  //       ],
  //       destination: "/sectors/:sector/:application"
  //     },
  //     {
  //       source: "/applications/PSB%C2%AE%20Conform",
  //       has: [
  //         { type: "query", key: "application" },
  //         { type: "query", key: "sector" }
  //       ],
  //       destination: "/sectors/:sector/:application"
  //     }
  //   ];
  // }
};

export default nextConfig;
