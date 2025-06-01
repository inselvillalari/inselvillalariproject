// ./reservationFormValidation.js
import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const isValidTurkishID = (value) => {
  if (!/^[1-9][0-9]{10}$/.test(value)) return false;

  const digits = value.split("").map(Number);
  const [t1, t2, t3, t4, t5, t6, t7, t8, t9, q1, q2] = digits;

  const sumOdd = t1 + t3 + t5 + t7 + t9;
  const sumEven = t2 + t4 + t6 + t8;

  const checkDigit10 = (sumOdd * 7 - sumEven) % 10;
  const checkDigit11 = digits.slice(0, 10).reduce((a, b) => a + b, 0) % 10;

  return q1 === checkDigit10 && q2 === checkDigit11;
};

const isValidPhoneNumber = (value) => {
  if (!value) return false;
  const phoneNumber = parsePhoneNumberFromString(
    value.startsWith("+") ? value : `+${value}`
  );
  return phoneNumber?.isValid();
};

export const getFormValidationSchema = (t) =>
  Yup.object({
    villa: Yup.string().required(t("reservationForm.validation.villa")),
    name: Yup.string()
      .matches(
        /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/,
        t("reservationForm.validation.isim")
      )
      .required(t("reservationForm.validation.zorunluAlan")),
    surname: Yup.string()
      .matches(
        /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/,
        t("reservationForm.validation.surname")
      )
      .required(t("reservationForm.validation.zorunluAlan")),
    identityNumber: Yup.string().when("isForeign", {
      is: false,
      then: () =>
        Yup.string()
          .required(t("reservationForm.validation.zorunluAlan"))
          .test("tc-kontrol", t("reservationForm.validation.tc"), (value) =>
            isValidTurkishID(value)
          ),
      otherwise: () => Yup.string().notRequired(),
    }),

    passportNumber: Yup.string().when("isForeign", {
      is: true,
      then: () =>
        Yup.string().required(t("reservationForm.validation.zorunluAlan")),
      otherwise: () => Yup.string().notRequired(),
    }),
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz.")
      .required(t("reservationForm.validation.zorunluAlan")),
    gsmNumber: Yup.string()
      .required(t("reservationForm.validation.zorunluAlan"))
      .test(
        "is-valid-phone",
        t("reservationForm.validation.invalidGsmNumber"),
        (value) => isValidPhoneNumber(value)
      ),
    entryDate: Yup.date().required(t("reservationForm.validation.giris")),
    exitDate: Yup.date().required(t("reservationForm.validation.cikis")),
    adults: Yup.number().required(t("reservationForm.validation.yetiskin")),
    children: Yup.number().required(t("reservationForm.validation.cocuk")),
    registrationAddress: Yup.string().required(
      t("reservationForm.validation.adres")
    ),
    buyerCity: Yup.string().required(t("reservationForm.validation.sehir")),
    buyerCountry: Yup.string().required(t("reservationForm.validation.ulke")),
    contactName: Yup.string().required(t("reservationForm.validation.adSoyad")),
    address: Yup.string().required(t("reservationForm.validation.adres")),
    city: Yup.string().required(t("reservationForm.validation.sehir")),
    country: Yup.string().required(t("reservationForm.validation.ulke")),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, t("reservationForm.validation.postaKoduGecersiz"))
      .min(4, t("reservationForm.validation.postaKoduMinimum"))
      .required(t("reservationForm.validation.postaKodu")),
    agreementDistance: Yup.boolean().oneOf(
      [true],
      t("reservationForm.validation.mesafeliHizmetSozlesmesiOnayi")
    ),

    agreementPrivacy: Yup.boolean().oneOf(
      [true],
      t("reservationForm.validation.gizlilikPolitikasiOnayi")
    ),
  });
