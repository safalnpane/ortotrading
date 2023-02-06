/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "imgs.search.brave.com", 'orto-media.s3.ap-southeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
