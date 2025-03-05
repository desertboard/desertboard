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
      {
        source:'https://desertboard.ae/tag/formwork',
        destination:'https://desertboard.ae/',
        permanent:true
      }
    ]
  },
};

export default nextConfig;
