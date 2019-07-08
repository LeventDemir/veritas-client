<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-12">
        <br />
        <br />
        <form @submit.prevent="save">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-envelope"></span>
              </span>
              <input
                type="email"
                id="email"
                v-model="settings.email"
                required
                placeholder="Email"
                class="form-control noneradius"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-phone"></span>
              </span>
              <input
                type="number"
                id="phone"
                v-model="settings.phone"
                placeholder="Telefon"
                required
                class="form-control noneradius"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="fab fa-instagram"></span>
              </span>
              <input
                type="text"
                id="instagram"
                v-model="settings.instagram"
                placeholder="Instagram"
                class="form-control noneradius"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="fab fa-twitter"></span>
              </span>
              <input
                type="text"
                id="twitter"
                v-model="settings.twitter"
                placeholder="Twitter"
                class="form-control noneradius"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="fab fa-facebook-f"></span>
              </span>
              <input
                type="text"
                id="facebook"
                v-model="settings.facebook"
                placeholder="Facebook"
                class="form-control noneradius"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="fa fa-map-marker-alt"></span>
              </span>
              <textarea
                type="text"
                id="address"
                v-model="settings.address"
                required
                placeholder="Adres"
                cols="30"
                rows="5"
                class="form-control noneradius"
              ></textarea>
            </div>
          </div>

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
        email: this.$store.getters.getSettings.email,
        phone: this.$store.getters.getSettings.phone,
        instagram: this.$store.getters.getSettings.instagram,
        twitter: this.$store.getters.getSettings.twitter,
        facebook: this.$store.getters.getSettings.facebook,
        address: this.$store.getters.getSettings.address
      }
    };
  },
  methods: {
    save() {
      this.$store.dispatch("updateSettings", this.settings).then(response => {
        if (response.data.msg)
          this.flash("Ayarlar Güncellendi", "success", { timeout: 5000 });
        else this.flash("Ayarlar Güncellenemedi", "error", { timeout: 5000 });
      });
    }
  }
};
</script>