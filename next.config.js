const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/portfolio-2022/' : '',
  reactStrictMode: true,
  images: {
    loader: 'imgix',
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
