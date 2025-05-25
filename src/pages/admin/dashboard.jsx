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
import AdminReservationDetailModal from "../../components/adminModals/adminReservationDetailModal";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AdminCreateReservationModal from "../../components/adminModals/adminCreateReservationModal";
import { ToastContainer } from "react-toastify";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];

const columns = [
  { id: "", label: "Actions" },
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

  const [detailModalIsOpen, setDetailModalIsOpen] = useState({
    id: "",
    open: false,
  });

  const [createModalIsOpen, setCreateModalIsOpen] = useState({
    id: "",
    open: false,
  });

  const { filteredReservations } = useSelector((state) => state.reservation);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
    dispatch(getReservationByFilter({}));
  }, []);

  const handleLogout = () => {
    localStorage?.removeItem("adminToken");
    router?.push("/admin/login");
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
      const filteredValues = Object?.entries(values).reduce(
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
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
        <Container sx={{ mt: 12, mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Tüm Rezervasyonlar
          </Typography>

          <Box component={Paper} my={3} p={1}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e?.preventDefault();
                formik?.handleSubmit();
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
                <Grid item xs={12} sm={6} md={3} style={{ minWidth: 150 }}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel id="villa-label">Villa</InputLabel>
                    <Select
                      labelId="villa-label"
                      id="villa"
                      name="villa"
                      value={formik?.values?.villa}
                      onChange={formik?.handleChange}
                      label="Villa"
                    >
                      <MenuItem value="">Tümü</MenuItem>
                      {villas?.map((villa) => (
                        <MenuItem key={villa} value={villa}>
                          {villa}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ minWidth: 150 }}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel id="villa-label">Statu</InputLabel>
                    <Select
                      labelId="status"
                      id="status"
                      name="status"
                      value={formik?.values?.status}
                      onChange={formik?.handleChange}
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
          </Box>

          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns?.map((col) => (
                    <TableCell key={col?.id}>{col?.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations?.map((row) => (
                  <TableRow key={row?.id} hover>
                    <TableCell>
                      <div className="d-flex w-100">
                        <IconButton
                          color="primary"
                          onClick={() =>
                            setDetailModalIsOpen({
                              id: row?.reservationNumber,
                              open: true,
                            })
                          }
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          color="warning"
                          onClick={() =>
                            setCreateModalIsOpen({
                              id: row?.reservationNumber,
                              open: true,
                            })
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => alert("Sil: " + row?.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                    {columns.slice(1).map((col) => (
                      <TableCell key={col.id}>{row[col.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <AdminReservationDetailModal
            id={detailModalIsOpen?.id}
            open={detailModalIsOpen?.open}
            onClose={() => {
              setDetailModalIsOpen({
                id: "",
                open: false,
              });
            }}
          />
          <AdminCreateReservationModal
            id={createModalIsOpen?.id}
            open={createModalIsOpen?.open}
            onClose={() => {
              setCreateModalIsOpen({
                id: "",
                open: false,
              });
            }}
          />
        </Container>
      </Box>
    </>
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
