const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en", "ru"],
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"), // 🟢 bu satır önemli!
};