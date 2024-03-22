"use client";
import { createTheme } from "@mui/material/styles";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  palette: {
    primary: {
      main: "rgb(0,0,0)",
    },
    secondary: {
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
          borderRadius: "25px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {},
    },
  },
});

export default theme;
