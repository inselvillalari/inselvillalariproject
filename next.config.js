const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
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
  i18n,
};
