<template>
  <section class="relative" id="spesification">
    <NoFound v-if="error" />

    <div v-else>
      <div class="space-30"></div>
      <div class="container">
        <MiniCards />

        <div class="clearfix"></div>
        <hr />

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>{{ categorie }}</h2>
          <Card v-for="product in products" :key="product.uuid" :data="product" />
        </div>
      </div>
      <div class="space-30"></div>
    </div>
  </section>
</template>


<script>
import MiniCards from "../components/MiniCards";
import Card from "../components/Card";
import NoFound from "../components/NoFound";

export default {
  components: { Card, MiniCards, NoFound },
  data() {
    return {
      error: false,
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
    } else this.error = true;
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
