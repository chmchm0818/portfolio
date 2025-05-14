import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Google Fonts
import { Open_Sans } from "next/font/google";
import { Zen_Maru_Gothic } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007FFF",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "var(--background)",
      paper: "var(--background)",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans), Arial, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} ${zenMaru.variable}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
