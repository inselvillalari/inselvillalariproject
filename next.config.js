const path = require("path");
const nextI18NextConfig = require('./next-i18next.config');

module.exports = {
  ...nextI18NextConfig,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    styledComponents: true,
  },
};