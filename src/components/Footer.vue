<template>
  <footer class="relative">
    <div class="space-100"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-4" style="color: #FFFFFF;">
          <div class="space-30"></div>Veritas Muhendislik Yetkili Merci
          <div class="space-10"></div>Konacık Mh. Atatürk Blv. No: 200 Bodrum - Muğla / TURKEY
          <div class="clearfix"></div>
          <hr />
          <a style="color: #FFFFFF;">özge@veritasmuhendislik.com</a>
          <a style="color: #FFFFFF;">info@veritasmuhendislik.com</a>
          <br />+90 252 363 73 76
          <div class="space-10"></div>
          <ul class="list-inline list-unstyled social-list">
            <li>
              <a href="https://www.instagram.com/veritasmuhendislik/" target="blank">
                <i class="fab fa-instagram" style="background: #793939"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>

          <div class="space-30"></div>
        </div>

        <div class="col-md-offset-1 hidden-xs hidden-sm col-md-2">
          <div class="single-footer">
            <div class="space-10"></div>
            <ul class="list-unstyled">
              <li>
                <a href @click="$router.push({ name: 'home' })">Anasayfa</a>
              </li>
              <router-link :to="{ name: 'about' }" tag="li">
                <a href>Hakkımızda</a>
              </router-link>
              <router-link :to="{ name: 'products' }" tag="li">
                <a href>Ürünlerimiz</a>
              </router-link>
              <router-link :to="{ name: 'contact' }" tag="li">
                <a href>İletişim</a>
              </router-link>
            </ul>
          </div>
          <div class="space-30"></div>
        </div>

        <div class="hidden-xs hidden-sm col-sm-5">
          <div class="single-footer">
            <div class="space-10"></div>
            <ul class="list-unstyled">
              <router-link :to="{ name: 'rights' }" tag="li">
                <a href>TÜKETİCİ HAKLARI – CAYMA – İPTAL İADE KOŞULLARI</a>
              </router-link>
              <router-link :to="{ name: 'questions' }" tag="li">
                <a href>Sıkça sorulan sorular</a>
              </router-link>
            </ul>
          </div>
          <div class="space-30"></div>
        </div>

        <br />

        <div class="hidden-xs hidden-sm col-sm-8">
          <div class="single-footer">
            <div class="space-10"></div>
            <div class="col-md-offset-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img
                src="/src/assets/img/logo/diamondelectric_white.png"
                style="filter: brightness(0) invert(1);"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img src="/src/assets/img/logo/daikin.gif" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <img src="/src/assets/img/logo/mitsubishi-klima-logo.jpg" />
            </div>
            <div class="space-20"></div>
            <div class="col-md-offset-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img src="/src/assets/img/logo/panasonic.png" />
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </div>
    </div>
    <div class="space-100"></div>
  </footer>
</template>


<style scoped>
* {
  font-weight: bold;
}
</style>
