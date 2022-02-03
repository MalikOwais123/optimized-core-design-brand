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
          <link lazyload rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            lazyload
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
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
