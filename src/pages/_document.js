import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const GMT_ID = process.env.NEXT_PUBLIC_GMT_ID;

  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Indexation */}
        <meta
          name="google-site-verification"
          content="FlI4d3uzHTm3lN3opNuC0VzG3VJvTQ1rzfoE_oM_rXo"
        />
        {/* Google tag (gtag.js)  */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GMT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GMT_ID}');
        `}
        </Script>
        <Script strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3400590,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
        {/* Google tag (gtag.js) end */}
        {/* <Script
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
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
