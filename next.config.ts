import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async rewrites() {
    return [
      // Statisk Vite-app i public/medleiingskart: gjer at den reine URL-en
      // /medleiingskart serverer index.html derifrå (public har ikkje
      // automatisk mappe-indeks i Next).
      {
        source: "/medleiingskart",
        destination: "/medleiingskart/index.html",
      },
    ];
  },
};

export default nextConfig;
