/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' *.googleapis.com *.google.com *.okta.com ;
    img-src 'self' quantumone.b-cdn.net *.googleusercontent.com googleapis.com unpkg.com *.supabase.co *.google.com *.okta.com blob: data:;
    font-src 'self' *.googleapis.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self' *.googleapis.com *.okta.com *.google.com;
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `

const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['quantumone.b-cdn.net', 'unpkg.com', 'lh3.googleusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
  
};
module.exports = nextConfig
