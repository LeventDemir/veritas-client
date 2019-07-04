<template>
  <div class="form-group">
    <input type="text" v-model="product.name" placeholder="İsim" class="form-control" />

    <br />

    <label>Kategori Seçiniz</label>
    <select v-model="product.categorie" class="form-control">
      <option value>Seçiniz</option>
      <option value="Duvar Tipi Klima">Duvar Tipi Klima</option>
      <option value="Salon Tipi Klima">Salon Tipi Klima</option>
      <option value="Kaset Tipi Klima">Kaset Tipi Klima</option>
      <option value="Kanllı Tip Klima">Kanllı Tip Klima</option>
      <option value="Multi Tip Klima">Multi Tip Klima</option>
    </select>

    <br />
    <label>Açıklama</label>
    <ckeditor :editor="editor" v-model="product.description" :config="editorConfig" />

    <br />

    <!-- Photo ref -->
    <input type="file" ref="photo" accept="image/*" @change="uploadPhoto" style="display: none" />

    <div v-if="product.photo && product.categorie && product.description && product.photo">
      <button @click="create" class="btn btn-danger" style="width:100%">Ürün Oluştur</button>

      <br />
      <br />
      <br />
    </div>

    <button
      v-if="!product.photo"
      @click="$refs.photo.click()"
      class="btn btn-danger"
      style="width:100%"
    >Kapak Fotoğrafı</button>

    <center v-else>
      <div
        data-wow-delay="0.2s"
        class="col-xs-12 col-sm-4 text-center wow fadeInRight"
        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
      >
        <div class="single-price">
          <div class="space-30"></div>
          <a href="#!">
            <center>
              <img
                :src="product.photo"
                @click="$refs.photo.click()"
                class="img-responsive img-thmubnail"
              />
            </center>
          </a>
          <div class="space-20"></div>
          <a href="#!" class="bttntext price-tag none">{{ product.name ? product.name : 'XXXXX' }}</a>
        </div>
        <div class="space-30"></div>
      </div>
    </center>
  </div>
</template>


<script>
export default {
  data() {
    return {
      product: {
        name: "",
        photo: "",
        categorie: "",
        description: ""
      },
      editor: ClassicEditor,
      editorConfig: {}
    };
  },
  methods: {
    uploadPhoto(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      if (files[0].size / (1024 * 1024) < 6) {
        const vm = this;

        reader.onload = e => (vm.product.photo = e.target.result);
        reader.readAsDataURL(files[0]);

        this.product.photo = "";
      }
    },
    create() {
      if (
        this.product.photo &&
        this.product.categorie &&
        this.product.description &&
        this.product.photo
      ) {
        this.$store
          .dispatch("createProduct", this.product)
          .then(response => this.$router.push({ name: "dashboard" }));
      }
    }
  }
};
</script>