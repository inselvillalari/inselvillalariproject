import React, { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";




const BookingCalendar = (dateRangesData) => {
  const [dateRanges, setDateRanges] = useState([]);

  useEffect(() => {
    // JSON dosyasındaki tarih aralıklarını yükleyip, DateObject ile işleyin
    const parsedRanges = dateRangesData?.dateRangesData?.map((range) => ({
      start: new DateObject(range.start),
      end: new DateObject(range.end),
      color: range.color,
    }));
    setDateRanges(parsedRanges);
  }, []);
console.log('dateRangesData',dateRangesData)
  return (
    <section className="section-padding">
      <div className="container">
        <Calendar
          numberOfMonths={2}
          range
          readOnly
          className="bg-dark"
          style={{
            borderRadius: "8px",
          }}
          mapDays={({ date }) => {
            let props = {};
            let color = null;

            // Belirli tarih aralıklarını renklendir
            dateRanges.forEach((range) => {
              if (date >= range.start && date <= range.end) {
                color = range.color;
              }
            });

            // Renk atanmışsa arka plan rengini ayarla
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
    </section>
  );
};

export default BookingCalendar;
