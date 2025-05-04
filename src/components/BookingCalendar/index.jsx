import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useTranslation } from "next-i18next";

const days = ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"];
const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const BookingCalendar = (dateRangesData) => {
  const { t } = useTranslation("common");
  const [dateRanges, setDateRanges] = useState([]);

  useEffect(() => {
    const parsedRanges = dateRangesData?.dateRangesData?.map((range) => ({
      start: new DateObject(range.start),
      end: new DateObject(range.end),
      color: range.color,
    }));
    setDateRanges(parsedRanges);
  }, []);

  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    function getNumberOfMonths() {
      const width = window.innerWidth;

      if (width >= 1200) {
        return 3;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }

    const handleResize = () => {
      setNumberOfMonths(getNumberOfMonths());
    };

    setNumberOfMonths(getNumberOfMonths());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section-padding p-0 pb-100">
      <div className="container">
        <div className="section-head">
          <h3>{t("takvim.takvim")}</h3>
        </div>
      </div>
      <div className="container d-flex justify-content-center mobile">
        <Calendar
          numberOfMonths={numberOfMonths}
          weekStartDayIndex={1}
          weekDays={days}
          months={months}
          range
          readOnly
          className="bg-dark"
          style={{
            borderRadius: "8px",
          }}
          mapDays={({ date }) => {
            let props = {};
            let color = null;

            dateRanges.forEach((range) => {
              if (date >= range.start && date <= range.end) {
                color = range.color;
              }
            });

            if (color) {
              props.style = {
                backgroundColor: color,
                color: color === "gray" ? "black" : "white",
              };
            }

            return props;
          }}
        />
      </div>
      <div className="container d-flex justify-content-center">
        <div className="legend">
          <div>
            <span className="legend-color musait"></span> {t("takvim.musait")}
          </div>
          <div>
            <span className="legend-color rezervasyon"></span>{" "}
            {t("takvim.rezerve")}
          </div>
          <div>
            <span className="legend-color dolu"></span>{" "}
            {t("takvim.tesisKapatmis")}
          </div>
          {/* <div>
            <span className="legend-color secili"></span> Seçili Alan
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BookingCalendar), { ssr: false });
