<template>
  <div class="container">
    <div class="col-md-12">
      <div class="space-40" />
      <h2 class="text-center">
        Mesajlar
        <span class="noRead">{{ noRead }}</span>
      </h2>
      <hr />
      <div class="space-20" />
      <ul class="list-group">
        <li v-for="message in messages" :key="message.uuid" class="list-group-item">
          <i style="float: right; margin-left: 30px" class="fa fa-trash text-danger" />
          <router-link :to="{ name: 'message', params: { id: message.uuid } }">
            <b>{{ message.name }}</b>
          </router-link>
          <b style="float: right;  margin-left: 30px">{{ message.createdDate }}</b>
          <span v-if="!message.read" class="chip" style="float: right;">Okunmadı</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      messages: [],
      noRead: ""
    };
  },
  created() {
    this.$store.dispatch("getMessages").then(response => {
      this.messages = response.data.messages;
      this.noRead = response.data.noRead;
    });
  }
};
</script>


<style scoped>
.noRead {
  font-size: 14px;
  color: red;
}
</style>
