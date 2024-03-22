"use client";
import { Nunito } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(26,137,23)",
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
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
          // color: "grey",
          textTransform: "capitalize",
          // fontWeight: "700",
        },
      },
    },
  },
});

export default theme;
