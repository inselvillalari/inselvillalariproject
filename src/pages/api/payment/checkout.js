import iyzipay from "../../../utils/iyzipay";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const {
    name,
    email,
    phone,
    price,
    surname = "Belirtilmedi",
    identityNumber = "11111111111",
  } = req.body;

  const rawIp =
    req.headers["x-forwarded-for"] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    "85.34.78.112";

  const ip =
    typeof rawIp === "string" && rawIp.includes("::") ? "85.34.78.112" : rawIp;

  const safePrice = Number(price || 0).toFixed(2);

  const request = {
    locale: "tr",
    conversationId: uuidv4(),
    price: safePrice,
    paidPrice: safePrice,
    currency: "TRY",
    basketId: uuidv4(),
    paymentGroup: "PRODUCT",
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/reservation-success`,
    buyer: {
      id: uuidv4(),
      name,
      surname,
      gsmNumber: phone.replace(/^0/, "90"),
      email,
      identityNumber,
      registrationAddress: "Kaş, Antalya",
      ip,
      city: "Antalya",
      country: "Turkey",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Villa Rezervasyonu",
        category1: "Villa",
        itemType: "VIRTUAL",
        price: safePrice,
      },
    ],
    billingAddress: {
      contactName: "Tolga Kaya",
      city: "Antalya",
      country: "Turkey",
      address: "Kaş, Antalya",
      zipCode: "07580"
    },
  };

  let responseSent = false;

  iyzipay.checkoutFormInitialize.create(request, (err, result) => {
    console.log('request',request)
    if (responseSent) return;
    responseSent = true;

    if (err) {
      console.error("❌ İyzico Error:", err);
      return res.status(500).json({ error: err.message });
    }

    console.log("✅ İyzico Result:", result);
    return res.status(200).json(result);
  });

  setTimeout(() => {
    if (!responseSent) {
      responseSent = true;
      return res
        .status(504)
        .json({ error: "Iyzico yanıtı zaman aşımına uğradı." });
    }
  }, 5000);
}
