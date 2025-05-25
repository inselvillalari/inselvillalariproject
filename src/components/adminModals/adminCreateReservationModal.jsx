import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import dayjs from "dayjs";
import withLoading from "../../common/withLoading";
import { useTranslation } from "next-i18next";
import {
  getAdminReservationDetail,
  updateReservation,
  createReservation,
} from "../../store/admin/thunk";
import { resetAdminReservationDetail } from "../../store/admin/reducer";
import { getCalendarRanges } from "../../store/reservation/thunk";
import "dayjs/locale/tr";
import PageLoadingForRequest from "../pageloadingForRequest";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];
const statusOptions = ["Pending", "Completed", "Failed", "Canceled"];
const reservationByOptions = ["Admin", "Customer", "Outsource"];

function AdminCreateReservationModal({ open, onClose, id }) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { adminReservationDetail, loading } = useSelector(
    (state) => state.admin
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      villa: "",
      status: "",
      gsmNumber: "",
      email: "",
      identityNumber: "",
      reservationBy: "",
      entryDate: null,
      exitDate: null,
      grandTotal: "",
      price: "",
      id: id ?? "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (id) {
        dispatch(
          updateReservation({
            ...values,
            entryDate: dayjs(values?.entryDate)?.endOf("day")?.toISOString(),
            exitDate: dayjs(values?.exitDate)?.endOf("day")?.toISOString(),
          })
        ).then((res) => {
          if (res?.meta?.requestStatus == "fulfilled") {
            onClose();
          }
        });
      } else {
        dispatch(
          createReservation({
            ...values,
            entryDate: dayjs(values?.entryDate)?.endOf("day")?.toISOString(),
            exitDate: dayjs(values?.exitDate)?.endOf("day")?.toISOString(),
          })
        ).then((res) => {
          if (res?.meta?.requestStatus == "fulfilled") {
            onClose();
          }
        });
      }
    },
  });

  useEffect(() => {
    if (id) dispatch(getAdminReservationDetail(id));
    return () => dispatch(resetAdminReservationDetail());
  }, [id]);

  useEffect(() => {
    if (adminReservationDetail) {
      formik.setValues({
        ...adminReservationDetail,
        entryDate: dayjs(adminReservationDetail.entryDate),
        exitDate: dayjs(adminReservationDetail.exitDate),
      });
    }
  }, [adminReservationDetail]);

  useEffect(() => {
    if (formik?.values?.villa) {
      dispatch(getCalendarRanges(formik?.values?.villa));
    }
  }, [formik?.values?.villa]);

  return (
    <>
      {loading && <PageLoadingForRequest />}
      <Modal open={open} onClose={onClose}>
        <Box
          component="form"
          onSubmit={formik?.handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            width: 600,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={3}>
            {id ? "Rezervasyonu Güncelle" : "Yeni Rezervasyon Oluştur"}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="İsim"
                name="name"
                fullWidth
                size="small"
                value={formik?.values?.name}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Soyisim"
                name="surname"
                fullWidth
                size="small"
                value={formik?.values?.surname}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Telefon"
                name="gsmNumber"
                fullWidth
                size="small"
                value={formik?.values?.gsmNumber}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                size="small"
                value={formik?.values?.email}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="TC No"
                name="identityNumber"
                fullWidth
                size="small"
                value={formik?.values?.identityNumber}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Toplam Tutar"
                name="grandTotal"
                fullWidth
                size="small"
                value={formik?.values?.grandTotal}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ödenen Tutar"
                name="price"
                fullWidth
                size="small"
                value={formik?.values?.price}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Villa</InputLabel>
                <Select
                  name="villa"
                  value={formik?.values?.villa}
                  onChange={formik?.handleChange}
                  label="Villa"
                >
                  {villas?.map((villa) => (
                    <MenuItem key={villa} value={villa}>
                      {villa}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Rezerve Eden</InputLabel>
                <Select
                  name="reservationBy"
                  value={formik?.values?.reservationBy}
                  onChange={formik?.handleChange}
                  label="Rezerve Eden"
                >
                  {reservationByOptions?.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel>Durum</InputLabel>
                <Select
                  name="status"
                  value={formik?.values?.status}
                  onChange={formik?.handleChange}
                  label="Durum"
                >
                  {statusOptions?.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
              <Grid item xs={6}>
                <DatePicker
                  label="Giriş Tarihi"
                  value={formik?.values?.entryDate}
                  onChange={(value) =>
                    formik?.setFieldValue("entryDate", value)
                  }
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                  format="DD.MM.YYYY"
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  label="Çıkış Tarihi"
                  value={formik?.values?.exitDate}
                  onChange={(value) => formik?.setFieldValue("exitDate", value)}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                  format="DD.MM.YYYY"
                />
              </Grid>
            </LocalizationProvider>
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 4 }}>
            {id ? "Güncelle" : "Oluştur"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default withLoading(AdminCreateReservationModal);
