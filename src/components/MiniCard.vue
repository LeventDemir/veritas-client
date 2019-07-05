<template>
  <div
    class="col-xs-6 text-center wow fadeInRight lgwith"
    data-wow-delay="0.2s"
    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
  >
    <router-link
      :to="{ name: 'categorie', params: { categorie: data.categorie } }"
      tag="a"
      style="color: #FFFFFF"
    >
      <div class="single-price" :class="data.color">
        <div class="price-tag">{{ data.name }}</div>
        <div class="space-30"></div>
        <img :src="data.photo" alt />
        <div class="space-20"></div>
      </div>
      <div class="space-30"></div>
    </router-link>
  </div>
</template>


<script>
export default {
  props: ["data"]
};
</script>
