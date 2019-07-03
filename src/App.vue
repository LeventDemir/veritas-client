<template>
  <div>
    <Navbar />

    <div class="container"></div>

    <router-view></router-view>

    <Footer
      v-if="
      $route.name === 'home' || 
      $route.name === 'about' || 
      $route.name === 'products' || 
      $route.name === 'contact'"
    />
  </div>
</template>


<script>
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
