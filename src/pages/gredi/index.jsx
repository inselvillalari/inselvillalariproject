/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import GrediPage from "../../gredi/GrediPage";

const Gredi = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA GREDI",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Kalkan Kızıltaş'ta, çok özel bir lokasyonda yer alan, mavi ve yeşille bütünleşmiş, modern ve çarpıcı bir etkisi ile kendini gösteren lüks bir villadır. Bulunduğu yer itibariyle, Kalkan manzarasını bütünüyle kucaklayabilirsiniz. Villamızın giriş katında deniz manzaralı açık mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarının birinde yer alan jakuzide manzaraya karşı keyif de yapabileceksiniz. Villamız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…"
      />
      <GrediPage />
    </MainLayout>
  );
};

export default Gredi;
