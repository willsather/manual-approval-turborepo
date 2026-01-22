import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

const toolbarConfig = withVercelToolbar()(nextConfig);
export default toolbarConfig;
