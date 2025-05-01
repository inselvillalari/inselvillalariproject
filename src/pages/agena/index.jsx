/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import AgenaPage from "../../agena/AgenaPage";
import { useTranslation } from "react-i18next";

const Agena = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA AGENA",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ana ebeveyn odamızda yer alan jakuzide manzaraya karşı keyif yapabileceksiniz. 
        Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta oyun odası (bilardo, masa tenisi, dart) ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır. "
        // content={t("agenaAciklama")}
      />
      <AgenaPage />
    </MainLayout>
  );
};

export default Agena;
