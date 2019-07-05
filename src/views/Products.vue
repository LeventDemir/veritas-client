<template>
  <div>
    <section class="relative" id="spesification">
      <div class="space-30"></div>
      <div class="container">
        <div class="row text-white">
          <div class="col-xs-6 text-center wow fadeInRight lgwith" data-wow-delay="0.2s">
            <a style="color: #FFFFFF;" href="index.php?goto=products&cat_idx=30">
              <div class="single-price blue">
                <div class="price-tag">Duvar Tipi Klima</div>
                <div class="space-30"></div>
                <img src="../assets/img/duvartipi.png" alt />
                <div class="space-20"></div>
              </div>
              <div class="space-30"></div>
            </a>
          </div>

          <div class="col-xs-6 text-center wow fadeInRight lgwith" data-wow-delay="0.2s">
            <a style="color: #FFFFFF;" href="index.php?goto=products&cat_idx=31">
              <div class="single-price pink">
                <div class="price-tag">Salon Tipi Klima</div>
                <div class="space-30"></div>
                <img src="../assets/img/salontipi.png" alt />
                <div class="space-20"></div>
              </div>
              <div class="space-30"></div>
            </a>
          </div>

          <div class="col-xs-6 text-center wow fadeInRight lgwith" data-wow-delay="0.2s">
            <a style="color: #FFFFFF;" href="index.php?goto=products&cat_idx=32">
              <div class="single-price green">
                <div class="price-tag">Kaset Tipi Klima</div>
                <div class="space-30"></div>
                <img src="../assets/img/kasettipi.png" alt />
                <div class="space-20"></div>
              </div>
              <div class="space-30"></div>
            </a>
          </div>
          <div class="col-xs-6 text-center wow fadeInRight lgwith" data-wow-delay="0.2s">
            <a style="color: #FFFFFF;" href="index.php?goto=products&cat_idx=33">
              <div class="single-price gold">
                <div class="price-tag">Kanallı Tip Klima</div>
                <div class="space-30"></div>
                <img src="../assets/img/kanaltipi.png" alt />
                <div class="space-20"></div>
              </div>
              <div class="space-30"></div>
            </a>
          </div>
          <div class="col-xs-6 text-center wow fadeInRight lgwith" data-wow-delay="0.2s">
            <a style="color: #FFFFFF;" href="index.php?goto=products&cat_idx=39">
              <div class="single-price purple">
                <div class="price-tag">Multi Tipi Klima</div>
                <div class="space-30"></div>
                <img src="../assets/img/multi.png" alt />
                <div class="space-20"></div>
              </div>
              <div class="space-30"></div>
            </a>
          </div>
        </div>
        <div class="clearfix"></div>
        <hr />

        <h4
          v-if="products.length ===  0"
          class="alert alert-danger text-center"
        >Hiç ürün bulunmamaktadır!</h4>
        <div v-else>
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
      </div>
      <div class="space-30"></div>
    </section>
  </div>
</template>


<script>
import Card from "../components/Card";

export default {
  components: { Card },
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