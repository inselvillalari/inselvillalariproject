import { useEffect } from "react";
import HomePage from "./home";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.replace("/");
  // }, []);

  return <HomePage />;
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
