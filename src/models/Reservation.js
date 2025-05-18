import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  villa: String,
  hirerName: String,
  hirerIdNumber: String,
  email: String,
  phone: String,
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
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);
