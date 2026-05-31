import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack-kku root path-a namma define pannidalam
  experimental: {
    turbopack: {
      root: "../../",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  devIndicators: {
    // @ts-ignore
    appIsrStatus: false,
  },
};

export default nextConfig;