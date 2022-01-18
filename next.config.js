/** @type {import('next').NextConfig} */
const path = require('path')

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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
