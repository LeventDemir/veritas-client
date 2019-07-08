<template>
  <section class="relative" id="spesification">
    <NoFound v-if="error" />
    <div v-else>
      <div class="space-30"></div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-10 col-md-8">
            <div class="page-title">
              <h2>
                <strong>{{ product.name }}</strong>
              </h2>
              <hr />
            </div>

            <div v-html="product.description"></div>

            <div class="space-40"></div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <a class="fancybox" :href="product.photo" data-fancybox-group="gallery">
              <img :src="product.photo" class="img-responsive img-thmubnail" />
            </a>
            <div class="clearfix"></div>

            <br />

            <div v-if="product.categoriePdf" class="col-xs-6 col-sm-6">
              <div align="center" class="media single-feature active">
                <a target="_blank" :href="product.categoriePdf">
                  <div class="media-left">
                    <div class="pink-icon-hover">
                      <span class="flaticon-heart-beat"></span>
                    </div>
                    <div class="media-right">
                      <h5>
                        <br />
                        {{ product.name }}
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="space-30"></div>
              <br />
            </div>

            <div v-if="product.featuresPdf" class="col-xs-6 col-sm-6">
              <div align="center" class="media single-feature active">
                <a target="_blank" :href="product.featuresPdf">
                  <div class="media-left">
                    <div class="pink-icon-hover">
                      <span class="flaticon-heart-beat"></span>
                    </div>
                    <div class="media-right">
                      <h5>
                        <br />Teknik Özellik
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="space-30"></div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="space-30"></div>
    </div>
  </section>
</template>


<script>
import NoFound from "../components/NoFound";

export default {
  components: { NoFound },
  data() {
    return {
      error: false,
      product: {}
    };
  },
  created() {
    this.$store.dispatch("getProduct", this.$route.params.id).then(response => {
      if (response.data.el === false) this.error = true;
      else this.product = response.data;
    });
  }
};
</script>

<style>
p strong {
  color: red !important;
}
</style>
