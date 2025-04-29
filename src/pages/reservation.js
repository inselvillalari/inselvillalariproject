import React, { useState } from "react";
import ReservationForm from "../components/Reservation/VillaReservationForm";
import PriceDetailCard from "../components/Reservation/PriceDetailCard";
import LightLayout from "./layout/LightLayout";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    villa: "",
    entryDate: "",
    exitDate: "",
    heatedPool: false,
  });

  return (
    <LightLayout>
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
            <ReservationForm onFormChange={setFormData} />
          </div>
          <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <PriceDetailCard
              villa={formData.villa}
              entryDate={formData.entryDate}
              exitDate={formData.exitDate}
              heatedPool={formData.heatedPool}
            />
          </div>
        </div>
      </div>
    </LightLayout>
  );
}
