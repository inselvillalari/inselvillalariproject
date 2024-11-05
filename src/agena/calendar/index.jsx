import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.scss'; // Stil dosyasını burada oluşturacağız.

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Günlere özel durum verileri
  const bookingData = [
    { date: '2024-11-05', status: 'dolu' },
    { date: '2024-11-06', status: 'rezervasyon' },
    { date: '2024-11-07', status: 'fırsat' },
    { date: '2024-11-08', status: 'giriş' },
    { date: '2024-11-09', status: 'indirim' },
    { date: '2024-11-10', status: 'girişÇıkış' },
    // Diğer tarihler...
  ];

  // Her güne durumuna göre sınıf atayan fonksiyon
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const booking = bookingData.find(
        (item) => new Date(item.date).toDateString() === date.toDateString()
      );

      if (booking) {
        return booking.status; // Günün durumuna göre sınıf adını döndürür
      }
    }
    return null;
  };

  return (
    <div className="booking-calendar">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
      />

      {/* Takvim altındaki açıklama (legend) bölümü */}
      <div className="legend">
        <div><span className="legend-color dolu"></span> Dolu</div>
        <div><span className="legend-color rezervasyon"></span> Rezervasyon</div>
        <div><span className="legend-color fırsat"></span> Fırsat</div>
        <div><span className="legend-color giriş"></span> Giriş Günü</div>
        <div><span className="legend-color indirim"></span> İndirim</div>
        <div><span className="legend-color girişÇıkış"></span> Giriş/Çıkış</div>
      </div>
    </div>
  );
};

export default BookingCalendar;
