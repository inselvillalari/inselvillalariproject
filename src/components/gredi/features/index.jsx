import React from "react";
import TenPeople from "../../../icons/TenPeople";
import FivePlusOne from "../../../icons/FivePlusOne";
import Check from "../../../icons/Check";
import PrivatePool from "../../../icons/PrivatePool";
import BBQ from "../../../icons/BBQ";
import Jacuzzy from "../../../icons/Jacuzzy";
import PingPong from "../../../icons/PingPong";
import { useTranslation } from "next-i18next";

const GrediFeatures = () => {
  const { t } = useTranslation("common");
  return (
    <section className="services section-padding p-0">
      <div className="container">
        <div className="section-head">
          <h3>{t("features.ozellikler")}</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 sm-mb30 sm-pl50">
            <div className="row">
              <div className="col-4">
                <div className="item">
                  <TenPeople title={t("features.onKisilik")} />
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <PrivatePool title={t("features.ozelHavuz")} />
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <FivePlusOne title="5+1" />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <PingPong title={t("features.masaTenisi")} />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <BBQ title={t("features.bbq")} />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <Jacuzzy title={t("features.jakuzi")} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row pl-5">
              <div className="col-sm-12 col-md-6 sm-mb30 sm-pl50">
                <div
                  className="row"
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="item">
                    <Check title={t("features.otopark")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.denizManzarali")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.tv")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.ps5")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.gorevli")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.kamera")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.klima")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.mobilyali")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.beyazEsya")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.sacKurutma")} />
                  </div>
                  <div className="item">
                    <Check title={t("features.utu")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.sarj")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.ebeveynBanyosu")} />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 sm-pl50">
                <div
                  className="row "
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="item ">
                    <Check title={t("features.wifi")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.kapaliHavuz")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.camasir")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.bebekYatagi")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.teras")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.havuzBakim")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.oyunAlani")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.alarm")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.bahceli")} />
                  </div>
                  <div className="item ">
                    <Check title={t("features.cocukHavuzu")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrediFeatures;
