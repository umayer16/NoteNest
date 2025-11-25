// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],  // For Firebase images
  },
  // Remove or comment this for serverless (Vercel default):
  // output: 'export',  // This causes 404s for dynamic/API routes
};

module.exports = nextConfig;
