<template>
  <div
    data-wow-delay="0.2s"
    class="col-xs-12 col-sm-4 text-center wow fadeInRight"
    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
  >
    <div class="single-price">
      <div class="space-30"></div>
      <router-link :to="{ name: 'product', params: { id: data.uuid } }">
        <center>
          <img :src="data.photo" class="img-responsive img-thmubnail" />
        </center>
      </router-link>
      <router-link
        :to="{ name: 'product', params: { id: data.uuid } }"
        tag="a"
        class="bttntext price-tag none"
      >{{ data.name }}</router-link>
      <div class="space-30" />
      <p v-if="$route.name === 'dashboard'">
        <router-link
          :to="{ name: 'productOperations', params: { page: data.uuid } }"
          tag="i"
          class="fa fa-pencil-alt text-success"
          style="margin-right: 40px"
        />

        <i
          data-toggle="modal"
          data-target="#userModal"
          @click="$store.commit('setProduct', data.uuid)"
          class="fa fa-trash text-danger"
        ></i>
      </p>
    </div>
    <div class="space-30"></div>
  </div>
</template>


<script>
export default {
  props: ["data"]
};
</script>