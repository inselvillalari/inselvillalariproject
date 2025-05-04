/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import LightLayout from "../layout/LightLayout";
import Intro from "../intro";
import Services from "../services";
import AboutUs from "../aboutus";
import Portfolio from "../portfolio";
import Blogs2 from "../../components/Blogs2";
import withLoading from "../../common/withLoading";

const Home = () => {
  useEffect(() => {
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

export default withLoading(Home);
