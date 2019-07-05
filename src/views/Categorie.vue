<template>
  <section class="relative" id="spesification">
    <div class="space-30"></div>
    <div class="container">
      <div class="row text-white">
        <MiniCard
          :data="{ name: 'Duvar Tipi Klima', photo: '/src/assets/img/duvartipi.png', color: 'blue', categorie: 'duvar' }"
        />

        <MiniCard
          :data="{ name: 'Salon Tipi Klima', photo: '/src/assets/img/salontipi.png', color: 'pink', categorie: 'salon' }"
        />

        <MiniCard
          :data="{ name: 'Kaset Tipi Klima', photo: '/src/assets/img/kasettipi.png', color: 'green', categorie: 'kaset' }"
        />

        <MiniCard
          :data="{ name: 'Kanallı Tip Klima', photo: '/src/assets/img/kanaltipi.png', color: 'gold', categorie: 'kanal' }"
        />

        <MiniCard
          :data="{ name: 'Multi Tipi Klima', photo: '/src/assets/img/multi.png', color: 'purple', categorie: 'multi' }"
        />
      </div>
      <div class="clearfix"></div>
      <hr />

      <Card v-for="product in products" :key="product.uuid" :data="product" />
    </div>
    <div class="space-30"></div>
  </section>
</template>


<script>
import MiniCard from "../components/MiniCard";
import Card from "../components/Card";

export default {
  components: { Card, MiniCard },
  data() {
    return {
      products: []
    };
  },
  created() {
    const categories = ["duvar", "salon", "kaset", "kanal", "multi"];
    let categorie = this.$route.params.categorie;

    if (categories.includes(categorie)) {
      categorie === categories[0]
        ? (categorie = "Duvar Tipi Klima")
        : categorie === categories[1]
        ? (categorie = "Salon Tipi Klima")
        : categorie === categories[2]
        ? (categorie = "Kaset Tipi Klima")
        : categorie === categories[3]
        ? (categorie = "Kanallı Tip Klima")
        : categorie === categories[4]
        ? (categorie = "Multi Tipi Klima")
        : "";

      this.$store
        .dispatch("getProductsByCategorie", categorie)
        .then(response => (this.products = response.data));
    }
  }
};
</script>
