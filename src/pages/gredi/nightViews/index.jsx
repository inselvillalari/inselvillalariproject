/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "./ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";

const GrediNightViews = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="VİLLA GREDİ"
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
              <img alt="" src="/assets/img/slid/gredi/nightViews/2.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/slid/gredi/nightViews/3.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/slid/gredi/nightViews/4.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/slid/gredi/nightViews/5.jpeg" />
            </a>
          </div>
        </div>
      </section>

      <ProjectVideo />

      <section className="projdtal">
        <div className="justified-gallery">
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/gredi/nightViews/6.jpeg" />
          </a>
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/gredi/nightViews/7.jpeg" />
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default GrediNightViews;
