import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setReservationData } from "../../store/reservationSlice";
import "react-datepicker/dist/react-datepicker.css";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];

export default function ReservationForm() {
  const [extraAdults, setExtraAdults] = useState([]);
  const [extraChildren, setExtraChildren] = useState([]);
  const [guestError, setGuestError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const reservationPrices = useSelector((state) => state.reservation);

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
    },
    validationSchema: Yup.object({
      villa: Yup.string().required("Lütfen bir villa seçiniz."),
      hirerName: Yup.string()
        .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, "Sadece harf giriniz.")
        .required("Bu alan zorunludur."),
      hirerIdNumber: Yup.string()
        .test(
          "tcOrPassport-valid",
          "Geçerli bir TC Kimlik veya Pasaport numarası giriniz.",
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
        .required("Bu alan zorunludur."),
      email: Yup.string()
        .email("Geçerli bir e-posta giriniz.")
        .required("Bu alan zorunludur."),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Sadece rakam giriniz.")
        .min(10, "Telefon numarası en az 10 haneli olmalıdır.")
        .required("Bu alan zorunludur."),
      entryDate: Yup.date().required("Giriş tarihi zorunludur."),
      exitDate: Yup.date().required("Çıkış tarihi zorunludur."),
      adults: Yup.number().required("Yetişkin sayısı zorunludur."),
      children: Yup.number().required("Çocuk sayısı zorunludur."),
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
      setGuestError("Yetişkin ve çocuk sayısı seçilmelidir.");
      setExtraAdults([]);
      setExtraChildren([]);
      return;
    }

    const total = adults + children;
    if (total > 10) {
      setGuestError("Toplam kişi sayısı 10'dan fazla olamaz.");
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
        İnsel Villaları Rezervasyon Formu
      </h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Villa Seçimi */}
        <h3 style={sectionTitleStyle}>Villa Seçimi</h3>
        <label style={labelStyle}>Villa</label>
        <select
          name="villa"
          value={formik.values.villa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`form-control ${
            formik.touched.villa && formik.errors.villa ? "is-invalid" : ""
          }`}
        >
          <option value="">Villa Seçin</option>
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
        <h3 style={sectionTitleStyle}>Kiralayan Bilgileri</h3>
        <label style={labelStyle}>İsim Soyisim</label>
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

        <label style={labelStyle}>TC Kimlik veya Pasaport No</label>
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

        <label style={labelStyle}>Email</label>
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

        <label style={labelStyle}>Telefon</label>
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
        <h3 style={sectionTitleStyle}>Tarih Bilgileri</h3>
        <label
          style={{ ...labelStyle, marginTop: "10px", marginRight: "20px" }}
        >
          Giriş Tarihi
        </label>
        <DatePicker
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
          placeholderText="Giriş tarihi seçin"
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
          Çıkış Tarihi
        </label>
        <DatePicker
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
          placeholderText="Çıkış tarihi seçin"
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
        <h3 style={sectionTitleStyle}>Kişi Sayısı Bilgileri</h3>
        <label style={labelStyle}>Yetişkin Sayısı</label>
        <select
          name="adults"
          value={formik.values.adults}
          onChange={formik.handleChange}
          style={inputStyle}
        >
          <option value="">Seçin</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {formik.touched.adults && formik.errors.adults && (
          <div className="invalid-feedback">{formik.errors.adults}</div>
        )}
        <label style={labelStyle}>Çocuk Sayısı</label>
        <select
          name="children"
          value={formik.values.children}
          onChange={formik.handleChange}
          style={inputStyle}
        >
          <option value="">Seçin</option>
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
              Ekstra Konaklayacak Yetişkin Bilgileri
            </h3>
            {extraAdults.map((_, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>
                  {index + 1}. Yetişkin İsim Soyisim
                </label>
                <input placeholder="İsim Soyisim" style={inputStyle} />
                <label style={labelStyle}>TC Kimlik veya Pasaport No</label>
                <input
                  placeholder="TC Kimlik veya Pasaport No"
                  style={inputStyle}
                />
              </div>
            ))}
          </>
        )}

        {extraChildren.length > 0 && (
          <>
            <h3 style={sectionTitleStyle}>Çocuk Bilgileri</h3>
            {extraChildren.map((_, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>
                  {index + 1}. Çocuk İsim Soyisim
                </label>
                <input placeholder="İsim Soyisim" style={inputStyle} />
                <label style={labelStyle}>TC Kimlik veya Pasaport No</label>
                <input
                  placeholder="TC Kimlik veya Pasaport No"
                  style={inputStyle}
                />
              </div>
            ))}
          </>
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
              Beşik İstiyorum
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
              Isıtmalı Havuz İstiyorum (Günlük 1800 TL)
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
            href="/mesafeliKiralamaSozlesmesi"
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
            İptal & İade Şartları
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
          Ödeme Adımına Geç
        </button>
      </form>
    </div>
  );
}
