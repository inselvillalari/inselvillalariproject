const path = require("path");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  i18n,

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

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "i18next-fs-backend": false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
