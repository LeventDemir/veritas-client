<template>
  <div>
    <Navbar />

    <div class="container"></div>

    <router-view></router-view>

    <Footer />
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

