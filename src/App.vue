<template>
  <div>
    <Navbar />

    <div class="container">
      <flash-message />
    </div>

    <router-view />

    <Footer
      v-if="
      $route.name === 'home' || 
      $route.name === 'about' || 
      $route.name === 'products' || 
      $route.name === 'product' || 
      $route.name === 'categorie' || 
      $route.name === 'contact' ||
      $route.name === 'rights' ||
      $route.name === 'login'"
    />
  </div>
</template>


<script>
require("vue-flash-message/dist/vue-flash-message.min.css");

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: { Navbar, Footer },
  created() {
    this.$store.dispatch("isAuth");
  }
};
</script>

<style>
i:hover {
  cursor: pointer;
}
</style>
