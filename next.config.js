/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: "/frontend-challenges",
};

module.exports = nextConfig;