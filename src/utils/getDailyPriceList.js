import { eachDayOfInterval, format } from "date-fns";
import villaPrices from "../components/Reservation/villaPrices"; // yolunu ayarla

export function getDailyPriceList(villaName) {
  const priceRanges = villaPrices[villaName];
  if (!priceRanges) return [];

  const dailyPrices = [];

  priceRanges.forEach(({ start, end, price }) => {
    const days = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });

    days.forEach((date) => {
      dailyPrices.push({
        date: format(date, "yyyy-MM-dd"),
        price,
      });
    });
  });

  return dailyPrices;
}
