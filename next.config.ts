import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   webpack(config) {
    config.externals.push({
      'sanity/cli': 'commonjs sanity/cli',
    })
    return config
  },
};

export default nextConfig;
