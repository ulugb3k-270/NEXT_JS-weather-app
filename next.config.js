/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
