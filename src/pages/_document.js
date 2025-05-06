import Document, { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          {/* Temel Meta */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Sevgül Göksu Çelik, Tolga Kaya" />

          {/* SEO Anahtar Kelimeler */}
          <meta
            name="keywords"
            content="inselvillalari, insel, ilba, ilkin berberoğlu, selçuk ince, ilkinberberoglu, selcukince, kalkan, kaş, kiralık villa, lüks villa"
          />

          {/* Açıklama */}
          <meta
            name="description"
            content="İnsel Villaları, Kalkan ve Kaş'ta özel havuzlu, deniz manzaralı lüks kiralık villalar sunar. Unutulmaz bir tatil deneyimi yaşayın."
          />

          {/* Sosyal Medya - Open Graph */}
          <meta
            property="og:title"
            content="İnsel Villaları | Kalkan Kiralık Villa"
          />
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

          {/* Twitter Card (gerekirse) */}
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

          {/* Canonical */}
          <link rel="canonical" href="https://inselvillalari.com" />

          {/* Favicon */}
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />

          {/*<!-- 1. Preconnect -->*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Fontlar */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <SpeedInsights />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
