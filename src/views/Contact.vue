<template>
  <section class="relative" id="spesification">
    <div class="space-30"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-12">
          <div class="page-title">
            <h2>
              <strong>İletişim</strong>
            </h2>
          </div>
          <div class="space-40"></div>
          <form @submit.prevent="sendMail">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-user"></span>
                </span>
                <input
                  type="text"
                  id="name"
                  v-model="mail.name"
                  placeholder="İsim"
                  required
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
                  v-model="mail.phone"
                  placeholder="Telefon"
                  required
                  class="form-control noneradius"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-envelope"></span>
                </span>
                <input
                  type="email"
                  id="email"
                  v-model="mail.email"
                  placeholder="Email"
                  required
                  class="form-control noneradius"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Konu</label>
              <br />
              <select id="subject" v-model="mail.subject" required class="form-control">
                <option value disabled>Şeçiniz</option>
                <option value="Şikayet">Şikayet</option>
                <option value="Öneri">Öneri</option>
                <option value="Talep">Talep</option>
                <option value="Bilgi">Bilgi</option>
              </select>
            </div>

            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-pencil"></span>
                </span>
                <textarea
                  type="text"
                  id="message"
                  v-model="mail.message"
                  required
                  placeholder="Mesajınız"
                  class="form-control noneradius"
                ></textarea>
              </div>
            </div>
            <button class="btn btn-danger noneradius" style="width:100%;">Gönder</button>
          </form>

          <div class="space-40"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <iframe
        width="100%"
        height="450"
        src="https://maps.google.com/maps?q=bodrum%20podyum%20%C3%A7ar%C5%9F%C4%B1s%C4%B1&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      mail: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    sendMail() {
      this.$store
        .dispatch("sendMail", this.mail)
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
