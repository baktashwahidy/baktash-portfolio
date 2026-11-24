import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/imkon/shop", destination: "/shop", permanent: false }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
