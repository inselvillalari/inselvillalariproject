import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const PrivacyPolicy = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div
        style={{
          padding: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        <Head>
          <title>Gizlilik Politikası | IN-SEL Villaları</title>
        </Head>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
          <h1>Gizlilik Politikası</h1>
          <p>
            Bu gizlilik politikası, IN-SEL Villaları'nın
            <strong> www.inselvillalari.com </strong> adresli internet sitesini
            kullanan ziyaretçilerin bilgilerinin gizliliğini korumak amacıyla
            hazırlanmıştır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (“KVKK”) hükümleri uyarınca kişisel verilerin işlenmesine
            ilişkindir.
          </p>

          <h2>Hangi Verileri Topluyoruz?</h2>
          <p>
            Web sitemiz üzerinden yapılan rezervasyon ve iletişim işlemlerinde
            aşağıdaki kişisel veriler toplanabilir:
          </p>
          <ul>
            <li>Ad, Soyad</li>
            <li>Telefon numarası</li>
            <li>E-posta adresi</li>
            <li>TC Kimlik veya Pasaport numarası</li>
            <li>IP adresi</li>
          </ul>

          <h2>Veriler Ne Amaçla Kullanılır?</h2>
          <p>Toplanan veriler aşağıdaki amaçlarla kullanılır:</p>
          <ul>
            <li>Rezervasyon işlemlerinin gerçekleştirilmesi</li>
            <li>Size özel teklif ve bilgilendirmelerin iletilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2>Verileriniz Üçüncü Kişilerle Paylaşılır mı?</h2>
          <p>
            Kişisel verileriniz, yalnızca yasal zorunluluklar veya hizmet
            sağlayıcılarımız (örneğin; ödeme altyapısı, e-posta servisleri) ile
            paylaşılabilir. Verileriniz hiçbir şekilde üçüncü kişilere pazarlama
            amacıyla satılmaz veya devredilmez.
          </p>

          <h2>Çerez (Cookie) Kullanımı</h2>
          <p>
            Web sitemizde kullanıcı deneyimini artırmak için çerezler
            kullanılmaktadır. Çerezleri tarayıcı ayarlarınızdan devre dışı
            bırakabilirsiniz.
          </p>

          <h2>Kişisel Veri Sahibi Olarak Haklarınız</h2>
          <p>
            KVKK’nın 11. maddesi gereğince, kişisel veri sahipleri olarak
            aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Hangi verilerinizin işlendiğini öğrenme</li>
            <li>Verilerinizin düzeltilmesini talep etme</li>
            <li>Silinmesini veya anonim hale getirilmesini isteme</li>
            <li>İşleme itiraz etme</li>
          </ul>

          <h2>Veri Güvenliği</h2>
          <p>
            Verileriniz, güvenli sunucularda saklanmakta olup, teknik ve idari
            önlemlerle yetkisiz erişimlere karşı korunmaktadır.
          </p>

          <h2>İletişim</h2>
          <p>
            Kişisel verileriniz ile ilgili her türlü talep için bize{" "}
            <strong>info@inselvillalari.com</strong> adresinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default withLoading(PrivacyPolicy);
