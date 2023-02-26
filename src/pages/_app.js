import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics measurementId="G-DPBNLCDD0V" />
      <Component {...pageProps} />
    </>
  );
}
