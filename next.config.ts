import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Domain configuration */
  env: {
    NEXT_PUBLIC_SITE_URL: "https://diamondcapitalafrica.com",
    NEXT_PUBLIC_SITE_NAME: "Diamond Capital Africa",
  },
  /* Image optimization */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
