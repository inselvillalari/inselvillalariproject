/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import Intro from "../intro";
import Services from "../services";
import AboutUs from "../aboutus";
import Portfolio from "../portfolio";
import Blogs2 from "../../components/Blogs2";

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

export default Home1;
