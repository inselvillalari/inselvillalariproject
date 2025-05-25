import { useSelector } from "react-redux";
import { use, useEffect, useState } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { getReservationByFilter } from "../../store/reservation/thunk";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import { useFormik } from "formik";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];

const columns = [
  { id: "reservationNumber", label: "Rez. No" },
  { id: "name", label: "İsim" },
  { id: "surname", label: "Soyisim" },
  { id: "villa", label: "Villa" },
  { id: "entryDate", label: "Giriş" },
  { id: "exitDate", label: "Çıkış" },
  { id: "status", label: "Durum" },
];

function AdminDashboardPage() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const { filteredReservations } = useSelector((state) => state.reservation);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
    dispatch(getReservationByFilter({}));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const reservations = filteredReservations || [];

  const formik = useFormik({
    initialValues: {
      villa: "",
      name: "",
      surname: "",
      reservationNumber: "",
      identityNumber: "",
      email: "",
      gsmNumber: "",
      status: "",
    },
    // validationSchema: getFormValidationSchema(t),
    onSubmit: async (values) => {
      const filteredValues = Object.entries(values).reduce(
        (acc, [key, value]) => {
          if (value !== "" && value !== null && value !== undefined) {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );

      dispatch(getReservationByFilter(filteredValues));
    },
  });

  return (
    <Box mt={5}>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button
            variant="outlined"
            color="error"
            endIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Çıkış Yap
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Tüm Rezervasyonlar
        </Typography>

        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          style={{ marginBottom: "50px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                autoComplete="off"
                size="small"
                id="reservationNumber"
                name="reservationNumber"
                label="Rezervasyon no"
                value={formik?.values?.reservationNumber}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                autoComplete="off"
                size="small"
                id="name"
                name="name"
                label="İsim"
                value={formik?.values?.name}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                size="small"
                autoComplete="off"
                id="surname"
                name="surname"
                label="Soy isim"
                value={formik?.values?.surname}
                onChange={formik?.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel id="villa-label">Villa</InputLabel>
                <Select
                  labelId="villa-label"
                  id="villa"
                  name="villa"
                  value={formik.values.villa}
                  onChange={formik.handleChange}
                  label="Villa"
                >
                  <MenuItem value="">Tümü</MenuItem>
                  {villas.map((villa) => (
                    <MenuItem key={villa} value={villa}>
                      {villa}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel id="villa-label">Statu</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  label="Status"
                >
                  <MenuItem value="">Tümü</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Failed">Failed</MenuItem>
                  <MenuItem value="Canceled">Canceled</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6} md={2} gap={5}>
              <Button variant="contained" type="submit" color="primary">
                Ara
              </Button>
            </Grid>
          </Grid>
        </form>

        <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.id}>{col.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelected(row)}
                >
                  {columns.map((col) => (
                    <TableCell key={col.id}>{row[col.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={!!selected} onClose={() => setSelected(null)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              width: 500,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Rezervasyon Detayı
            </Typography>
            {selected && (
              <>
                <Typography>
                  <strong>Ad Soyad:</strong> {selected.name} {selected.surname}
                </Typography>
                <Typography>
                  <strong>Villa:</strong> {selected.villa}
                </Typography>
                <Typography>
                  <strong>Giriş:</strong> {selected.entryDate}
                </Typography>
                <Typography>
                  <strong>Çıkış:</strong> {selected.exitDate}
                </Typography>
                <Typography>
                  <strong>Durum:</strong> {selected.status}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {selected.email}
                </Typography>
                <Typography>
                  <strong>Telefon:</strong> {selected.phone}
                </Typography>
                <Typography>
                  <strong>Toplam Fiyat:</strong> {selected.totalPrice} ₺
                </Typography>
                <Button
                  sx={{ mt: 2 }}
                  onClick={() => setSelected(null)}
                  variant="contained"
                  fullWidth
                >
                  Kapat
                </Button>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(AdminDashboardPage);
