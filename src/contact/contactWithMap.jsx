import { useState, useRef } from "react";
import React from "react";
import appData from "./app.json";
import { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useTranslation } from "next-i18next";

const ContactWithMap = () => {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_r4h1kb4", "template_19ovror", form.current, {
        publicKey: "9ckWRHvavuIs1plCB",
      })
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Mailiniz başarıyla gönderildi!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          toast.error("Mailiniz gönderimi başarısız.");
        }
      );
  };
  return (
    <div className="container-fluid">
      <Toaster position="top-right" />
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form ref={form} id="contact-form" onSubmit={sendMail}>
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder={t("contact.form.isim")}
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder={t("contact.form.mesaj")}
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-curve btn-color"
                disabled={loading}
              >
                <span>{t("contact.form.gonder")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
