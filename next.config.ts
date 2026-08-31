import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/iwin-register", destination: "/guides/how-to-register/", permanent: true },
      { source: "/iwin-register/", destination: "/guides/how-to-register/", permanent: true },
      { source: "/iwin-login", destination: "/guides/how-to-login/", permanent: true },
      { source: "/iwin-login/", destination: "/guides/how-to-login/", permanent: true },
      { source: "/iwin-games-library", destination: "/games/", permanent: true },
      { source: "/iwin-games-library/", destination: "/games/", permanent: true },
      { source: "/iwin-agent", destination: "/agent/", permanent: true },
      { source: "/iwin-agent/", destination: "/agent/", permanent: true },
      { source: "/iwin-about-us", destination: "/about-iwin/", permanent: true },
      { source: "/iwin-about-us/", destination: "/about-iwin/", permanent: true },
      { source: "/iwin-promotion", destination: "/promotions/", permanent: true },
      { source: "/iwin-promotion/", destination: "/promotions/", permanent: true },
      { source: "/free-credit", destination: "/promotions/free-credit/", permanent: true },
      { source: "/free-credit/", destination: "/promotions/free-credit/", permanent: true },
      { source: "/iwin-customer-service", destination: "/contact/", permanent: true },
      { source: "/iwin-customer-service/", destination: "/contact/", permanent: true },
      { source: "/iwin-4d-results", destination: "/games/4d/", permanent: true },
      { source: "/iwin-4d-results/", destination: "/games/4d/", permanent: true },
      { source: "/iwin-news", destination: "/", permanent: true },
      { source: "/iwin-news/", destination: "/", permanent: true },
      { source: "/faq", destination: "/faqs/", permanent: true },
      { source: "/faq/", destination: "/faqs/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/privacy/", destination: "/privacy-policy/", permanent: true },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
