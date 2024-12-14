import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'superb-guineapig-580.convex.cloud' }],
  },
};

export default nextConfig;
