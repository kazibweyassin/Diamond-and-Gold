import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Domain configuration */
  env: {
    NEXT_PUBLIC_SITE_URL: "https://victoriagold.ac.ug",
    NEXT_PUBLIC_SITE_NAME: "Victoria Gold",
  },
  /* Image optimization */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
