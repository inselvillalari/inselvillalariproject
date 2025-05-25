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
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import withLoading from "../../common/withLoading";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import { getAdminReservationDetail } from "../../store/admin/thunk";
import { resetAdminReservationDetail } from "../../store/admin/reducer";

function AdminReservationDetailModal(props) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { adminReservationDetail } = useSelector((state) => state.admin);

  useEffect(() => {
    if (!props?.id) return;
    dispatch(getAdminReservationDetail(props?.id));
  }, [props?.id]);

  useEffect(() => {
    return () => dispatch(resetAdminReservationDetail());
  }, []);

  return (
    <Box mt={5}>
      <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
        <Modal open={props?.open} onClose={() => props?.onClose()}>
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
            {adminReservationDetail && (
              <>
                <Typography>
                  <strong>Ad Soyad:</strong> {adminReservationDetail?.name}{" "}
                  {adminReservationDetail?.surname}
                </Typography>
                <Typography>
                  <strong>Villa:</strong> {adminReservationDetail?.villa}
                </Typography>
                <Typography>
                  <strong>Giriş Tarihi:</strong>{" "}
                  {dayjs(adminReservationDetail?.entryDate).format(
                    "DD.MM.YYYY"
                  )}
                </Typography>
                <Typography>
                  <strong>Çıkış Tarihi:</strong>{" "}
                  {dayjs(adminReservationDetail?.exitDate).format("DD.MM.YYYY")}
                </Typography>
                <Typography>
                  <strong>Konaklama Süresi:</strong>{" "}
                  {adminReservationDetail?.totalNights}
                </Typography>
                <Typography>
                  <strong>Durum:</strong> {adminReservationDetail?.status}
                </Typography>
                <Typography>
                  <strong>İsim:</strong> {adminReservationDetail?.name}
                </Typography>
                <Typography>
                  <strong>Soyisim:</strong> {adminReservationDetail?.surname}
                </Typography>
                <Typography>
                  <strong>TC No/Pasaport No:</strong>{" "}
                  {adminReservationDetail?.identityNumber}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {adminReservationDetail?.email}
                </Typography>
                <Typography>
                  <strong>Telefon:</strong> {adminReservationDetail?.gsmNumber}
                </Typography>
                <Typography>
                  <strong>Rezerve Eden:</strong>{" "}
                  {adminReservationDetail?.reservationBy}
                </Typography>
                <Typography>
                  <strong>Ödenen Tutar:</strong> {adminReservationDetail?.price}{" "}
                  ₺
                </Typography>
                <Typography>
                  <strong>İade Tutarı:</strong>{" "}
                  {adminReservationDetail?.refundPrice} ₺
                </Typography>
                <Typography>
                  <strong>Toplam Tutar:</strong>{" "}
                  {adminReservationDetail?.grandTotal} ₺
                </Typography>
                <Typography>
                  <strong>Kayıt Adresi:</strong>{" "}
                  {adminReservationDetail?.registrationAddress}
                </Typography>
                <Typography>
                  <strong>Müşteri Şehir:</strong>{" "}
                  {adminReservationDetail?.buyerCity}
                </Typography>
                <Typography>
                  <strong>Müşteri Ülke:</strong>{" "}
                  {adminReservationDetail?.buyerCountry}
                </Typography>
                <Typography>
                  <strong>Isıtmalı Havuz:</strong>{" "}
                  {adminReservationDetail?.heatedPool}
                </Typography>
                <Typography>
                  <strong>Beşik:</strong> {adminReservationDetail?.wantsCrib}
                </Typography>
                <Typography>
                  <strong>Fatura Bilgisi:</strong>{" "}
                  {adminReservationDetail?.contactName}
                </Typography>
                <Typography>
                  <strong>Fatura Adresi:</strong>{" "}
                  {adminReservationDetail?.address}
                </Typography>
                <Button
                  sx={{ mt: 2 }}
                  onClick={() => props?.onClose()}
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

export default withLoading(AdminReservationDetailModal);
