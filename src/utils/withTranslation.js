import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const withTranslationProps = (namespaces = ["common"]) => {
  return async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, namespaces)),
      },
    };
  };
};