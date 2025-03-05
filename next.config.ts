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
        source:'/desertboard.ae/tag/formwork',
        destination:'/desertboard.ae/',
        permanent:true
      }
    ]
  },
};

export default nextConfig;
