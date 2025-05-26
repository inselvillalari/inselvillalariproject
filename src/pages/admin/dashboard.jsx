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
import { getReservationByFilter } from "../../store/admin/thunk";
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
import AdminRefundReservationModal from "../../components/adminModals/adminRefundReservationModal";
import PageLoadingForRequest from "../../components/pageloadingForRequest";

const villas = ["Villa Agena", "Villa Capella", "Villa Gredi", "Villa Rigel"];
const reservationByOptions = ["Admin", "Customer", "Outsource"];

const columns = [
  { id: "", label: "Actions" },
  { id: "reservationNumber", label: "Rez. No" },
  { id: "reservationBy", label: "Rezerve Eden" },
  { id: "name", label: "İsim" },
  { id: "surname", label: "Soyisim" },
  { id: "villa", label: "Villa" },
  { id: "entryDate", label: "Giriş" },
  { id: "exitDate", label: "Çıkış" },
  { id: "status", label: "Durum" },
  { id: "grandTotal", label: "Toplam Tutar" },
  { id: "price", label: "Ödenen Tutar" },
  { id: "refundPrice", label: "İptal Tutarı" },
  { id: "fromIyzico", label: "Oluşturulma Yeri" },
];

function AdminDashboardPage() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  const { loading, filteredReservations } = useSelector((state) => state.admin);

  const [detailModalIsOpen, setDetailModalIsOpen] = useState({
    id: "",
    open: false,
  });

  const [createModalIsOpen, setCreateModalIsOpen] = useState({
    id: "",
    open: false,
  });

  const [refundModalIsOpen, setRefundModalIsOpen] = useState({
    id: "",
    open: false,
  });

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
      {loading && <PageLoadingForRequest />}
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
                <Grid item xs={12} sm={6} md={3} style={{ minWidth: 150 }}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel id="reservationBy-label">
                      Rezerve Eden
                    </InputLabel>
                    <Select
                      labelId="reservationBy-label"
                      id="reservationBy"
                      name="reservationBy"
                      value={formik?.values?.reservationBy}
                      onChange={formik?.handleChange}
                      label="Rezerve Eden"
                    >
                      <MenuItem value="">Tümü</MenuItem>
                      {reservationByOptions?.map((reservationBy) => (
                        <MenuItem key={reservationBy} value={reservationBy}>
                          {reservationBy}
                        </MenuItem>
                      ))}
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

          <div className="d-flex justify-content-end mb-4">
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                setCreateModalIsOpen({
                  id: null,
                  open: true,
                })
              }
            >
              Yeni oluştur
            </Button>
          </div>

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
                        {row?.fromIyzico && (
                          <IconButton
                            color="error"
                            onClick={() =>
                              setRefundModalIsOpen({
                                id: row?.conversationId,
                                open: true,
                              })
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </div>
                    </TableCell>
                    {columns?.slice(1).map((col) => {
                      const value = row[col?.id];
                      const isDateField =
                        col?.id === "entryDate" || col?.id === "exitDate";
                      return (
                        <TableCell key={col?.id}>
                          {isDateField && value
                            ? dayjs(value).format("DD/MM/YYYY")
                            : value}
                          {col?.id === "fromIyzico" &&
                            (value ? "Iyzico" : "Admin Panel")}
                        </TableCell>
                      );
                    })}
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
          <AdminRefundReservationModal
            id={refundModalIsOpen?.id}
            open={refundModalIsOpen?.open}
            onClose={() => {
              setRefundModalIsOpen({
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
