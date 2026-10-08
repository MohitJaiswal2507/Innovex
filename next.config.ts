import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS to ./out,
// which Nginx serves on the VPS behind Cloudflare. No Node server in production.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /events/hackathon/ -> out/events/hackathon/index.html (matches our URL plan)
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
