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

      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h2>{{ categorie }}</h2>
        <Card v-for="product in products" :key="product.uuid" :data="product" />
      </div>
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
      products: [],
      categorie: this.$route.params.categorie,
      categories: ["duvar", "salon", "kaset", "kanal", "multi"]
    };
  },
  created() {
    if (this.categories.includes(this.categorie)) {
      this.setCategorie();

      this.$store
        .dispatch("getProductsByCategorie", this.categorie)
        .then(response => (this.products = response.data));
    }
  },
  methods: {
    setCategorie() {
      this.categorie === this.categories[0]
        ? (this.categorie = "Duvar Tipi Klima")
        : this.categorie === this.categories[1]
        ? (this.categorie = "Salon Tipi Klima")
        : this.categorie === this.categories[2]
        ? (this.categorie = "Kaset Tipi Klima")
        : this.categorie === this.categories[3]
        ? (this.categorie = "Kanallı Tip Klima")
        : this.categorie === this.categories[4]
        ? (this.categorie = "Multi Tipi Klima")
        : "";
    }
  },
  watch: {
    "$route.params.categorie"() {
      this.categorie = this.$route.params.categorie;

      this.setCategorie();

      this.$store
        .dispatch("getProductsByCategorie", this.categorie)
        .then(response => (this.products = response.data));
    }
  }
};
</script>
