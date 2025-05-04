import React from "react";
import LightLayout from "../layout/LightLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const Agreement = () => {
  return (
    <LightLayout>
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
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "26px",
              fontWeight: "700",
            }}
          >
            Villa Kiralama Sözleşmesi
          </h1>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            1. TANIMLAR VE SÖZLEŞME KONUSU
          </h2>

          <p>
            İşbu sözleşme kapsamında kullanılacak olan kavramlar ve ifadeler ile
            kısaltmalar, herhangi bir tereddüte mahal verilmemesi açısından
            aşağıda somutlaştırılmıştır.
          </p>

          <p>Bu doğrultuda;</p>

          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>
              <strong>Sözleşme:</strong> İşbu internet ortamından onaylanan ve
              yazılı bir sözleşmenin varlığı halinde sona eren kiralama
              sözleşmesini,
            </li>
            <li>
              <strong>Kiracı:</strong> Sözleşme kapsamında ilgili tatil konutunu
              kira süresi boyunca kiralayan gerçek ya da tüzel kişiyi ile tüzel
              kişi niteliğindeki kamu kurum ve kuruluşları, dernekler ile
              vakıfları,
            </li>
            <li>
              <strong>Kiralayan:</strong> Teslimi sağlanacak olan tatil konutunu
              kiralayan İn-sel İnşaat Mimarlık Turizm Nakliyat Ticaret Limited
              Şirketi’ni,
            </li>
            <li>
              <strong>Tatil Konutu:</strong>{" "}
              <a
                href="https://inselvillalari.com"
                target="_blank"
                style={{ color: "#C8A97E", textDecoration: "underline" }}
              >
                inselvillalari.com
              </a>{" "}
              URL adresli internet sitesi üzerinden kiralamaya hazır hale
              getirilen villa ya da apartman dairelerini,
            </li>
            <li>
              <strong>Kira Süresi:</strong> İnternet sitesi üzerinden kiracı
              tarafından seçilen ve kiralayan tarafından onaylanan kira
              süresini,
            </li>
            <li>
              <strong>Kira Bedeli:</strong> Site üzerinden her tatil konutuna
              ayrı olmak üzere hazırlanmış ilgili süreye göre belirlenen kira
              bedelini,
            </li>
            <li>
              <strong>TBK:</strong> 6098 sayılı Türk Borçlar Kanunu’nu,
            </li>
            <li>
              <strong>KVKK:</strong> 6698 sayılı Kişisel Verilerin Korunması
              Hakkında Kanun’u ifade eder.
            </li>
          </ul>

          <p>
            Bu kapsamda; kiralayan tarafından tatil konutları inselvillalari.com
            URL adresli internet sitesinde sergilenmektedir. Kiracı tarafından
            ilgili tatil konutunun uygun olduğu tarihler seçilerek aşağıda yer
            alan hükümler doğrultusunda kapora bedelleri yatırılmak suretiyle
            işbu kiralama sözleşmesi kurulmuştur.
          </p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            2. BAŞLANGIÇ HÜKÜMLERİ
          </h2>

          <p>
            İşbu kapsamda kiralayan tarafından inselvillalari.com ibareli
            internet sitesi üzerinden kiracı tarafından tatil konutu ve ilgili
            tatil konutunun kiralanacağı tarihler internet ortamından
            belirtilecektir.
          </p>

          <p>
            Bu kapsamda ulaşım ve fatura bilgileri kiracı tarafından kiralayana
            teslim edilecek, tarihlerin ve kiralanacak olan tatil konutunun
            uygun bulunması halinde ön rezervasyon işlemi gerçekleştirilecektir.
          </p>

          <p>
            inselvillalari.com URL adresinde yer alan her bir tatil konutuna
            ilişkin ilanda; konutun niteliği, vasfı, özellikleri, uygunluk
            durumları ve tarihleri, bakımı ve kullanıma ilişkin özellikleri ile
            konutun kiralanmasına ve kiracı tarafından yapılması gereken
            masraflara ilişkin hususlar belirtilmiştir. Herhangi bir ihtilaf
            halinde internet sitesi içerisinde yer alan kayıtlar hukuken geçerli
            sayılacaktır.
          </p>

          <p>
            inselvillalari.com URL adresli site üzerinden resimlerdeki mülkü
            kiralamakla mükelleftir, mülkün adını değiştirme hakkını saklı
            tutar.
          </p>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            3. REZERVASYON VE REZERVASYON İPTALİ
          </h2>

          <p>
            inselvillalari.com URL adresli site üzerinden kiracı tarafından ön
            rezervasyon yapılmasını müteakiben kiralayan ve/veya kiralayanın
            yetkilileri tarafından, kiracının bildirimini yapmış olduğu iletişim
            numaraları aranarak rezervasyon teyidi alınacaktır.
          </p>

          <p>
            Ön rezervasyonun yapılmasından itibaren ilanda belirtilen süre
            içerisinde toplam kiralama bedelinin yüzde 40’ı (yüzdekırk) kiralama
            ekranının ilgili ödeme sayfasında yer alan IBAN numarasına ve banka
            hesabına havale, EFT ve/veya kredi kartıyla ödenecektir. Ön
            rezervasyonu müteakiben işbu maddede kararlaştırılan ön ödemenin
            süresi içerisinde yapılmaması halinde rezervasyon iptal edilmiş
            sayılacak ve işbu sözleşme kendiliğinden geçersiz hale gelecektir.
          </p>

          <p>
            İşbu ön ödemenin teslim alınması halinde en geç yirmi dört (24) saat
            içerisinde kiracının bildirmiş olduğu elektronik adresine (faks,
            e-mail) rezervasyon onayı gönderilmekte, bu kapsamda rezervasyon
            onayında toplam ücret, kapora tutarı, kiralanan tarihler
            belirtilecektir.
          </p>

          <p>
            3.2. madde kapsamında yer alan ön ödemeden hariçte kalan ve toplam
            kira bedeli; tatil konutunun kiralandığı (kira başlangıcı) tarihte
            kiralayana ödenecektir. İşbu bedelin tamamının ödenmemesi halinde
            tatil konutunun teslimi kiracıya yapılmayacaktır. Kiracıya yanı sıra
            kira bedelinin tamamı yansıtılacak, kiracı tarafından ödemenin
            yapılmaması nedeniyle kiralayanın uğramış olduğu bütün maddi ve
            manevi zararlar kiracıdan talep edilecektir.
          </p>

          <p>
            Kiralama bedelinin ödenmemesi ve süresi içerisinde rezervasyonun
            iptal edilmemesi halinde, kiracı tarafından bütün kiralama bedeli
            ödenecektir. Kiracı tarafından tatil konutunun geç teslimatı
            halinde; bir sonraki rezervasyonun tehlike altına girmesi nedeniyle
            kiracı tarafından bir sonraki rezervasyona ilişkin maddi ve manevi
            tazminat talep edilecektir.
          </p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            4. TATİL KONUTUNUN TESLİMİ
          </h2>

          <p>
            Kiracı tarafından kira bedelinin tamamının ödenmesi halinde tatil
            konutu kiracıya rezervasyonda ve rezervasyon onayında belirtilen
            tarihte teslim edilecektir. İki tarihin çelişmesi halinde
            rezervasyon onayında yer alan tarih geçerli sayılacaktır.
          </p>

          <p>
            İlgili tatil konutu tam, sağlam ve bakımları yapılmış bir şekilde
            kiracıya teslim edilecektir. Teslim anında kiracı ile kısa dönem
            kira sözleşmesi imzalanacak ve tatil konutunda bulunan taşınır ile
            taşınmaz eşyalara gelebilecek zarar için demirbaş sayımı ve tutanağı
            yapılacaktır.
          </p>

          <p>
            Tatil konutuna gelebilecek olan zararın tanzimi için ilgili tatil
            konutunun rezervasyon sayfasında yer alan veya kiralayan tarafından
            uygun görülecek olan depozito bedeli kiracıdan tahsil edilecektir.
            Tatil konutunun geri teslimi anında herhangi bir zararın doğmadığı
            anlaşıldığı takdirde depozitonun tam iadesi yapılacaktır. Tatil
            konutunda herhangi bir zarar ve/veya ziya meydana gelmesi halinde ve
            yapılan masrafların depozitoyu aşan bir bedel olması halinde,
            kiracıya ek fatura gönderilerek yapılan ödemelerin ve masrafların
            tahsili talep edilecektir.
          </p>

          <p>
            Tatil konutlarının teslimi ilgili kiralamanın başladığı gün saat
            16:00’dan sonra yapılacak olup, konutun kiralayana geri teslimi ise
            ilgili rezervasyonun bitiş tarihinde 10:00’den önce olacaktır.
          </p>

          <p>
            Haftalık kiralama 7 gün 8 geceyi ifade etmekte olup, bu kapsamda
            rezervasyon onayında girişin ve çıkışın yapılacağı tarihler
            belirtilecektir.
          </p>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            5. KİRACININ HAK VE YÜKÜMLÜLÜKLERİ
          </h2>

          <p>
            Kiracı tarafından tatil konutunun kendisine teslim edilen bütün eşya
            ve/veya mobilyaları kullanılabilecektir. Kiracı tarafından tatil
            konutu geneli itibariyle temiz ve özenli kullanılacak olup, tatil
            konutuna herhangi bir hasar verilmeyecektir.
          </p>

          <p>
            Kiracı tarafından tatil konutunda yer alan eklentilerin sökülmesi,
            yerlerinin değiştirilmesi ve yetkili servis harici onarım yapılmaya
            çalışılması kesinlikle kabul edilmeyecek ve tatil konutunda bu
            nedenlerle meydana gelen hasarlar kiracı tarafından tazmin
            edilecektir.
          </p>

          <p>
            Kiracı tarafından tatil konutu maksadı dışında kullanılmayacaktır.
          </p>

          <p>
            Tatil konutunda doğan herhangi bir hasar, gecikmeksizin kiralayana
            bildirilecektir. Kiracı kendi kusuru, hatası, kastı ve/veya ihmali
            nedeniyle meydana gelen hasar ve/veya ziyaı tazminle yükümlüdür.
          </p>

          <p>
            Kiracı villa çevresindeki komşulara karşı anlayışlı olacak, çevreyi
            rahatsız edecek davranışlardan kaçınacaktır. Silah, uyuşturucu gibi
            kanuna aykırı maddeler bulundurulmayacak, kanunlara aykırı
            davranılmayacaktır.
          </p>

          <p>
            Her tatil konutu için maksimum kişi sayısı belirtilmiştir. Bu sayı
            aşılırsa fazla kişi evden çıkarılabilir veya ek ücret talep
            edilebilir.
          </p>

          <p>
            Sigara içilmesi, evcil hayvan bulundurulması gibi özel kurallar
            tatil konutunun ilan sayfasında ayrıca belirtilir. Aksi
            belirtilmedikçe yasaktır.
          </p>

          <p>
            Girişte tüm konaklayan kişilerin kimlik bilgileri alınacak ve Kimlik
            Bildirim Sistemi'ne bildirilecektir. Eksik veya yanlış bilgi
            verilmesi yasal sorumluluk doğurur.
          </p>

          <p>
            Kiracı verdiği tüm bilgilerin doğru olduğunu taahhüt eder.
            Bilgilerde hata olması halinde doğacak tüm zararlardan sorumludur.
          </p>

          <p>
            Kiracı tatil konutunda gerekli bütün kişisel önlemleri almak
            zorundadır. Kusurundan kaynaklanan zararları tazmin edecektir.
          </p>

          <p>
            Kiracı, tatil konutunu aldığı gibi tam, sağlam ve eksiksiz olarak
            iade etmekle yükümlüdür.
          </p>

          <p>
            Kiracı kira süresi boyunca meydana gelen zarar ve kazalardan
            sorumludur.
          </p>

          <p>
            Kiralamadan doğan vergi, harç ve benzeri yükümlülükler kiracı
            tarafından ödenir.
          </p>

          <p>
            Eksiklikler kiralama başladıktan 24 saat içinde bildirilmelidir.
            Aksi takdirde sorumluluk kabul edilmez.
          </p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            6. KİRALAYANIN HAK VE SORUMLULUKLARI
          </h2>

          <p>
            Kiralayan, kiralananı sözleşmeye uygun olarak zamanında teslim
            etmekle yükümlüdür.
          </p>

          <p>
            Tatil konutu temiz, bakımlı, yedek çarşaf ve havlularla donatılmış
            olarak teslim edilecektir.
          </p>

          <p>
            Kiralananın elektrik, su, doğalgaz faturaları kiralayana aittir.
            Ancak ilan sayfasında belirtilen temizlik bedeli kiracı tarafından
            ödenir.
          </p>

          <p>
            Kamusal kesintiler (elektrik, su, internet) kiralayanın
            sorumluluğunda değildir.
          </p>

          <p>
            Kiralayan, zararın tespiti halinde depozitodan kesinti yapabilir
            veya ek fatura çıkarabilir.
          </p>

          <p>
            Gerekli durumlarda rezervasyonu iptal edebilir veya benzer bir tatil
            konutu tahsis edebilir.
          </p>

          <p>
            İn-sel İnşaat Mimarlık Turizm Nakliyat Ticaret Limited Şirketi,
            ilanlarda yer alan bilgilerin doğruluğunu taahhüt eder.
          </p>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            7. SÖZLEŞMENİN SONA ERMESİ, FESHİ İLE SÖZLEŞMENİN İHLALİ
          </h2>

          <p>
            Kira bedeline ilişkin kapora ödenmemesi halinde işbu kiralama
            sözleşmesi kendiliğinden feshedilmiş sayılır.
          </p>

          <p>
            Mücbir sebep durumunda kiralayan sözleşmeyi feshedebilir. Ön ödeme,
            mücbir sebep kalktıktan 2 ay içinde iade edilir.
          </p>

          <p>
            Kiracı iptali yazılı ve imzalı olarak bildirmek zorundadır.
            Rezervasyon iptali halinde rezervasyon başlangıç tarihine bir ay ve
            daha az süre kalmışsa toplam bedelin tamamı ödenecektir.
          </p>

          <p>
            Kiracı, rezervasyon iptali nedeniyle doğacak tüm zararları tazminle
            yükümlüdür.
          </p>

          <p>
            Kira başlangıcından önce veya kira süresi içerisinde sözleşmenin
            ihlali halinde kiracı, kira bedelinin tamamını ödeyecektir.
          </p>

          <p>
            Kira bedelinin zamanında ödenmemesi durumunda faiz uygulanır. İlk
            ödeme yapılmazsa müteakip rezervasyonlar da iptal edilir.
          </p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "2px solid #C8A97E",
            }}
          >
            8. GENEL HÜKÜMLER
          </h2>

          <p>
            Kiracı kiralananı sadece kendisi ve rezervasyon formunda belirtilen
            kişiler için kiralamıştır. Kiralananı devretmek veya alt kiraya
            vermek yasaktır.
          </p>

          <p>Taraflar iyiniyet ve dürüstlük kurallarına uymakla yükümlüdür.</p>

          <p>
            Herhangi bir hükmün geçersiz olması, diğer hükümlerin geçerliliğini
            etkilemez.
          </p>

          <p>
            İşbu sözleşmeye mücbir sebepler (yangın, deprem, salgın hastalık,
            savaş hali vs.) nedeniyle geçici olarak ara verilebilir veya
            sözleşme askıya alınabilir. Mücbir sebep 2 aydan uzun sürerse kiracı
            yeni rezervasyon yapabilir veya iade talep edebilir.
          </p>

          <p>
            Kiracı tarafından verilen adres geçerli tebligat adresi kabul
            edilir. Değişiklik halinde 3 gün içinde bildirilmelidir.
          </p>

          <p>
            inselvillalari.com sitesinde KVKK'ya uygun aydınlatma metni yer
            almaktadır. Kişisel veriler mevzuata uygun işlenecektir.
          </p>

          <p>
            Uyuşmazlıkların çözümünde Kaş Mahkemeleri ve İcra Daireleri
            yetkilidir. Türk hukuku uygulanacaktır.
          </p>

          <p>Sözleşmede yapılacak değişiklikler yazılı şekilde yapılacaktır.</p>

          <p>
            Kiracı ekonomik kriz, enflasyon gibi nedenlerle uyarlama davası
            açamayacağını kabul eder.
          </p>

          <p>
            İşbu sözleşme kiracı tarafından elektronik ortamda onaylandığı
            tarihte yürürlüğe girer.
          </p>
        </div>
      </div>
    </LightLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default withLoading(Agreement);
