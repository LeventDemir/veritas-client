<template>
  <div class="container">
    <div class="col-md-12">
      <div class="space-40" />
      <h2 class="text-center">Mesajlar</h2>
      <hr />
      <div class="space-20" />
      <ul class="list-group">
        <li v-for="message in messages" :key="message.uuid" class="list-group-item">
          <i style="float: right; margin-left: 30px" class="fa fa-trash text-danger" />
          <b>{{ message.name }}</b>
          <span v-if="!message.read" class="chip" style="float: right; margin-left: 30px">Okunmadı</span>
          <b style="float: right">{{ message.createdDate }}</b>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  created() {
    this.$store.dispatch("getMessages").then(response => {
      this.messages = response.data.messages;
    });
  }
};
</script>