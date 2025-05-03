/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import { useTranslation } from "react-i18next";
import CapellaPage from "../../components/capella/CapellaPage";

const Capella = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA CAPELLA",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz.  
        Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır. "
        // content={t("capellaAciklama")}
      />
      <CapellaPage />
    </MainLayout>
  );
};

export default Capella;
