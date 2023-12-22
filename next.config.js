/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "pbs.twimg.com",
      "qwikmedic.pythonanywhere.com",
    ],
  },
  reactStrictMode: true,
  output: 'export'
}

module.exports = nextConfig
