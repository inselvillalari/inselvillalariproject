/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/rigel/dayViews/ProjectIntro";
import ProjectVideo from "../../../components/Project-Video";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../../utils/withTranslation";
import withLoading from "../../../common/withLoading";

const RigelDayViews = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="VİLLA RİGEL"
        fullPath={[
          { id: 1, name: t("navbar.anasayfa"), url: "/" },
          { id: 2, name: t("navbar.iletisim"), url: "/contact" },
        ]}
        image="/assets/img/slid/villasCoverImg/rigel.jpeg"
      />
      <ProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/1.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/2.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/3.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/4.jpeg" />
            </a>
          </div>
        </div>
      </section>

      {/* <ProjectVideo /> */}

      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/5.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/6.jpeg" />
            </a>
            {/* <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/rigel/dayViews/7.jpeg" />
            </a> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export const getStaticProps = withTranslationProps(["common"]);
export default withLoading(RigelDayViews);
