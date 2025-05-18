import iyzipay from "../../../utils/iyzipay";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, price } = req.body;

  const request = {
    locale: "tr",
    conversationId: uuidv4(),
    price: price.toString(),
    paidPrice: price.toString(),
    currency: "TRY",
    basketId: uuidv4(),
    paymentGroup: "PRODUCT",
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/reservation-success`,
    buyer: {
      id: uuidv4(),
      name,
      surname: "Soyad",
      gsmNumber: phone,
      email,
      identityNumber: "11111111111",
      registrationAddress: "Kaş, Antalya",
      ip: "85.34.78.112",
      city: "Antalya",
      country: "Turkey",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Villa Rezervasyonu",
        category1: "Villa",
        itemType: "VIRTUAL",
        price: price.toString(),
      },
    ],
  };

  iyzipay.checkoutFormInitialize.create(request, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(result);
  });
}
