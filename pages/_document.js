import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>The Core Designs</title>

          <link lazyload rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            lazyload
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          />
          <link
            lazyload
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
          {/* <script
            defer
            src="https://www.googletagmanager.com/gtag/js?id=AW-10795784072"
          ></script> */}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N947HDH');
`,
            }}
          />
        </Head>
        <body>
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T7NLVX6"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript> */}
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
