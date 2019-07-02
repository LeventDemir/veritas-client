<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <!-- 20 yıl Banner -->
      <div
        class="hidden-xs hidden-sm"
        style="position: absolute; right: 10px; z-index: 200; margin-top: 150px"
      >
        <img src="../assets/img/20_yil_diamond.png" />
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
        <a href="index.php" class="pink-logo">
          <img src="../assets/img/diamondelectric_color.png" alt />
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav navbar-right">
          <router-link :to="{ name: 'home' }" tag="li">
            <a href>Anasayfa</a>
          </router-link>
          <router-link :to="{ name: 'about' }" tag="li">
            <a href>Hakkımızda</a>
          </router-link>
          <router-link :to="{ name: 'products' }" tag="li">
            <a href>Ürünlerimiz</a>
          </router-link>
          <router-link :to="{ name: 'contact' }" tag="li">
            <a href>İletişim</a>
          </router-link>
          <router-link :to="{ name: 'login' }" tag="li" class="active">
            <a href>Bayi Girişi</a>
          </router-link>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>
