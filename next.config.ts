import type { NextConfig } from "next";
import { join} from 'path'
const nextConfig: NextConfig = {
  turbopack: {
    root: join(__dirname, '..')
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [],
  }
};

export default nextConfig;
