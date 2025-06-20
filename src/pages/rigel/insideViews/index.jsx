import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/Page-header";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../../utils/withTranslation";
import withLoading from "../../../common/withLoading";
import FsLightbox from "fslightbox-react";
import InsideViews from "../../../components/insideViews";

const RigelInsideViews = () => {
  const { t } = useTranslation("common");
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const imageNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const sources = imageNumbers.map(
    (num) => `/assets/img/slid/rigel/indoor/${num}.jpg`
  );

  useEffect(() => {
    document.querySelector("body").classList.add("index3");
    return () => {
      document.querySelector("body").classList.remove("index3");
    };
  }, []);

  return (
    <>
      <PageHeader
        title="VİLLA RİGEL"
        fullPath={[
          { id: 1, name: t("navbar.anasayfa"), url: "/" },
          { id: 2, name: t("navbar.iletisim"), url: "/contact" },
        ]}
        image="/assets/img/slid/villasCoverImg/rigel.jpeg"
      />

      <InsideViews />

      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {sources.map((src, index) => (
              <a
                key={index}
                className="col-lg-4 col-xl-3 col-md-6"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSlideIndex(index + 1); // 1 tabanlı index
                  setToggler(!toggler);
                }}
              >
                <img alt={`indoor ${index + 1}`} src={src} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <FsLightbox toggler={toggler} sources={sources} slide={slideIndex} />
    </>
  );
};

export const getStaticProps = withTranslationProps(["common"]);
export default withLoading(RigelInsideViews);
