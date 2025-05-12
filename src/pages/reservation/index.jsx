import React from "react";
import ReservationForm from "../../components/Reservation/VillaReservationForm";
import PriceDetailCard from "../../components/Reservation/PriceDetailCard";
import LightLayout from "../layout/LightLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

function ReservationPage() {
  return (
      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
            <ReservationForm />
          </div>
          <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <PriceDetailCard />
          </div>
        </div>
      </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(ReservationPage);
