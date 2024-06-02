/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "./ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";

const RigelInsideViews = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="VİLLA RİGEL"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "İletişim", url: "/contact" },
        ]}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/slid/rigel/indoor/1.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/slid/rigel/indoor/3.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/slid/rigel/indoor/4.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/slid/rigel/indoor/5.jpeg" />
            </a>
          </div>
        </div>
      </section>

      <ProjectVideo />

      <section className="projdtal">
        <div className="justified-gallery">
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/rigel/indoor/6.jpeg" />
          </a>
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/rigel/indoor/7.jpeg" />
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default RigelInsideViews;
