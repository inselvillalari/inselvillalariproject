/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../agena/insideViews/ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";

const AgenaInsideViews = () => {
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
        image="/assets/img/slid/villasCoverImg/agena.jpeg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/agena/indoor/5.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/agena/indoor/3.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/agena/indoor/4.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/agena/indoor/6.jpeg" />
            </a>
          </div>
        </div>
      </section>

      {/* <ProjectVideo /> */}

      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/7.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/8.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/9.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/10.jpeg" />
          </a>
        </div>
      </section>
      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/11.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/12.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/13.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/14.jpeg" />
          </a>
        </div>
      </section>
      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/15.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/16.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/17.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/18.jpeg" />
          </a>
        </div>
      </section>
      <section className="projdtal">
        <div className="justified-gallery">
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/19.jpeg" />
          </a>
          {/* <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/16.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/17.jpeg" />
          </a>
          <a style={{ cursor: "none" }} className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/slid/agena/indoor/18.jpeg" />
          </a> */}
        </div>
      </section>
    </MainLayout>
  );
};

export default AgenaInsideViews;
