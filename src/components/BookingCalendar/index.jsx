import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useTranslation } from "next-i18next";

// Türkçe
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

// Rusça
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

const BookingCalendar = ({ dateRangesData, priceList = [] }) => {
  const { t, i18n } = useTranslation("common");
  const [dateRanges, setDateRanges] = useState([]);
  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const parsedRanges = dateRangesData?.map((range) => ({
      start: new DateObject(range.start),
      end: new DateObject(range.end),
      color: range.color,
    }));
    setDateRanges(parsedRanges || []);
  }, [dateRangesData]);

  useEffect(() => {
    const updateMonths = () => {
      const width = window.innerWidth;
      setNumberOfMonths(width >= 1200 ? 3 : width >= 768 ? 2 : 1);
    };
    updateMonths();
    window.addEventListener("resize", updateMonths);
    return () => window.removeEventListener("resize", updateMonths);
  }, []);

  const getLocale = (lang) => {
    switch (lang) {
      case "ru":
        return ruLocale;
      case "tr":
        return trLocale;
      default:
        return undefined;
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
          hideYear
          className="bg-dark"
          style={{ borderRadius: "20px" }}
          mapDays={({ date }) => {
            const formattedDate = date.format("YYYY-MM-DD");
            const priceForDay = priceList?.find(
              (p) => p.date === formattedDate
            )?.price;

            // ✅ Önce color'ı tanımla
            let color = null;
            dateRanges?.forEach((range) => {
              if (date >= range.start && date <= range.end) {
                color = range.color;
              }
            });

            return {
              children: (
                <div
                  className="rmdp-selected"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: color || "transparent", // turuncu burada
                    color: color === "gray" ? "black" : "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 500,
                    boxShadow: color ? "0 0 3px rgba(0, 0, 0, 0.3)" : undefined,
                    margin: "auto",
                  }}
                >
                  {date.day}
                  {priceForDay && (
                    <div
                      style={{
                        fontSize: "7px",
                        marginTop: "1px",
                        textShadow: "0 0 1px black",
                        lineHeight: 1,
                      }}
                    >
                      ₺{priceForDay.toLocaleString("tr-TR")}
                    </div>
                  )}
                </div>
              ),
            };
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
          <LegendBox color="white" label={t("takvim.musait")} />
          <LegendBox color="#ff851b" label={t("takvim.rezerve")} />
          <LegendBox color="gray" label={t("takvim.tesisKapatmis")} />
        </div>
      </div>
    </section>
  );
};

const LegendBox = ({ color, label }) => (
  <div>
    <span
      style={{
        display: "inline-block",
        width: "15px",
        height: "15px",
        marginRight: "5px",
        backgroundColor: color,
        border: "1px solid black",
      }}
    ></span>
    {label}
  </div>
);

export default dynamic(() => Promise.resolve(BookingCalendar), { ssr: false });
