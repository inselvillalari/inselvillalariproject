/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs1.json";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Blogs2 = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="blog-grid center bg-gray section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                {t("blogs.location")}
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                {t("blogs.views")}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {Blog1Data.map((blog, index) => (
            <div className="col-lg-6" key={blog.id}>
              <div
                className="item wow fadeInUp md-mb50"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s"}
              >
                <div className="post-img">
                  <div className="img">
                    <img style={{ width: "65%" }} src={blog.image} alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <Link href="" style={{ pointerEvents: "none" }}>
                      {blog.date}
                    </Link>
                  </div>
                  <h5 className="playfont">
                    <Link href={`/${blog.route}`} legacyBehavior>
                      <a style={{ color: "inherit" }}>
                        {t(`blogs.posts.${blog.id}.title`)}
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
