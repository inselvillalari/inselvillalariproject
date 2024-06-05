/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../agena/nightViews/ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";

const AgenaNightViews = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="VİLLA AGENA"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "İletişim", url: "/contact" },
        ]}
        image="/assets/img/slid/villasCoverImg/agena.jpg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/agena/nightViews/2.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/agena/nightViews/3.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/agena/nightViews/4.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/agena/nightViews/5.jpeg" />
            </a>
          </div>
        </div>
      </section>

      {/* <ProjectVideo /> */}

      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/nightViews/6.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/nightViews/7.jpeg" />
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default AgenaNightViews;
