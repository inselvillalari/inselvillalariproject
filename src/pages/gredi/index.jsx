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
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz.
        Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve kapalı havuz ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır."
      />
      <GrediPage />
    </MainLayout>
  );
};

export default Gredi;
