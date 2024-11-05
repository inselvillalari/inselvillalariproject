import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { tr } from "date-fns/locale";
const   BookingCalendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      locale={tr}
    />
  );
};

export default BookingCalendar;

























// SILMEEEEEEEEEEEEEEEEEEEEEE

// import React, { useState } from "react";
// import { DateRangePicker } from "react-date-range";
// import { addDays } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import "./index.scss"; // Özel stilleri buraya ekleyeceğiz
// import { tr } from "date-fns/locale";

// const BookingCalendar = () => {
//   const [range, setRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);

//   // Günlere özel durum verileri
//   const bookingData = [
//     { date: "2024-11-05", status: "dolu" },
//     { date: "2024-11-06", status: "rezervasyon" },
//     { date: "2024-11-07", status: "fırsat" },
//     { date: "2024-11-08", status: "girişGünü" },
//     { date: "2024-11-09", status: "indirim" },
//     { date: "2024-11-10", status: "girişÇıkış" },
//     // Diğer tarihler...
//   ];

//   const getStatusClassName = (date) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     const booking = bookingData.find((item) => item.date === formattedDate);
//     return booking ? booking.status : "";
//   };

//   const dayContentRenderer = (day) => {
//     const statusClass = getStatusClassName(day);
//     return (
//       <div className={`day-content ${statusClass}`}>
//         {day.getDate()}
//       </div>
//     );
//   };

//   return (
//     <div className="booking-calendar">
//       <h2>Tarih Aralığı Seçin</h2>
//       <DateRangePicker
//         editableDateInputs={true}
//         onChange={(item) => setRange([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={range}
//         months={2}
//         direction="horizontal"
//         dayContentRenderer={dayContentRenderer} // Her gün için özel içerik
//         showDateDisplay={false}
//         locale={tr}
//       />
//       <div className="legend">
//         <div><span className="legend-color musait"></span> Müsait</div>
//         <div><span className="legend-color dolu"></span> Dolu</div>
//         <div><span className="legend-color rezervasyon"></span> Rezervasyon</div>
//         <div><span className="legend-color fırsat"></span> Fırsat</div>
//         <div><span className="legend-color girişGünü"></span> Giriş Günü</div>
//         <div><span className="legend-color indirim"></span> İndirim</div>
//         <div><span className="legend-color girişÇıkış"></span> Giriş/Çıkış</div>
//       </div>
//     </div>
//   );
// };

// export default BookingCalendar;
