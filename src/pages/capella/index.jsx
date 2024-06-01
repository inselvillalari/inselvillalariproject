/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import { CapellaPage } from "./capella";

const Capella = () => {
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
        content="Kalkan Kızıltaş'ta yer alan, çok özel bir lokasyonda, mavi ve yeşille bütünleşmiş, kendini gösteren, modern ve çarpıcı bir etki yaratan lüks bir villadır. Konumundan dolayı, Kalkan manzarasını ayaklarınızın altına sermektedir. Villamızın giriş katında deniz manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarının birinde yer alan jakuzide manzaraya karşı keyif de yapabileceksiniz. Villamız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…"
      />
      <CapellaPage />
    </MainLayout>
  );
};

export default Capella;
