/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'angular.io',
      'www.vectorlogo.zone',
      'cdn.worldvectorlogo.com',
      'reactnative.dev',
      'bestofjs.org',
    ],
  },
}

module.exports = nextConfig
