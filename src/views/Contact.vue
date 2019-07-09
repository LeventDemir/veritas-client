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
          <div class="space-10"></div>
          <form @submit.prevent="sendMessage">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-user"></span>
                </span>
                <input
                  type="text"
                  id="name"
                  v-model="message.name"
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
                  v-model="message.phone"
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
                  v-model="message.email"
                  placeholder="Email"
                  required
                  class="form-control noneradius"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Konu</label>
              <br />
              <select id="subject" v-model="message.subject" required class="form-control">
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
                  v-model="message.message"
                  required
                  placeholder="Mesajınız"
                  class="form-control noneradius"
                ></textarea>
              </div>
            </div>
            <button class="btn btn-danger noneradius" style="width:100%;">Gönder</button>
          </form>
        </div>
      </div>

      <div class="space-40" />

      <div class="col-col-xs-12 col-xs-offset-1">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        />
      </div>

      <div class="space-40" />
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
import VueGallery from "vue-gallery";

export default {
  components: { gallery: VueGallery },
  data() {
    return {
      images: [
        "/src/assets/img/contact/1.jpeg",
        "/src/assets/img/contact/2.jpeg",
        "/src/assets/img/contact/3.jpeg",
        "/src/assets/img/contact/4.jpeg",
        "/src/assets/img/contact/5.jpeg",
        "/src/assets/img/contact/6.jpeg",
        "/src/assets/img/contact/7.jpeg",
        "/src/assets/img/contact/8.jpeg",
        "/src/assets/img/contact/9.jpeg",
        "/src/assets/img/contact/10.jpeg",
        "/src/assets/img/contact/11.jpeg",
        "/src/assets/img/contact/12.jpeg",
        "/src/assets/img/contact/13.jpeg",
        "/src/assets/img/contact/14.jpeg"
      ],
      index: null,
      message: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("sendMessage", this.message).then(response => {
        if (response.data.success) this.flash("Mesaj Gönderildi", "success");
        else this.flash("Mesaj Gönderilemedi", "error");
      });
    }
  }
};
</script>


<style scoped>
.image {
  cursor: pointer;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>