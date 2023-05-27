/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['quantumone.b-cdn.net', 'unpkg.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/aca",
        destination: "https://marketplace.api.healthcare.gov/api/v1",
      },
    ];
  },
};
module.exports = nextConfig
