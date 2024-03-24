import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

interface ToastProps {
  showToast: boolean;
  toggleToast: React.Dispatch<React.SetStateAction<boolean>>;
  toastType?: AlertColor;
  message: string;
}

const Toast: React.FC<ToastProps> = ({
  showToast,
  message,
  toggleToast,
  toastType,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showToast}
      onClose={() => toggleToast(false)}
      autoHideDuration={2000}
    >
      <Alert severity={toastType} variant="standard" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
