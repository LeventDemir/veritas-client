<template>
  <div>
    <div id="carousel-id" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item">
          <img src="/src/assets/img/home/1.jpg" style="width: 100%;" />
          <div class="container">
            <div class="carousel-caption">
              <h1>GÜÇLÜ SERİNLİK</h1>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="/src/assets/img/home/2.jpg" style="width: 100%;" />
          <div class="container">
            <div class="carousel-caption">
              <h1>GÖRKEMLİ SERİNLİK</h1>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="/src/assets/img/home/3.jpg" style="width: 100%;" />
          <div class="container">
            <div class="carousel-caption">
              <h1>ORGANİZE SERİNLİK</h1>
            </div>
          </div>
        </div>
      </div>

      <a class="left carousel-control" href="#carousel-id" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#carousel-id" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>

    <!--Intro-Area-->
    <section class="relative">
      <div class="section-bg white"></div>
      <div class="container">
        <br />
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <MiniCards />
          </div>
        </div>
      </div>
    </section>
    <!--Intro-Area/-->

    <!--Intro-Area-->
    <section class="relative">
      <div class="space-100 hidden-xs"></div>
      <div class="space-50"></div>
      <div class="section-bg white">
        <div
          class="section-bg"
          style="background-image: url(/src/assets/img/home/4.jpg); opacity: 0.9;"
        ></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 wow fadeInLeft">
            <div class="media">
              <div class="media-left">
                <div class="icon viking-icon">
                  <span class="flaticon-scale-symbol-of-justice"></span>
                </div>
              </div>
              <div class="media-right">
                <h2>
                  <strong>Mükemmel bir yaşam için üstün kalite!</strong>
                </h2>
                <div class="space-10"></div>
                <p>Kaliteli ürünleri ve konusundaki uzmanlığı ile öne çıkan Diamond Electric sizlere konforlu ve sağlıklı bir iklimlendirme sağlıyor.</p>
                <div class="space-20"></div>
                <div class="dots">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-100 hidden-xs"></div>
      <div class="space-50"></div>
    </section>

    <section class="relative">
      <div class="space-100 hidden-xs"></div>
      <div class="space-50"></div>
      <div class="section-bg white">
        <div
          class="section-bg"
          style="background-image: url(/src/assets/img/home/5.jpg); opacity: 0.9;"
        ></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-offset-6 col-sm-6 wow fadeInLeft">
            <div class="media">
              <div class="media-left">
                <div class="icon pink-icon">
                  <span class="glyph-icon flaticon-battery"></span>
                </div>
              </div>
              <div class="media-right">
                <h2>
                  <strong>Yüksek Performans ve Enerji Tasarrufu</strong>
                </h2>
                <div class="space-10"></div>
                <p>
                  Kaliteli ürünleri ve konusundaki uzmanlığı ile öne çıkan
                  <br />Diamond Electric klima sistemleri sizlere konforlu ve sağlıklı bir iklimlendirme sağlıyor.
                </p>
                <div class="space-20"></div>
                <div class="dots">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-100 hidden-xs"></div>
      <div class="space-50"></div>
    </section>
  </div>
</template>


<script>
import MiniCards from "../components/MiniCards";

export default {
  components: { MiniCards }
};
</script>