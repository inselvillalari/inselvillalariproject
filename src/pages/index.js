
import HomePage from "./home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return <HomePage />;
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
