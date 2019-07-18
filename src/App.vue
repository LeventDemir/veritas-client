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
i:hover,
img:hover {
  cursor: pointer;
}

.chip {
  color: wheat;
  display: inline-block;
  padding: 0 16px;
  margin: 1.5px 0 0 0;
  font-size: 14px;
  font-weight: bold;
  border-radius: 25px;
  background-color: #d9534f;
}
</style>
