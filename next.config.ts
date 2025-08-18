import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: process.env.EXPORT === "true", // disable next/image optimizer on export
  },

  webpack(config) {
    config.externals.push({
      "sanity/cli": "commonjs sanity/cli",
    });
    return config;
  },

  // enable static export conditionally
  output: process.env.EXPORT === "true" ? "export" : undefined,
};

export default nextConfig;
