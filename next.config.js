/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
      },
    ],
  },
}

module.exports = nextConfig
