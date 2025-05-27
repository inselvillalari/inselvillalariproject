import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";

const ToastErrors = (props) => {
  const { errors } = props;

  // Hataları bir liste halinde HTML etiketleri ile birleştir
  const errorMessages = errors.map((error, index) => (
    <>
      <Typography key={index} gutterBottom>
        {error.field}: {error.message}
      </Typography>
    </>
  ));

  // Tek bir toast.error ile tüm hataları alt alta göster
  toast.error(
    <div style={{ whiteSpace: "pre-line" }}>{errorMessages}</div>,
    {}
  );
};

const errorHandler = (error, open) => {
  console.log("errorHandler", error);
  let status = error?.response?.status ?? 0;
  console.log("Error: ", error);
  const errors = error?.response?.data?.errors || [];
  const errorMessage =
    error?.response?.data?.message || error?.response?.data || "";

  if (status >= 400) {
    switch (status) {
      case 401:
        toast.error("401 - Unauthorized: Access Denied", {
          autoClose: 3000,
        });
        break;
      case 403:
        toast.error("403 - Forbidden: You don't have permission", {
          autoClose: 3000,
        });
        break;
      case 404:
        if (errorMessage) {
          toast.error(errorMessage, {
            autoClose: 3000,
          });
          return;
        }
        toast.error("404 - Not Found: The resource is missing", {
          autoClose: 3000,
        });
        break;
      default:
        if (errors && errors.length > 0) {
          // Eğer birden fazla hata varsa, ToastErrors bileşenini kullanarak bunları göster
          ToastErrors({ errors });
        } else {
          toast.error(errorMessage, {
            autoClose: 3000,
          });
        }
        break;
    }
  }

  throw error; // Error'ı tekrar fırlat, böylece async thunk veya promise chain'de yakalanabilir
};

export default errorHandler;
