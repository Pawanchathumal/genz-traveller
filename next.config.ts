import type { NextConfig } from "next";

const repo = "/genz-traveller";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: repo,
  assetPrefix: repo,
};

export default nextConfig;