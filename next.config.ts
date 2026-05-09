import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Enables static HTML export
  images: { unoptimized: true }, // Required for static sites
};
module.exports = nextConfig;
export default nextConfig;
