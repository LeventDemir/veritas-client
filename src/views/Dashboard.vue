<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-12">
        <hr />
        <img :src="$store.getters.getUser.photo" alt="Avatar" class="avatar" />
        <strong>csnaber</strong>
        <button
          @click="admin = !admin"
          class="btn btn-danger"
          style="float: right"
        >{{ admin ? 'Yöneticiler' : 'Ürünler'}}</button>
        <hr />

        <br />
        <h3 style="text-align: center">{{ admin ? 'Ürünler' : 'Yöneticiler'}}</h3>
        <br />

        <ul class="list-group">
          <li v-for="user in products" :key="user.uuid" class="list-group-item">
            <a href>
              {{ user.username }}
              <span
                v-if="user.uuid === $store.getters.getUser.uuid"
                class="chip text-white"
              >ben</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      admin: true,
      users: [],
      products: []
    };
  },
  created() {
    this.$store
      .dispatch("getUsers")
      .then(response => (this.products = response.data));
  }
};
</script>


<style>
.avatar {
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 18px;
  margin-right: 5px;
}

.chip {
  float: right;
  display: inline-block;
  padding: 0 20px;
  /* height: 25px; */
  font-size: 17px;
  border-radius: 25px;
  background-color: #d9534f;
}
</style>
