import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/anu-portfolio",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
