"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(26,137,23)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "black",
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
