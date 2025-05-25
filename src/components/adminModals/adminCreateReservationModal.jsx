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
import { getAdminReservationDetail } from "../../store/admin/thunk";
import { resetAdminReservationDetail } from "../../store/admin/reducer";
import { getCalendarRanges } from "../../store/reservation/thunk";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];
const statusOptions = ["Pending", "Completed", "Failed", "Canceled"];

function AdminCreateReservationModal({ open, onClose, id }) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { adminReservationDetail } = useSelector((state) => state.admin);

  const formik = useFormik({
    initialValues: {
      name: "",
      villa: "",
      status: "",
      entryDate: null,
      exitDate: null,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      //   if (data?._id) {
      //     dispatch(updateReservation(data._id, values));
      //   } else {
      //     dispatch(createReservation(values));
      //   }
      //   onClose();
    },
  });

  useEffect(() => {
    if (id) dispatch(getAdminReservationDetail(id));
    return () => dispatch(resetAdminReservationDetail());
  }, [id]);

  useEffect(() => {
    if (adminReservationDetail && id) {
      formik.setValues({
        name: adminReservationDetail?.name || "",
        villa: adminReservationDetail?.villa || "",
        status: adminReservationDetail?.status || "",
        entryDate: dayjs(adminReservationDetail?.entryDate),
        exitDate: dayjs(adminReservationDetail?.exitDate),
      });
    }
  }, [adminReservationDetail]);

  useEffect(() => {
    if (formik?.values?.villa) {
      dispatch(getCalendarRanges(formik?.values?.villa));
    }
  }, [formik?.values?.villa]);

  return (
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item xs={6}>
              <DatePicker
                label="Giriş Tarihi"
                value={formik?.values?.entryDate}
                onChange={(value) => formik?.setFieldValue("entryDate", value)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Çıkış Tarihi"
                value={formik?.values?.exitDate}
                onChange={(value) => formik?.setFieldValue("exitDate", value)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </Grid>
          </LocalizationProvider>
        </Grid>

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 4 }}>
          {id ? "Güncelle" : "Oluştur"}
        </Button>
      </Box>
    </Modal>
  );
}

export default withLoading(AdminCreateReservationModal);
