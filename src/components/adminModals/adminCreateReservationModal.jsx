import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  TextField,
  MenuItem,
  Grid,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";
import withLoading from "../../common/withLoading";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { getAdminReservationDetail } from "../../store/admin/thunk";
import { resetAdminReservationDetail } from "../../store/admin/reducer";
import { getCalendarRanges } from "../../store/reservation/thunk";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];
const statusOptions = ["Pending", "Completed", "Failed", "Canceled"];

function AdminCreateReservationModal({ open, onClose, id }) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const { adminReservationDetail } = useSelector((state) => state.admin);

  const formik = useFormik({
    initialValues: {
      villa: "",
      entryDate: "",
      exitDate: "",
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

  const handleRangeChange = (ranges) => {
    const { startDate, endDate } = ranges?.selection;
    formik.setFieldValue("entryDate", startDate);
    formik.setFieldValue("exitDate", endDate);
  };

  useEffect(() => {
    if (!id) return;
    dispatch(getAdminReservationDetail(id));
  }, [id]);

  useEffect(() => {
    formik.setValues(adminReservationDetail);
  }, [adminReservationDetail]);

  useEffect(() => {
    return () => dispatch(resetAdminReservationDetail());
  }, []);

  useEffect(() => {
    if (formik?.values?.villa) {
      dispatch(getCalendarRanges(formik.values?.villa));
    }
  }, [formik?.values?.villa]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          width: 600,
          borderRadius: 2,
          bomdhadow: 24,
        }}
      >
        <Typography variant="h6" gutterBottom mb={4}>
          {id ? "Rezervasyonu Güncelle" : "Yeni Rezervasyon Oluştur"}
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="İsim"
              name="name"
              value={formik?.values?.name}
              onChange={formik.handleChange}
              size="small"
              inputProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={12} style={{ minWidth: 150 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Villa</InputLabel>
              <Select
                name="villa"
                value={formik?.values?.villa}
                onChange={formik.handleChange}
                label="Villa"
              >
                {villas.map((villa) => (
                  <MenuItem key={villa} value={villa}>
                    {villa}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} style={{ minWidth: 150 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Durum</InputLabel>
              <Select
                name="status"
                value={formik?.values?.status}
                onChange={formik.handleChange}
                label="Durum"
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          {id ? "Güncelle" : "Oluştur"}
        </Button>
      </Box>
    </Modal>
  );
}

export default withLoading(AdminCreateReservationModal);
