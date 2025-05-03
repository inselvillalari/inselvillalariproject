/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../layout/LightLayout";
import Intro from "../intro";
import Services from "../services";
import AboutUs from "../aboutus";
import Portfolio from "../portfolio";
import Blogs2 from "../../components/Blogs2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <Intro />
      <Services />
      <AboutUs />
      <Portfolio />
      <Blogs2 />
    </LightLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home1;
