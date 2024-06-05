/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../capella/dayViews/ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";

const CapellaDayViews = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="VİLLA CAPELLA"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "İletişim", url: "/contact" },
        ]}
        image="/assets/img/slid/villasCoverImg/capella.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/capella/dayViews/2.jpg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/capella/dayViews/3.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/capella/dayViews/4.jpg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/capella/dayViews/5.jpeg" />
            </a>
          </div>
        </div>
      </section>
      {/* 
      <ProjectVideo /> */}

      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/capella/dayViews/6.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/capella/dayViews/7.jpeg" />
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default CapellaDayViews;
