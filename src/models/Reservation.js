import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  villa: String,
  name: String,
  surname: String,
  identityNumber: String,
  email: String,
  gsmNumber: String,
  registrationAddress: String,
  buyerCity: String,
  buyerCountry: String,
  entryDate: Date,
  exitDate: Date,
  heatedPool: Boolean,
  wantsCrib: Boolean,
  adults: String,
  children: String,
  extraServices: [String],
  totalPrice: Number,
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed", "Canceled"],
    default: "Pending",
  },
  reservationBy: {
    type: ["Admin", "Customer", "Outsource"],
    default: "Customer",
  },
  reservationNumber: String,
  conversationId: String, // ✅ Iyzico ile eşleşme için
  contactName: String,
  address: String,
  city: String,
  country: String,
  zipCode: String,
  gsmNumber: String,
  totalVillaPrice: Number,
  totalHeatedPoolPrice: Number,
  grandTotal: Number,
  price: Number,
  refundPrice: Number,
  totalNights: Number,
  locale: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  fromIyzico: Boolean,
  paymentTransactionId: String,
});

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);
