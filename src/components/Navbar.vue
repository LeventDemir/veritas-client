<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <!-- 20 yıl Banner -->
      <div
        class="hidden-xs hidden-sm"
        style="position: absolute; right: 10px; z-index: 200; margin-top: 150px"
      >
        <img v-if="$route.name === 'home'" src="/src/assets/img/20_yil_diamond.png" />
      </div>
      <!-- 20 yıl Banner -->
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.php"></a>

        <a href @click="$router.push({ name: 'home' })" class="pink-logo">
          <img src="/src/assets/img/diamondelectric_color.png" alt />
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav navbar-right">
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
          <router-link
            v-if="$store.getters.getAuth === false"
            :to="{ name: 'login' }"
            tag="li"
            class="active"
          >
            <a href>Bayi Girişi</a>
          </router-link>

          <router-link v-if="$store.getters.getAuth === true" :to="{ name: 'dashboard' }" tag="li">
            <a href>Yönetim Paneli</a>
          </router-link>

          <router-link v-if="$store.getters.getAuth === true" :to="{ name: 'settings' }" tag="li">
            <a href>Ayarlar</a>
          </router-link>

          <li v-if="$store.getters.getAuth === true" class="active">
            <a href @click="logout">Çıkış</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    }
  }
};
</script>
