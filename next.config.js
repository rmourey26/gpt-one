/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['quantumone.b-cdn.net'],
  },
  experimental: {
    outputFileTracingExcludes: {
      '/api/chat': ['../src/aws-exports'],
    },
  },
}
module.exports = nextConfig
