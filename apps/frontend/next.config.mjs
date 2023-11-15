import "./src/constants/env.mjs";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
