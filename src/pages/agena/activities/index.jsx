/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageHeader from "../../../components/Page-header";
import ProjectVideo from "../../../components/Project-Video";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../../utils/withTranslation";
import withLoading from "../../../common/withLoading";
import Activities from "../../../components/activities";

const AgenaActivities = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <PageHeader
        title="VİLLA AGENA"
        fullPath={[
          { id: 1, name: t("navbar.anasayfa"), url: "/" },
          { id: 2, name: t("navbar.iletisim"), url: "/contact" },
        ]}
        image="/assets/img/slid/villasCoverImg/agena.jpeg"
      />
      <Activities />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/capella/activities/3.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/capella/activities/4.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/capella/activities/1.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-12"
            >
              <img alt="" src="/assets/img/slid/capella/activities/5.jpeg" />
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
              <img alt="" src="/assets/img/slid/capella/activities/6.jpeg" />
            </a>
            <a
              style={{ cursor: "none" }}
              className="col-lg-4 col-xl-3 col-md-6"
            >
              <img alt="" src="/assets/img/slid/capella/activities/7.jpeg" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export const getStaticProps = withTranslationProps(["common"]);
export default withLoading(AgenaActivities);
