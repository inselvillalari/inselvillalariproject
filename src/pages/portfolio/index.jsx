import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";

const Portfolio2 = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-6 cluom current" data-tab="tab-1">
            <div className="info">
              <h1 className="custom-font">Patara</h1>
            </div>
            <div className="more">
              <Link
                href="https://tr.wikipedia.org/wiki/Patara"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 cluom" data-tab="tab-2">
            <div className="info">
              <h1 className="custom-font">Kaş</h1>
            </div>
            <div className="more">
              <Link
                href="https://www.google.com/search?q=ka%C5%9F%27ta+gezilecek+yerler&sca_esv=c8c65b53b193be60&biw=2560&bih=1294&ei=7blcZp3KG93ixc8Ps-SumAw&udm=&oq=ka%C5%9Fta+ge&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWthxZ90YSBnZSoCCAAyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyCBAAGBYYChgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yCBAAGBYYChgeMggQABgWGB4YD0iKFlDJBli4DHAAeAKQAQCYAZIBoAGnBaoBAzAuNbgBA8gBAPgBAZgCBqACtgXCAgQQABhHwgIMEAAYgAQYQxiKBRgKwgIFEAAYgATCAggQABiABBiiBJgDAIgGAZAGCJIHAzEuNaAHkSQ&sclient=gws-wiz-serp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 cluom" data-tab="tab-3">
            <div className="info">
              <h1 className="custom-font">Kaputaş Plajı</h1>
            </div>
            <div className="more">
              <Link
                href="https://www.google.com/search?q=Kaputa%C5%9F+plaj%C4%B1&oq=Kaputa%C5%9F+plaj%C4%B1&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 cluom" data-tab="tab-4">
            <div className="info">
              <h1 className="custom-font">Saklıkent</h1>
            </div>
            <div className="more">
              <Link
                href="https://tr.wikipedia.org/wiki/Sakl%C4%B1kent_Mill%C3%AE_Park%C4%B1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 cluom" data-tab="tab-5">
            <div className="info">
              <h1 className="custom-font">Kekova</h1>
            </div>
            <div className="more">
              <Link
                href="https://tr.wikipedia.org/wiki/Kekova"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 cluom" data-tab="tab-6">
            <div className="info">
              <h1 className="custom-font">Tlos</h1>
            </div>
            <div className="more">
              <Link
                href="https://tr.wikipedia.org/wiki/Tlos"
                rel="noopener noreferrer"
                target="_blank"
              >
                <a target="_blank">
                  Detaya Git <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/patara.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/kas.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/kaputas.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/saklikent.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-5"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/kekova.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-6"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/slid/portfolio/tlos.jpeg)`,
          }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Portfolio2;
