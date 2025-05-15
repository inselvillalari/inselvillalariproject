import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          {/* Preconnect & Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Teko:wght@300..700&family=Playfair+Display:wght@400..900&family=Cinzel:wght@400..900&family=Jost:wght@100..900&display=swap"
            rel="stylesheet"
          />

          {/* Meta bilgiler */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Sevgül Göksu Çelik, Tolga Kaya" />
          <meta
            name="keywords"
            content="inselvillalari, insel, ilba, ilkin berberoğlu, selçuk ince, ilkinberberoglu, selcukince, kalkan, kaş, kiralık villa, lüks villa, agena, capella, gredi, rigel"
          />
          <meta
            name="description"
            content="İnsel Villaları, Kalkan ve Kaş'ta özel havuzlu, deniz manzaralı lüks kiralık villalar sunar. Unutulmaz bir tatil deneyimi yaşayın."
          />

          {/* Open Graph */}
          <meta property="og:title" content="İnsel Villaları" />
          <meta
            property="og:description"
            content="Kalkan ve Kaş'ta deniz manzaralı, özel havuzlu lüks kiralık villalar. Tatil sizinle başlar."
          />
          <meta property="og:url" content="https://inselvillalari.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://inselvillalari.com/assets/img/slid/villasCoverImg/agena.jpeg"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="İnsel Villaları | Lüks Kiralık Villa"
          />
          <meta
            name="twitter:description"
            content="Kalkan'da özel havuzlu deniz manzaralı lüks tatil villaları."
          />
          <meta
            name="twitter:image"
            content="https://inselvillalari.com/assets/img/slid/villasCoverImg/agena.jpeg"
          />

          {/* Canonical & Favicon */}
          <link rel="canonical" href="https://inselvillalari.com" />
          <link rel="shortcut icon" href="/assets/img/favicon.png" />
        </Head>
        <body className="homepage">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
