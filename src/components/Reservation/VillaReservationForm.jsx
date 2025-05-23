import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setReservationData } from "../../store/reservationSlice";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "next-i18next";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import enUS from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";

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

  const inputStyle = {
    width: "100%",
    padding: "6px",
    height: "34px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "10px",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "4px",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
  };

  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    margin: "20px 0 10px",
    fontFamily: "'Poppins', sans-serif",
    borderBottom: "1px solid #eee",
    paddingBottom: "5px",
  };

  const formik = useFormik({
    initialValues: {
      villa: "",
      hirerName: "",
      hirerIdNumber: "",
      email: "",
      phone: "",
      entryDate: null,
      exitDate: null,
      adults: "",
      children: "",
      heatedPool: false,
      wantsCrib: false,
      billingContactName: "",
      billingAddress: "",
      billingCity: "",
      billingCountry: "Turkey",
      billingZipCode: "",
      registrationAddress: "",
    },
    validationSchema: Yup.object({
      villa: Yup.string().required(t("reservationForm.validation.villa")),
      hirerName: Yup.string()
        .matches(
          /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/,
          t("reservationForm.validation.isim")
        )
        .required(t("reservationForm.validation.zorunluAlan")),
      hirerIdNumber: Yup.string()
        .test(
          "tcOrPassport-valid",
          t("reservationForm.validation.tc"),
          (value) => {
            if (!value) return false;
            const onlyNumbers = /^[0-9]+$/.test(value);
            if (onlyNumbers) {
              return value.length === 11;
            } else {
              return value.length >= 5;
            }
          }
        )
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
    }),
    onSubmit: (values) => {
      dispatch(
        setReservationData({
          ...values,
          entryDate: values.entryDate?.toISOString() || null,
          exitDate: values.exitDate?.toISOString() || null,
          totalVillaPrice: reservationPrices.totalVillaPrice,
          totalHeatedPoolPrice: reservationPrices.totalHeatedPoolPrice,
          grandTotal: reservationPrices.grandTotal,
          totalNights: reservationPrices.totalNights,
        })
      );
      router.push("/reservation-edit");
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
        <label style={labelStyle}>{t("reservationForm.isim")}</label>
        <input
          name="hirerName"
          value={formik.values.hirerName}
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(
              /[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g,
              ""
            );
            formik.setFieldValue("hirerName", onlyLetters);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.hirerName && formik.errors.hirerName
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.hirerName && formik.errors.hirerName && (
          <div className="invalid-feedback">{formik.errors.hirerName}</div>
        )}

        <label style={labelStyle}>{t("reservationForm.tc")}</label>
        <input
          name="hirerIdNumber"
          value={formik.values.hirerIdNumber}
          onChange={(e) => {
            const allowed = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
            formik.setFieldValue("hirerIdNumber", allowed);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.hirerIdNumber && formik.errors.hirerIdNumber
              ? "is-invalid"
              : ""
          }`}
        />
        {formik.touched.hirerIdNumber && formik.errors.hirerIdNumber && (
          <div className="invalid-feedback">{formik.errors.hirerIdNumber}</div>
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
          name="phone"
          value={formik.values.phone}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/[^0-9]/g, ""); // sadece 0-9 rakamları alır
            formik.setFieldValue("phone", onlyNums);
          }}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
          }`}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="invalid-feedback">{formik.errors.phone}</div>
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
        <h3 style={sectionTitleStyle}>Fatura Adresi</h3>
        <label style={labelStyle}>Ad</label>
        <input
          name="billingContactName"
          value={formik.values.billingContactName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.billingContactName &&
            formik.errors.billingContactName
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.billingContactName &&
          formik.errors.billingContactName && (
            <div className="invalid-feedback">
              {formik.errors.billingContactName}
            </div>
          )}
        <label style={labelStyle}>Soyad</label>
        <input
          name="billingContactName"
          value={formik.values.billingContactName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.billingContactName &&
            formik.errors.billingContactName
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.billingContactName &&
          formik.errors.billingContactName && (
            <div className="invalid-feedback">
              {formik.errors.billingContactName}
            </div>
          )}

        <label style={labelStyle}>Adres</label>
        <input
          name="billingAddress"
          value={formik.values.billingAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.billingAddress && formik.errors.billingAddress
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.billingAddress && formik.errors.billingAddress && (
          <div className="invalid-feedback">{formik.errors.billingAddress}</div>
        )}

        <label style={labelStyle}>Şehir</label>
        <input
          name="billingCity"
          value={formik.values.billingCity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
          className={
            formik.touched.billingCity && formik.errors.billingCity
              ? "is-invalid"
              : ""
          }
        />
        {formik.touched.billingCity && formik.errors.billingCity && (
          <div className="invalid-feedback">{formik.errors.billingCity}</div>
        )}

        <label style={labelStyle}>Posta Kodu</label>
        <input
          name="billingZipCode"
          value={formik.values.billingZipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={inputStyle}
        />
        <label style={labelStyle}>Kayıt Adresi</label>
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
