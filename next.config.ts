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
      { source: "/tag/formaldehyde", destination: "/article/67acbf8c5df6cd16f174562c", permanent: true },
      { source: "/tag/desertboard", destination: "/", permanent: true },
      { source: "/category/press", destination: "/", permanent: true },
      { source: "/psb-fire-rated", destination: "/", permanent: true },
      { source: "/desertboard-at-swe24", destination: "/", permanent: true },
      { source: "/tag/carbon-footprint", destination: "/article/67b04d09c833d8deabcb1d3b", permanent: true },
      { source: "/dubai-woodshow-announcement", destination: "/article/67b05239b812434fb32ddfbe", permanent: true },
      { source: "/tag/big5-global", destination: "/article/67ab4af0ad0aabc6e9df99fb", permanent: true },
      { source: "/tag/wooden-boards", destination: "/", permanent: true },
      { source: "/tag/saudi-wood-expo", destination: "/", permanent: true },
      { source: "/making-furniture-in-uae", destination: "/", permanent: true },
      { source: "/tag/shuttering-board-for-construction", destination: "/article/67ab5ea479d59543fed5716a", permanent: true },
      { source: "/desertboard-at-big5-global-2024", destination: "/", permanent: true },
      { source: "/desertboard-at-abu-dhabi-sustainability-week-2025", destination: "/", permanent: true },
      { source: "/desert-board-at-dubai-wood-show-2022", destination: "/article/67b04ff04c1701936e52ee21", permanent: true },
      { source: "/desert-board-showcases-sustainable-innovation-at-icc-technical-workshop", destination: "/article/67b050a757d6a6d70ee9ca3a", permanent: true },
      { source: "/desertboard-stands-out-at-big-5-global-with-its-unique-lineup-of-sustainable-solutions", destination: "/article/67ab4af0ad0aabc6e9df99fb", permanent: true },
    ];
  },
};

export default nextConfig;
