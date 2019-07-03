<template>
  <section class="relative" id="spesification">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-12">
          <div class="page-title">
            <h2>
              <strong>Bayi Girişi | Oturum Ekranı</strong>
            </h2>
          </div>

          <div class="space-40"></div>

          <div v-if="error" class="alert alert-danger">
            <h3 style="text-align: center">Kullanıcı adı yada parolanız yanlış !</h3>
          </div>

          <form @submit.prevent>
            <div class="form-group">
              <label for>Kullanıcı adı</label>
              <input type="text" id="username" v-model="user.username" class="form-control" />

              <label for>Parola</label>
              <input type="password" id="password" v-model="user.password" class="form-control" />
            </div>
            <button type="button" @click="login" class="btn btn-danger btn-block">
              Oturum
              Aç
            </button>
          </form>
          <div class="space-40"></div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      error: false
    };
  },
  methods: {
    login() {
      if (this.user.username.length > 0 && this.user.password.length) {
        this.$store.dispatch("login", this.user).then(response => {
          if (response.data.el === false) this.error = true;
          else {
            this.$store.commit("setToken", response.data.token);
            localStorage.setItem("token", response.data.token)
            this.$router.push({ name: "dashboard" });
          }
        });
      } else this.error = true;
    }
  }
};
</script>
