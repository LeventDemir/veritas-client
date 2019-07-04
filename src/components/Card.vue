<template>
  <div
    data-wow-delay="0.2s"
    class="col-xs-12 col-sm-4 text-center wow fadeInRight"
    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
  >
    <div class="single-price">
      <div class="space-30"></div>
      <!-- <a href="index.php?goto=productdetail&amp;item_idx=51">
      </a>-->
      <router-link :to="{ name: 'product', params: { id: data.uuid } }">
        <center>
          <img :src="data.photo" class="img-responsive img-thmubnail" />
        </center>
      </router-link>
      <div class="space-20"></div>
      <router-link
        :to="{ name: 'product', params: { id: data.uuid } }"
        tag="a"
        class="bttntext price-tag none"
      >{{ data.name }}</router-link>
    </div>
    <div class="space-30"></div>
  </div>
</template>


<script>
export default {
  props: ["data"]
};
</script>