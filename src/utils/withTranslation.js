import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const withTranslationProps =
  (namespaces = ["common"]) =>
  async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
    },
  });
