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
  /* Redirects for domain migration */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
