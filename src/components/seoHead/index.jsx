// components/SeoHead.jsx
import Head from "next/head";

const SeoHead = ({
  title = "İnsel Villaları",
  description = "İnsel Villaları, Kalkan ve Kaş'ta özel havuzlu, deniz manzaralı lüks kiralık villalar sunar. Unutulmaz bir tatil deneyimi yaşayın.",
  keywords = "inselvillalari, insel, ilba, ilkin berberoglu, selcuk ince, ilkinberberoglu, selcukince, kalkan, kaş, kiralık villa, lüks villa",
  url = "https://inselvillalari.com",
  image = "https://inselvillalari.com/assets/img/slid/villasCoverImg/agena.jpeg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sevgül Göksu Çelik, Tolga Kaya" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SeoHead;
