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
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { getAllReservations } from "../../store/reservation/thunk";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const columns = [
  { id: "reservationNumber", label: "Rez. No" },
  { id: "name", label: "Ad Soyad" },
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

  const { allReservations } = useSelector((state) => state.reservation);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
    dispatch(getAllReservations());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const reservations = allReservations || [];

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

        <Toolbar
          sx={{
            mb: 2,
            p: 2,
            borderRadius: 2,
            bgcolor: "#f9f9f9",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                label="Ad Soyad"
                variant="outlined"
                size="small"
                // value={} onChange={}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                label="Rezervasyon No"
                variant="outlined"
                size="small"
                // value={} onChange={}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                label="Telefon"
                variant="outlined"
                size="small"
                // value={} onChange={}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                // value={} onChange={}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Tarih (örn: 2025-07)"
                variant="outlined"
                size="small"
                // value={} onChange={}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                fullWidth
                label="Durum"
                variant="outlined"
                size="small"
                defaultValue=""
                // value={} onChange={}
              >
                <MenuItem value="">Hepsi</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Confirmed">Confirmed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Toolbar>

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
