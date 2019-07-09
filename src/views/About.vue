<template>
  <section class="relative" id="spesification">
    <div class="space-30" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="page-title">
            <h2>
              <strong>Kurumsal</strong>
            </h2>
          </div>

          <p>
            1965 senesinde başlayan mühendislik tecrübemiz ile önde gelen mimarlara, gayrimenkul geliştiricilerine, üretim tesislerine ve kamu kuruluşlarına kapsamlı yapısal inşaat mühendisliği hizmetleri sağlamaktayız.
            Veritas, Latince'de "hakikat, doğruluk" anlamına gelir. Antik Roma'da doğruluk erdemine de verilen isim olan Veritas, aynı zamanda mitoloji de hakikatin vücut bulmuş halidir.
            Gerçek bilgi ve doğruluğu takip etme inancımız bize bilim ve toplum arasında köprüler kurmamızı sağlamaktadır.
            Mühendislik tasarım ekibimiz, zarif detaylar tasarlayabildiği gibi pragmatik kararlar veren hem analitik ve hem de yaratıcı mühendislik birikiminin harmanıdır.
            Yapısal,deprem ve inşaat mühendisliği alanlarındaki uzmanlığımızla yapısal analiz, geoteknik , yüksek bina tasarımı , sismik tehlike vb. tüm yapı tasarım konuları çalışma kapsamımızdadır.
            Mühendislik Yaklaşımımız
            Mühendislik yaklaşımımız ; Fonksiyonellik, Sürdürülebilirlik, İnşa edilebilirlik, Yapı Güvenliği kriterlerinin hedeflenen bütçe ve iş programına uygun olarak büyük ölçekli projelerden, en ufak bir detay tasarımına kadar aynı özenle gerçekleştirilmesine dayanmaktadır.
            Otomotiv, gıda, gemi üretim sanayisi, gayrimenkul ve kamu sektörlerindeki yıllara dayalı başarılı çalışmalarımız her yeni tasarladığımız yapıya tecrübemizi aktarmamıza neden olmaktadır.
            Çalıştığımız her projede öncelikle arkasındaki ihtiyaçları anlamak isteriz. Bu bazen işveren’in ihtiyaçları , mimarın zihinsel ve mekânsal kavramı , çevresel etkiler ve bazen de müteahhit firmanın inşa yöntemleri olabilir. Böylece yapısal tasarımlarımız ve çözümlemelerimizle paydaşlar arası bir başarı ortaya çıkar.
            Ekibimiz bu işbirliğine dayalı çalışma yaklaşımımızdan keyif alarak, tasarım ekibi olmanın ötesinde işveren , mimarlar ve yükleniciler ile bütünlük içerisinde hareket etmektedir.
            Tanınmış gayrimenkul firmalarının binlerce ünitelik toplu konut projelerinden özgün bir adetlik şehir anıtına , dünya devi markaların büyük alanlı üretim tesislerinden özel bir müşterinin bir adetlik müstakil konutu ölçek aralığında sayısız projeler gerçekleştirdik. Her türde yapısal malzeme kullanılarak , geleneksel ve geleneksel olmayan tüm yapı tipleri mühendislik tasarımı çalışma kapsamımızdadır.
          </p>
        </div>

        <div class="space-50" />

        <div class="col-col-xs-12 col-xs-offset-1">
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          />
        </div>
      </div>
    </div>
    <div class="space-100"></div>
  </section>
</template>


<script>
import VueGallery from "vue-gallery";

export default {
  components: { gallery: VueGallery },
  data() {
    return {
      images: [
        "/src/assets/img/contact/1.jpeg",
        "/src/assets/img/contact/2.jpeg",
        "/src/assets/img/contact/3.jpeg",
        "/src/assets/img/contact/4.jpeg",
        "/src/assets/img/contact/5.jpeg",
        "/src/assets/img/contact/6.jpeg",
        "/src/assets/img/contact/7.jpeg",
        "/src/assets/img/contact/8.jpeg",
        "/src/assets/img/contact/9.jpeg",
        "/src/assets/img/contact/10.jpeg",
        "/src/assets/img/contact/11.jpeg",
        "/src/assets/img/contact/12.jpeg",
        "/src/assets/img/contact/13.jpeg",
        "/src/assets/img/contact/14.jpeg"
      ],
      index: null
    };
  }
};
</script>


<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>