import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js)
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-703044095"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-703044095');`,
          }}
        ></Script> */}

        <Script
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-703044095/qrupCODhso4YEP-zns8C',
                'event_callback': callback
            });
            return false;
          }`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
