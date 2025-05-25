import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useFormik } from "formik";
import withLoading from "../../common/withLoading";
import { refundReservation } from "../../store/admin/thunk";
import "dayjs/locale/tr";
import PageLoadingForRequest from "../pageloadingForRequest";
import * as Yup from "yup";

function AdminRefundReservationModal({ open, onClose, id }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.admin);

  const formik = useFormik({
    initialValues: {
      conversationId: id,
      refundAmount: null,
      isPartialRefund: false,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      isPartialRefund: Yup.boolean(),
      refundAmount: Yup.number()
        .nullable()
        .when("isPartialRefund", {
          is: true,
          then: (schema) => schema.required("İade tutarı zorunludur"),
          otherwise: (schema) => schema.nullable(),
        }),
    }),
    onSubmit: (values) => {
      const proceed = window.confirm(
        "İade işlemini gerçekleştirmek istediğinize emin misiniz?"
      );
      if (!proceed) return;

      const dataToSend = values.isPartialRefund
        ? values
        : { conversationId: values?.conversationId };

        console.log('dataToSend',dataToSend)

      dispatch(refundReservation(dataToSend)).then((res) => {
        if (res?.meta?.requestStatus == "fulfilled") {
          onClose();
        }
      });
    },
  });

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
            {"Rezervasyonu İptali"}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isPartialRefund"
                    checked={formik.values.isPartialRefund}
                    onChange={formik.handleChange}
                  />
                }
                label="Kısmi ödeme"
              />
            </Grid>
            {formik?.values?.isPartialRefund && (
              <Grid item xs={12}>
                <TextField
                  label="Ödeme tutarı"
                  type="number"
                  name="refundAmount"
                  fullWidth
                  size="small"
                  value={formik?.values?.refundAmount}
                  onChange={formik?.handleChange}
                  className={`form-control ${
                    formik?.touched?.refundAmount &&
                    formik?.errors?.refundAmount
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik?.touched?.refundAmount &&
                  formik?.errors?.refundAmount && (
                    <div className="invalid-feedback">
                      {formik?.errors?.refundAmount}
                    </div>
                  )}
              </Grid>
            )}
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 4 }}>
            Devam Et
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default withLoading(AdminRefundReservationModal);
