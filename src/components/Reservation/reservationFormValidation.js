// ./reservationFormValidation.js
import * as Yup from "yup";

export const getFormValidationSchema = (t) =>
  Yup.object({
    villa: Yup.string().required(t("reservationForm.validation.villa")),
    name: Yup.string()
      .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, t("reservationForm.validation.isim"))
      .required(t("reservationForm.validation.zorunluAlan")),
    identityNumber: Yup.string()
      .test("tcOrPassport-valid", t("reservationForm.validation.tc"), (value) => {
        if (!value) return false;
        const onlyNumbers = /^[0-9]+$/.test(value);
        if (onlyNumbers) {
          return value.length === 11;
        } else {
          return value.length >= 5;
        }
      })
      .required(t("reservationForm.validation.zorunluAlan")),
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz.")
      .required(t("reservationForm.validation.zorunluAlan")),
    phone: Yup.string()
      .matches(/^[0-9]+$/, t("reservationForm.validation.telefon1"))
      .min(10, t("reservationForm.validation.telefon2"))
      .required(t("reservationForm.validation.zorunluAlan")),
    entryDate: Yup.date().required(t("reservationForm.validation.giris")),
    exitDate: Yup.date().required(t("reservationForm.validation.cikis")),
    adults: Yup.number().required(t("reservationForm.validation.yetiskin")),
    children: Yup.number().required(t("reservationForm.validation.cocuk")),
    billingContactName: Yup.string().required("Fatura adı gerekli"),
    billingAddress: Yup.string().required("Fatura adresi gerekli"),
    billingCity: Yup.string().required("Şehir gerekli"),
    billingZipCode: Yup.string(),
    registrationAddress: Yup.string().required("Kayıt adresi gerekli"),
  });
