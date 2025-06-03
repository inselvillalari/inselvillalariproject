import Head from "next/head";
import Link from "next/link";
import withLoading from "../../common/withLoading";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const villaKeys = ["agena", "capella", "gredi", "rigel"];

const Sitemap = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("siteHaritasi")} | İnsel Villaları</title>
        <meta name="description" content={t("siteHaritasiDesc")} />
      </Head>

      <main className="sitemap-container">
        <h1 className="sitemap-title">{t("siteHaritasi")}</h1>

        <div className="sitemap-row">
          {/* Genel Sayfalar */}
          <div className="sitemap-column">
            <h2 className="sitemap-section-title">{t("genelSayfalar")}</h2>
            <ul className="sitemap-ul">
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/">
                  {t("navbar.anasayfa")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/home">
                  {t("navbar.hakkimizda")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/contact">
                  {t("navbar.iletisim")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/reservation">
                  {t("navbar.rezervasyon")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/reservation-lookup">
                  {t("navbar.rezervasyonSorgula")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/privacy-policy">
                  {t("footer.politika")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/agreement">
                  {t("footer.sozlesme")}
                </Link>
              </li>
              <li className="sitemap-li">
                <Link className="sitemap-link" href="/legal-info">
                  {t("footer.yasal")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Villa Sayfaları */}
          <div className="sitemap-column">
            <h2 className="sitemap-section-title">{t("villalar")}</h2>
            <div className="sitemap-villa-grid">
              {villaKeys.map((villa) => (
                <div key={villa} className="sitemap-villa-box">
                  <h3 className="sitemap-villa-title">
                    {t(`villaIsimleri.${villa}.baslik`)}
                  </h3>
                  <ul className="sitemap-ul">
                    <li className="sitemap-li">
                      <Link className="sitemap-link" href={`/${villa}`}>
                        {t("villaSayfasi")}
                      </Link>
                    </li>
                    <li className="sitemap-li">
                      <Link
                        className="sitemap-link"
                        href={`/${villa}/activities`}
                      >
                        {t("aktiviteler")}
                      </Link>
                    </li>
                    <li className="sitemap-li">
                      <Link
                        className="sitemap-link"
                        href={`/${villa}/dayViews`}
                      >
                        {t("gunduzGorunumleri")}
                      </Link>
                    </li>
                    <li className="sitemap-li">
                      <Link
                        className="sitemap-link"
                        href={`/${villa}/nightViews`}
                      >
                        {t("geceGorunumleri")}
                      </Link>
                    </li>
                    <li className="sitemap-li">
                      <Link
                        className="sitemap-link"
                        href={`/${villa}/insideViews`}
                      >
                        {t("icMekan")}
                      </Link>
                    </li>
                    <li className="sitemap-li">
                      <Link
                        className="sitemap-link"
                        href={`/${villa}/nightInsideViews`}
                      >
                        {t("geceIcMekanGorunumu")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(Sitemap);
