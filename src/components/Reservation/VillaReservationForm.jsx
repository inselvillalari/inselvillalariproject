import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "next-i18next";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import enUS from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";
import { createReservation } from "../../store/reservation/thunk";
import { setReservationData } from "../../store/reservation/reducer";
import API from "../../helpers/api";
import { inputStyle, labelStyle, sectionTitleStyle } from "./styles";
import { getFormValidationSchema } from "./reservationFormValidation";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];

export default function ReservationForm() {
  const { t, i18n } = useTranslation("common");
  const [extraAdults, setExtraAdults] = useState([]);
  const [extraChildren, setExtraChildren] = useState([]);
  const [guestError, setGuestError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const reservationPrices = useSelector((state) => state.reservation);

  useEffect(() => {
    if (i18n.language === "tr") {
      registerLocale("tr", tr);
    } else if (i18n.language === "en") {
      registerLocale("en", enUS);
    } else if (i18n.language === "ru") {
      registerLocale("ru", ru);
    }
  }, [i18n.language]);

  const formik = useFormik({
    initialValues: {
      villa: "",
      name: "",
      surname: "",
      identityNumber: "",
      email: "",
      gsmNumber: "",
      buyerCity: "",
      buyerCountry: "",
      entryDate: null,
      exitDate: null,
      adults: "",
      children: "",
      heatedPool: false,
      wantsCrib: false,
      contactName: "",
      address: "",
      city: "",
      country: "Turkey",
      zipCode: "",
      registrationAddress: "",

      //burdan sonrasina dokunma
      totalVillaPrice: "",
      totalHeatedPoolPrice: "",
      grandTotal: "",
      totalNights: 0,
      locale: i18n.language,
    },
    validationSchema: getFormValidationSchema(t),
    onSubmit: async (values) => {
      try {
        const payload = {
          ...values,
          entryDate: values.entryDate?.toISOString(),
          exitDate: values.exitDate?.toISOString(),
          status: "Pending",
          conversationId: uuidv4(),
        };

        // 1️⃣ Rezervasyon veritabanına kaydedilir
        await dispatch(createReservation(payload)).unwrap();

        // 2️⃣ Iyzico ödeme token'ı ve URL'si alınır
        const res = await API.post("/api/payment/checkout", {
          name: values.hirerName,
          email: values.email,
          phone: values.phone,
          price: 32000,
        });

        const paymentUrl = res?.data?.paymentPageUrl;

        if (paymentUrl) {
          // Kullanıcıya ara sayfa göster + yönlendir
          const redirectWindow = window.open("", "_self");
          if (redirectWindow) {
            redirectWindow.document.write(`
              <html>
                <head>
                  <title>Ödeme Sayfasına Yönlendiriliyor</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <style>
                    body {
                      font-family: 'Poppins', sans-serif;
                      text-align: center;
                      padding: 50px;
                      background-color: #fff;
                      color: #333;
                    }
                    h2 {
                      font-size: 22px;
                      margin-bottom: 20px;
                    }
                    p {
                      font-size: 14px;
                    }
                  </style>
                </head>
                <body>
                  <h2>Ödeme sayfasına yönlendiriliyorsunuz...</h2>
                  <p>Lütfen bekleyiniz. Eğer birkaç saniye içinde yönlendirilmezseniz <a href="${paymentUrl}">buraya tıklayın</a>.</p>
                  <script>
                    setTimeout(() => {
                      window.location.href = "${paymentUrl}";
                    }, 1000);
                  </script>
                </body>
              </html>
            `);
          }
        } else {
          throw new Error("Ödeme sayfası bağlantısı alınamadı");
        }
      } catch (err) {
        console.error("Rezervasyon veya ödeme oluşturulamadı:", err);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    },
  });

  const minDate = new Date("2025-05-15");
  const maxDate = new Date("2025-11-01");

  useEffect(() => {
    const adults = parseInt(formik.values.adults);
    const children = parseInt(formik.values.children);

    if (isNaN(adults) || isNaN(children)) {
      setGuestError(t("reservationForm.validation.secmeZorunlulugu"));
      setExtraAdults([]);
      setExtraChildren([]);
      return;
    }

    const total = adults + children;
    if (total > 10) {
      setGuestError(t("reservationForm.validation.toplam10"));
      setExtraAdults([]);
      setExtraChildren([]);
    } else {
      setGuestError("");
      const adultsArray = [];
      const childrenArray = [];

      if (adults > 1) {
        for (let i = 0; i < adults - 1; i++) {
          adultsArray.push({ name: "", idNumber: "" });
        }
      }

      if (children > 0) {
        for (let i = 0; i < children; i++) {
          childrenArray.push({ name: "", idNumber: "" });
        }
      }

      setExtraAdults(adultsArray);
      setExtraChildren(childrenArray);
    }
  }, [formik.values.adults, formik.values.children]);

  useEffect(() => {
    if (
      formik.values.villa &&
      formik.values.entryDate &&
      formik.values.exitDate
    ) {
      dispatch(
        setReservationData({
          villa: formik.values.villa,
          entryDate: formik.values.entryDate?.toISOString() || null,
          exitDate: formik.values.exitDate?.toISOString() || null,
          heatedPool: formik.values.heatedPool,
        })
      );
    }
  }, [
    formik.values.villa,
    formik.values.entryDate,
    formik.values.exitDate,
    formik.values.heatedPool,
  ]);

  useEffect(() => {
    const form = document.querySelector("form");
    const handleSubmit = () => {
      setTimeout(() => {
        const invalid = document.querySelector(".is-invalid");
        if (invalid) {
          invalid.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    };
    form?.addEventListener("submit", handleSubmit);
    return () => form?.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "10px",
        border: "1px solid #eee",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "22px",
          fontWeight: "700",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {t("reservationForm.form")}
      </h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Villa Seçimi */}
        <h3 style={sectionTitleStyle}>{t("reservationForm.villaSecimi")}</h3>
        <label style={labelStyle}>{t("reservationForm.villa")}</label>
        <select
          name="villa"
          value={formik.values.villa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.villa && formik.errors.villa ? "is-invalid" : ""
          }`}
        >
          <option value=""> {t("reservationForm.sec")}</option>
          {villas.map((villa) => (
            <option key={villa} value={villa}>
              {villa}
            </option>
          ))}
        </select>
        {formik.touched.villa && formik.errors.villa && (
          <div className="invalid-feedback">{formik.errors.villa}</div>
        )}

        {/* Kiralayan Bilgileri */}
        <h3 style={sectionTitleStyle}> {t("reservationForm.kiralayan")}</h3>
        <label style={labelStyle}>{t("reservationForm.ad")}</label>
        <input
          name="name"
          value={formik.values.name}
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(
              /[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g,
              ""
            );
            formik.setFieldValue("name", onlyLetters);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.name && formik.errors.name ? "is-invalid" : ""
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="invalid-feedback">{formik.errors.name}</div>
        )}
        <label style={labelStyle}>{t("reservationForm.soyad")}</label>
        <input
          name="surname"
          value={formik.values.surname}
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(
              /[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g,
              ""
            );
            formik.setFieldValue("surname", onlyLetters);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.surname && formik.errors.surname ? "is-invalid" : ""
          }`}
        />
        {formik.touched.surname && formik.errors.surname && (
          <div className="invalid-feedback">{formik.errors.surname}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.tc")}</label>
        <input
          name="identityNumber"
          value={formik.values.identityNumber}
          onChange={(e) => {
            const allowed = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
            formik.setFieldValue("identityNumber", allowed);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.identityNumber && formik.errors.identityNumber
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.identityNumber && formik.errors.identityNumber && (
          <div className="invalid-feedback">{formik.errors.identityNumber}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.email")}</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.email && formik.errors.email ? "is-invalid" : ""
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.telefon")}</label>
        <input
          name="gsmNumber"
          value={formik.values.gsmNumber}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/[^0-9]/g, ""); // sadece 0-9 rakamları alır
            formik.setFieldValue("gsmNumber", onlyNums);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.gsmNumber && formik.errors.gsmNumber
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.gsmNumber && formik.errors.gsmNumber && (
          <div className="invalid-feedback">{formik.errors.gsmNumber}</div>
        )}
        <label style={labelStyle}>{t("reservationForm.adres")}</label>
        <input
          name="registrationAddress"
          value={formik.values.registrationAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.registrationAddress &&
            formik.errors.registrationAddress
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.registrationAddress &&
          formik.errors.registrationAddress && (
            <div className="invalid-feedback">
              {formik.errors.registrationAddress}
            </div>
          )}

        <label style={labelStyle}>{t("reservationForm.sehir")}</label>
        <input
          name="buyerCity"
          value={formik.values.buyerCity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.buyerCity && formik.errors.buyerCity
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.buyerCity && formik.errors.buyerCity && (
          <div className="invalid-feedback">{formik.errors.buyerCity}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.ulke")}</label>
        <input
          name="buyerCountry"
          value={formik.values.buyerCountry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.buyerCountry && formik.errors.buyerCountry
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.buyerCountry && formik.errors.buyerCountry && (
          <div className="invalid-feedback">{formik.errors.buyerCountry}</div>
        )}

        {/* Tarih Bilgileri */}
        <h3 style={sectionTitleStyle}>{t("reservationForm.tarih")}</h3>
        <label
          style={{ ...labelStyle, marginTop: "10px", marginRight: "20px" }}
        >
          {t("reservationForm.giris")}
        </label>
        <DatePicker
          locale={i18n.language}
          selected={formik.values.entryDate}
          onChange={(date) => {
            formik.setFieldValue("entryDate", date);
            if (formik.values.exitDate && date > formik.values.exitDate) {
              formik.setFieldValue("exitDate", null);
            }
          }}
          selectsStart
          startDate={formik.values.entryDate}
          endDate={formik.values.exitDate}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="dd/MM/yyyy"
          placeholderText={t("reservationForm.girisSecin")}
          wrapperClassName="datePicker"
          className={`form-control ${
            formik.touched.entryDate && formik.errors.entryDate
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.entryDate && formik.errors.entryDate && (
          <div className="invalid-feedback">{formik.errors.entryDate}</div>
        )}
        <hr />
        <label
          style={{ ...labelStyle, marginTop: "10px", marginRight: "20px" }}
        >
          {t("reservationForm.cikis")}
        </label>
        <DatePicker
          locale={i18n.language}
          selected={formik.values.exitDate}
          onChange={(date) => {
            formik.setFieldValue("exitDate", date);
            if (formik.values.entryDate && date < formik.values.entryDate) {
              formik.setFieldValue("entryDate", null);
            }
          }}
          selectsEnd
          startDate={formik.values.entryDate}
          endDate={formik.values.exitDate}
          minDate={formik.values.entryDate || minDate}
          maxDate={maxDate}
          dateFormat="dd/MM/yyyy"
          placeholderText={t("reservationForm.cikisSecin")}
          wrapperClassName="datePicker"
          className={`form-control ${
            formik.touched.exitDate && formik.errors.exitDate
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.exitDate && formik.errors.exitDate && (
          <div className="invalid-feedback">{formik.errors.exitDate}</div>
        )}

        {/* Kişi Sayısı */}
        <h3 style={sectionTitleStyle}>{t("reservationForm.kisiSayisi")}</h3>
        <label style={labelStyle}>{t("reservationForm.yetiskin")}</label>
        <select
          name="adults"
          value={formik.values.adults}
          onChange={formik.handleChange}
          style={inputStyle}
        >
          <option value="">{t("reservationForm.secin")}</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {formik.touched.adults && formik.errors.adults && (
          <div className="invalid-feedback">{formik.errors.adults}</div>
        )}
        <label style={labelStyle}>{t("reservationForm.cocuk")}</label>
        <select
          name="children"
          value={formik.values.children}
          onChange={formik.handleChange}
          style={inputStyle}
        >
          <option value="">{t("reservationForm.secin")}</option>
          {Array.from({ length: 11 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {formik.touched.children && formik.errors.children && (
          <div className="invalid-feedback">{formik.errors.children}</div>
        )}
        {/* Guest Errors */}
        {guestError && (
          <div
            style={{
              color: "red",
              marginTop: "8px",
              marginBottom: "12px",
              fontSize: "13px",
            }}
          >
            {guestError}
          </div>
        )}

        {/* Ekstra Konaklayacaklar */}
        {extraAdults.length > 0 && (
          <>
            <h3 style={sectionTitleStyle}>
              {t("reservationForm.ekstraYetiskin")}
            </h3>
            {extraAdults.map((_, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>
                  {index + 1}. {t("reservationForm.yetiskinIsim")}
                </label>
                <input
                  placeholder={t("reservationForm.yetiskinIsim")}
                  style={inputStyle}
                />
                <label style={labelStyle}>{t("reservationForm.tc")}</label>
                <input
                  placeholder={t("reservationForm.tc")}
                  style={inputStyle}
                />
              </div>
            ))}
          </>
        )}

        {extraChildren.length > 0 && (
          <>
            <h3 style={sectionTitleStyle}>
              {t("reservationForm.cocukBilgileri")}
            </h3>
            {extraChildren.map((_, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>
                  {index + 1}. {t("reservationForm.cocukIsim")}
                </label>
                <input
                  placeholder={t("reservationForm.cocukIsim")}
                  style={inputStyle}
                />
                <label style={labelStyle}>{t("reservationForm.tc")}</label>
                <input
                  placeholder={t("reservationForm.tc")}
                  style={inputStyle}
                />
              </div>
            ))}
          </>
        )}
        <h3 style={sectionTitleStyle}>{t("reservationForm.faturaAdresi")}</h3>

        <label style={labelStyle}>{t("reservationForm.isim")}</label>
        <input
          name="contactName"
          value={formik.values.contactName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.contactName && formik.errors.contactName
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.contactName && formik.errors.contactName && (
          <div className="invalid-feedback">{formik.errors.contactName}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.adres")}</label>
        <input
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.address && formik.errors.address ? "is-invalid" : ""
          }
        />
        {formik.touched.address && formik.errors.address && (
          <div className="invalid-feedback">{formik.errors.address}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.sehir")}</label>
        <input
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.city && formik.errors.city ? "is-invalid" : ""
          }
        />
        {formik.touched.city && formik.errors.city && (
          <div className="invalid-feedback">{formik.errors.city}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.postaKodu")}</label>
        <input
          name="zipCode"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
        />
        {formik.touched.zipCode && formik.errors.zipCode && (
          <div className="invalid-feedback">{formik.errors.zipCode}</div>
        )}

        {/* Ekstralar */}
        {formik.values.villa && (
          <div style={{ marginTop: "20px" }}>
            <label>
              <input
                type="checkbox"
                name="wantsCrib"
                checked={formik.values.wantsCrib}
                onChange={formik.handleChange}
                style={{ marginRight: "8px" }}
              />
              {t("reservationForm.besik")}
            </label>
          </div>
        )}

        {(formik.values.villa === "Villa Capella" ||
          formik.values.villa === "Villa Rigel") && (
          <div style={{ marginTop: "20px" }}>
            <label>
              <input
                type="checkbox"
                name="heatedPool"
                checked={formik.values.heatedPool}
                onChange={formik.handleChange}
                style={{ marginRight: "8px" }}
              />
              {t("reservationForm.isitmaliHavuz")}
            </label>
          </div>
        )}
        {/* İptal & İade Şartları Linki */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        >
          <a
            href="/agreement"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              fontFamily: "'Poppins', sans-serif",
              color: "#C8A97E",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {t("reservationForm.sartlar")}
          </a>
        </div>

        {/* Submit Butonu */}
        <button
          type="submit"
          style={{
            backgroundColor: "#C8A97E",
            color: "white",
            border: "none",
            padding: "10px",
            width: "100%",
            marginTop: "25px",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {t("reservationForm.odemeButonu")}
        </button>
      </form>
    </div>
  );
}
