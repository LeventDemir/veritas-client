<template>
  <footer class="relative">
    <div class="space-100"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-4" style="color: #FFFFFF;">
          <img
            src="/src/assets/img/diamondelectric_white.png"
            alt
            style="filter: brightness(0) invert(1);"
          />
          <div class="space-10"></div>Diamond Electric Türkiye Distribütörü
          <div class="space-10"></div>
          {{ $store.getters.getSettings.address || "" }}
          <div class="clearfix"></div>
          <hr />
          <a style="color:#FFFFFF;">{{ $store.getters.getSettings.email || "" }}</a>
          <br />
          {{ $store.getters.getSettings.phone || "" }}
          <div class="space-10"></div>
          <ul class="list-inline list-unstyled social-list">
            <li>
              <a
                v-if="$store.getters.getSettings.instagram"
                :href="$store.getters.getSettings.instagram"
              >
                <i class="fab fa-instagram" style="background: #793939"></i>
              </a>
            </li>
            <li>
              <a
                v-if="$store.getters.getSettings.facebook"
                :href="$store.getters.getSettings.facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                v-if="$store.getters.getSettings.twitter"
                :href="$store.getters.getSettings.twitter"
              >
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
              <li>
                <a href="index.php?goto=page&item_idx=52">GİZLİLİK VE GÜVENLİK POLİTİKASI</a>
              </li>
              <li>
                <a
                  href="index.php?goto=page&item_idx=53"
                >TÜKETİCİ HAKLARI – CAYMA – İPTAL İADE KOŞULLARI</a>
              </li>
              <li>
                <a href="index.php?goto=page&item_idx=54">MESAFELİ SATIŞ SÖZLEŞMESİ</a>
              </li>
              <li>
                <a href="index.php?goto=page&item_idx=55">ÖDEME ve TESLİMAT</a>
              </li>
            </ul>
          </div>
          <div class="space-30"></div>
        </div>
        <br />
        <div class="hidden-xs hidden-sm col-sm-8">
          <div class="single-footer">
            <div class="space-10"></div>
            <div class="col-md-offset-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img src="/src/assets/img/delpha.png" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <img src="/src/assets/img/visa-master-logolari.png" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <img src="/src/assets/img/comodo-secure-logo-new.png" />
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </div>
    </div>
    <div class="space-100"></div>
  </footer>
</template>
