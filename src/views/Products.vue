<template>
  <div>
    <section class="relative" id="spesification">
      <div class="space-30"></div>
      <div class="container">
        <MiniCards />

        <div class="clearfix"></div>
        <hr />

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Duvar Tipi Klima</h2>
          <Card
            v-if="product.categorie === 'Duvar Tipi Klima'"
            v-for="product in products"
            :key="product.uuid"
            :data="product"
          />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Salon Tipi Klima</h2>
          <Card
            v-if="product.categorie === 'Salon Tipi Klima'"
            v-for="product in products"
            :key="product.uuid"
            :data="product"
          />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Kaset Tipi Klima</h2>
          <Card
            v-if="product.categorie === 'Kaset Tipi Klima'"
            v-for="product in products"
            :key="product.uuid"
            :data="product"
          />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Kanallı Tip Klima</h2>
          <Card
            v-if="product.categorie === 'Kanallı Tip Klima'"
            v-for="product in products"
            :key="product.uuid"
            :data="product"
          />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Multi Tipi Klima</h2>
          <Card
            v-if="product.categorie === 'Multi Tipi Klima'"
            v-for="product in products"
            :key="product.uuid"
            :data="product"
          />
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
      products: []
    };
  },
  created() {
    this.$store
      .dispatch("getProducts")
      .then(response => (this.products = response.data));
  }
};
</script>