// src/utils/iyzipay.js
import Iyzipay from "iyzipay";

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: "https://api.iyzipay.com",
});

export default iyzipay;
