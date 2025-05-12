/* eslint-disable @next/next/no-img-element */
import React from "react";
import Intro from "../intro";
import Services from "../services";
import AboutUs from "../aboutus";
import Portfolio from "../portfolio";
import Blogs2 from "../../components/Blogs2";
import withLoading from "../../common/withLoading";

const Home = () => {
  return (
    <>
      <Intro />
      <Services />
      <AboutUs />
      <Portfolio />
      <Blogs2 />
    </>
  );
};

export default withLoading(Home);
