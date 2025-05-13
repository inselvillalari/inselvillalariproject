import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useTranslation } from "next-i18next";

// Türkçe locale tanımı (default olarak kullanılacak)
const trLocale = {
  name: "gregorian_tr",
  months: [
    ["Ocak", "Oca"],
    ["Şubat", "Şub"],
    ["Mart", "Mar"],
    ["Nisan", "Nis"],
    ["Mayıs", "May"],
    ["Haziran", "Haz"],
    ["Temmuz", "Tem"],
    ["Ağustos", "Ağu"],
    ["Eylül", "Eyl"],
    ["Ekim", "Eki"],
    ["Kasım", "Kas"],
    ["Aralık", "Ara"],
  ],
  weekDays: [
    ["Pazar", "Pz"],
    ["Pazartesi", "Pt"],
    ["Salı", "Sa"],
    ["Çarşamba", "Ça"],
    ["Perşembe", "Pe"],
    ["Cuma", "Cu"],
    ["Cumartesi", "Ct"],
  ],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  rtl: false,
};

// Rusça locale tanımı
const ruLocale = {
  name: "gregorian_ru",
  months: [
    ["Январь", "Янв"],
    ["Февраль", "Фев"],
    ["Март", "Мар"],
    ["Апрель", "Апр"],
    ["Май", "Май"],
    ["Июнь", "Июн"],
    ["Июль", "Июл"],
    ["Август", "Авг"],
    ["Сентябрь", "Сен"],
    ["Октябрь", "Окт"],
    ["Ноябрь", "Ноя"],
    ["Декабрь", "Дек"],
  ],
  weekDays: [
    ["Воскресенье", "Вс"],
    ["Понедельник", "Пн"],
    ["Вторник", "Вт"],
    ["Среда", "Ср"],
    ["Четверг", "Чт"],
    ["Пятница", "Пт"],
    ["Суббота", "Сб"],
  ],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  rtl: false,
};

const BookingCalendar = (dateRangesData) => {
  const { t, i18n } = useTranslation("common");
  const [dateRanges, setDateRanges] = useState([]);
  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const parsedRanges = dateRangesData?.dateRangesData?.map((range) => ({
      start: new DateObject(range.start),
      end: new DateObject(range.end),
      color: range.color,
    }));
    setDateRanges(parsedRanges);
  }, [dateRangesData]);

  useEffect(() => {
    function getNumberOfMonths() {
      const width = window.innerWidth;
      if (width >= 1200) return 3;
      else if (width >= 768) return 2;
      else return 1;
    }

    const handleResize = () => {
      setNumberOfMonths(getNumberOfMonths());
    };

    setNumberOfMonths(getNumberOfMonths());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLocale = (lang) => {
    switch (lang) {
      case "ru":
        return ruLocale;
      case "en":
        return undefined; // İngilizce varsayılan
      case "tr":
      default:
        return trLocale; // Varsayılan: Türkçe
    }
  };

  return (
    <section className="section-padding p-0 pb-100">
      <div className="container">
        <div className="section-head">
          <h3
            style={{
              letterSpacing: "4px",
              marginBottom: "30px",
              fontFamily: "Jost, sans-serif",
              fontSize: "50px",
            }}
          >
            {t("takvim.takvim")}
          </h3>
        </div>
      </div>
      <div className="container d-flex justify-content-center mobile">
        <Calendar
          locale={getLocale(i18n.language)}
          numberOfMonths={numberOfMonths}
          weekStartDayIndex={1}
          range
          readOnly
          className="bg-dark"
          style={{ borderRadius: "8px" }}
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
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span
              style={{
                display: "inlineBlock",
                width: "15px",
                height: "15px",
                marginRight: "5px",
                backgroundColor: "white",
                border: "1px solid black",
                color: "black",
              }}
            ></span>{" "}
            {t("takvim.musait")}
          </div>
          <div>
            <span
              style={{
                display: "inlineBlock",
                width: "15px",
                height: "15px",
                marginRight: "5px",
                backgroundColor: "#ff851b",
                border: "1px solid black",
                color: "black",
              }}
            ></span>{" "}
            {t("takvim.rezerve")}
          </div>
          <div>
            <span
              style={{
                display: "inlineBlock",
                width: "15px",
                height: "15px",
                marginRight: "5px",
                backgroundColor: "gray",
                border: "1px solid black",
                color: "black",
              }}
            ></span>{" "}
            {t("takvim.tesisKapatmis")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BookingCalendar), { ssr: false });
