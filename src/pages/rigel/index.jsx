/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import { RigelPage } from "./rigel";

const Agena = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA RIGEL",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Kalkan Kızıltaş mevkiinde yer alan, çok özel bir lokasyonda, mavi ve yeşille bütünleşmiş, kendini gösteren, modern ve çarpıcı bir etki yaratan lüks bir villadır. Konumundan dolayı, Kalkan manzarasını ayaklarınızın altına sermektedir. Villamızın giriş katında deniz manzaralı Amerikan mutfak - salon üst katlarında ise 5 adet suit yatak odası bulunmakta olup ebeveyn odalarının ikisinde yer alan jakuzide, manzaraya karşı keyif de yapabileceksiniz. Bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve ısıtmalı kapalı havuz ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için kapılarımızı açıyoruz…

"
      />
      <RigelPage />
    </MainLayout>
  );
};

export default Agena;
