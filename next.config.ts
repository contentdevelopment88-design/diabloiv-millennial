import type { NextConfig } from "next";

// GitHub Pages serves the repo at /<repo-name>/, so we need basePath in
// production. In local dev (npm run dev) basePath is empty, so the site
// stays at http://localhost:3001/ as usual.
const isProd = process.env.NODE_ENV === "production";
const repoName = "diabloiv-millennial";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages serves only static files; no Image optimizer
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;
