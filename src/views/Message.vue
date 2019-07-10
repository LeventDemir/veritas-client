<template>
  <div class="container">
    <div class="col-md-12">
      <div class="space-30" />
      <h1>İsim</h1>
      <hr />
      <p>
        <b>İsim:</b>
        {{ message.name }}
      </p>
      <p>
        <b>Email:</b>
        {{ message.email }}
      </p>
      <p>
        <b>Telefon:</b>
        {{ message.phone }}
      </p>
      <p>
        <b>Konu:</b>
        {{ message.subject }}
      </p>
      <p>
        <b>Tarih:</b>
        {{ message.createdDate }}
      </p>
      <b>Mesaj:</b>
      {{ message.message }}
      <hr />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: {}
    };
  },
  created() {
    this.$store.dispatch("getMessage", this.$route.params.id).then(response => {
      this.message = response.data;
      if (!response.data.read)
        this.$store.dispatch("read", this.$route.params.id);
    });
  }
};
</script>