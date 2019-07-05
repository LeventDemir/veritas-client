<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-12">
        <br />
        <br />
        <form @submit.prevent="save">
          <input
            type="email"
            id="email"
            v-model="settings.email"
            placeholder="Email"
            class="form-control"
          />
          <br />

          <input
            type="number"
            id="phone"
            v-model="settings.phone"
            placeholder="Telefon"
            class="form-control"
          />
          <br />

          <input
            type="text"
            id="instagram"
            v-model="settings.instagram"
            placeholder="Instagram"
            class="form-control"
          />
          <br />

          <input type="text" v-model="settings.twitter" placeholder="Twitter" class="form-control" />
          <br />

          <input
            type="text"
            id="facebook"
            v-model="settings.facebook"
            placeholder="Facebook"
            class="form-control"
          />
          <br />

          <textarea
            id="address"
            v-model="settings.address"
            placeholder="Adres"
            cols="30"
            rows="5"
            class="form-control"
          />
          <br />

          <button class="btn btn-danger" style="width:100%">Kaydet</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      settings: {
        email: "",
        phone: "",
        instagram: "",
        twitter: "",
        facebook: "",
        address: ""
      }
    };
  },
  methods: {
    save() {
      console.info(this.settings);
    }
  }
};
</script>