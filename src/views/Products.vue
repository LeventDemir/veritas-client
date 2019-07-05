<template>
  <div>
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
          <h2>Kanllı Tip Klima</h2>
          <Card
            v-if="product.categorie === 'Kanllı Tip Klima'"
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
import MiniCard from "../components/MiniCard";

export default {
  components: { Card, MiniCard },
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