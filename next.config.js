const path = require("path");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  i18n, // Çok dilli destek buradan geliyor

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

module.exports = nextConfig;
