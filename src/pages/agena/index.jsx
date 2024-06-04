/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import AgenaPage from "./agena";

const Agena = () => {
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
        content="Kalkan Kızıltaş'ta yer alan, çok özel bir lokasyonda, mavi ve yeşille bütünleşmiş, kendini gösteren, modern ve çarpıcı bir etki yaratan lüks bir villadır. Villamız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…"
      />
      <AgenaPage />
    </MainLayout>
  );
};

export default Agena;
