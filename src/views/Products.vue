<template>
  <div>
    <section class="relative" id="spesification">
      <div class="space-30"></div>
      <div class="container">
        <MiniCards />

        <div class="clearfix"></div>
        <hr />

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 v-if="categories.includes('Duvar Tipi Klima')">Duvar Tipi Klima</h2>
          <div v-for="product in products" :key="product.uuid">
            <Card v-if="product.categorie === 'Duvar Tipi Klima'" :data="product" />
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 v-if="categories.includes('Salon Tipi Klima')">Salon Tipi Klima</h2>
          <div v-for="product in products" :key="product.uuid">
            <Card v-if="product.categorie === 'Salon Tipi Klima'" :data="product" />
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 v-if="categories.includes('Kaset Tipi Klima')">Kaset Tipi Klima</h2>
          <div v-for="product in products" :key="product.uuid">
            <Card v-if="product.categorie === 'Kaset Tipi Klima'" :data="product" />
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 v-if="categories.includes('Kanallı Tip Klima')">Kanallı Tip Klima</h2>
          <div v-for="product in products" :key="product.uuid">
            <Card v-if="product.categorie === 'Kanallı Tip Klima'" :data="product" />
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 v-if="categories.includes('Multi Tipi Klima')">Multi Tipi Klima</h2>
          <div v-for="product in products" :key="product.uuid">
            <Card v-if="product.categorie === 'Multi Tipi Klima'" :data="product" />
          </div>
        </div>
      </div>
      <div class="space-30"></div>
    </section>
  </div>
</template>


<script>
import Card from "../components/Card";
import MiniCards from "../components/MiniCards";

export default {
  components: { Card, MiniCards },
  data() {
    return {
      products: [],
      categories: []
    };
  },
  created() {
    this.$store.dispatch("getProducts").then(response => {
      this.products = response.data;

      for (let product in this.products)
        if (!this.categories.includes(this.products[product].categorie))
          this.categories.push(this.products[product].categorie);
    });
  }
};
</script>