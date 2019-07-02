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

        <a href @click="$router.push({ name: 'home' })" class="pink-logo">
          <img src="../assets/img/diamondelectric_color.png" alt />
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href @click="$router.push({ name: 'home' })">Anasayfa</a>
          </li>
          <li>
            <a href @click="$router.push({ name: 'about' })">Hakkımızda</a>
          </li>
          <li>
            <a href @click="$router.push({ name: 'products' })">Ürünlerimiz</a>
          </li>
          <li>
            <a href @click="$router.push({ name: 'contact' })">İletişim</a>
          </li>
          <li class="active">
            <a href @click="$router.push({ name: 'login' })">Bayi Girişi</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>
