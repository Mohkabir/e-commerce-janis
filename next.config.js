/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    PAYSTACK_KEY: process.env.PAYSTACK_KEY,
  },
  images: {
    // domains: ['i.dummyjson.com','lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
