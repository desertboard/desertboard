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
};

export default nextConfig;
