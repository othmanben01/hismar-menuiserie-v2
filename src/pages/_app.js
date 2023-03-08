import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics measurementId="G-DPBNLCDD0V" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
