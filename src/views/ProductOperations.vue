<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-12">
        <br />
        <br />
        <div class="form-group">
          <input type="text" v-model="product.name" placeholder="İsim" class="form-control" />

          <br />

          <label>Kategori Seçiniz</label>
          <select v-model="product.categorie" class="form-control">
            <option value>Seçiniz</option>
            <option value="Duvar Tipi Klima">Duvar Tipi Klima</option>
            <option value="Salon Tipi Klima">Salon Tipi Klima</option>
            <option value="Kaset Tipi Klima">Kaset Tipi Klima</option>
            <option value="Kanallı Tip Klima">Kanllı Tip Klima</option>
            <option value="Multi Tipi Klima">Multi Tip Klima</option>
          </select>

          <br />
          <label>Açıklama</label>
          <ckeditor :editor="editor" v-model="product.description" :config="editorConfig" />

          <br />

          <!-- Photo ref -->
          <input
            type="file"
            ref="photo"
            accept="image/*"
            @change="uploadPhoto"
            style="display: none"
          />

          <!-- categorie pdf ref -->
          <input
            type="file"
            ref="categoriePdf"
            accept="application/pdf"
            @change="uploadCategoriePdf"
            style="display: none"
          />

          <!-- property pdf pdf ref -->
          <input
            type="file"
            ref="propertyPdf"
            accept="application/pdf"
            @change="uploadPropertyPdf"
            style="display: none"
          />

          <div class="container">
            <center>
              <div class="row">
                <div class="col-md-4">
                  <button @click="$refs.photo.click()" class="btn btn-danger">Kapak Fotoğrafı</button>
                </div>
                <div class="col-md-4">
                  <button @click="$refs.categoriePdf.click()" class="btn btn-danger">Kategori pdf</button>
                </div>
                <div class="col-md-4">
                  <button @click="$refs.propertyPdf.click()" class="btn btn-danger">Özellikler pdf</button>
                </div>
              </div>
            </center>
          </div>

          <div v-if="product.photo || product.categoriePdf || product.propertyPdf">
            <br />
            <br />
            <br />
          </div>

          <div
            v-if="product.photo"
            data-wow-delay="0.2s"
            class="col-xs-12 col-sm-4 text-center wow fadeInRight"
            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
          >
            <div class="single-price">
              <div class="space-30"></div>
              <a href="#!">
                <center>
                  <img :src="product.photo" class="img-responsive img-thmubnail" />
                </center>
              </a>
              <div class="space-20"></div>
              <a
                href="#!"
                class="bttntext price-tag none"
              >{{ product.name ? product.name : 'XXXXX' }}</a>
            </div>
            <div class="space-30"></div>
          </div>

          <div
            v-if="product.categoriePdf"
            data-wow-delay="0.2s"
            class="col-xs-12 col-sm-4 text-center wow fadeInRight"
            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
          >
            <div class="single-price">
              <div class="space-30"></div>
              <a href="#!">
                <center>
                  <div align="center" class="media single-feature active">
                    <a href="#!">
                      <div class="media-left">
                        <div class="pink-icon-hover">
                          <span class="flaticon-heart-beat"></span>
                        </div>
                        <div class="media-right"></div>
                      </div>
                    </a>
                  </div>
                </center>
              </a>
              <div class="space-50"></div>
              <a href="#!" class="bttntext price-tag none">Kategori pdf</a>
            </div>
            <div class="space-30"></div>
          </div>

          <div
            v-if="product.propertyPdf"
            data-wow-delay="0.2s"
            class="col-xs-12 col-sm-4 text-center wow fadeInRight"
            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
          >
            <div class="single-price">
              <div class="space-30"></div>
              <a href="#!">
                <center>
                  <div align="center" class="media single-feature active">
                    <a href="#!">
                      <div class="media-left">
                        <div class="pink-icon-hover">
                          <span class="flaticon-heart-beat"></span>
                        </div>
                        <div class="media-right"></div>
                      </div>
                    </a>
                  </div>
                </center>
              </a>
              <div class="space-50"></div>
              <a href="#!" class="bttntext price-tag none">Özellikler pdf</a>
            </div>
            <div class="space-30"></div>
          </div>

          <br />
          <br />
          <br />

          <button
            v-if="this.$route.params.page === 'create'"
            @click="create"
            class="btn btn-danger"
            style="width:100%"
          >Ürün Oluştur</button>

          <button
            v-if="this.$route.params.page !== 'create'"
            @click="update"
            class="btn btn-danger"
            style="width:100%"
          >Ürünü Güncelle</button>
        </div>
      </div>
    </div>
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
        description: "",
        categoriePdf: "",
        propertyPdf: ""
      },
      editor: ClassicEditor,
      editorConfig: {}
    };
  },
  created() {
    if (this.$route.params.page !== "create") {
      this.$store
        .dispatch("getProduct", this.$route.params.page)
        .then(response => {
          this.product.name = response.data.name;
          this.product.photo = response.data.photo;
          this.product.categorie = response.data.categorie;
          this.product.description = response.data.description;
        });
    }
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
    uploadCategoriePdf(e, type) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      const vm = this;

      reader.onload = e => (vm.product.categoriePdf = e.target.result);
      reader.readAsDataURL(files[0]);

      this.product.categoriePdf = "";
    },
    uploadPropertyPdf(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      const vm = this;

      reader.onload = e => (vm.product.propertyPdf = e.target.result);
      reader.readAsDataURL(files[0]);

      this.product.propertyPdf = "";
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
    },
    update() {
      this.product.product = this.$route.params.page;
      if (
        product.photo &&
        product.categorie &&
        product.description &&
        product.photo
      ) {
        this.$store
          .dispatch("updateProduct", this.product)
          .then(response => this.$router.push({ name: "dashboard" }));
      }
    }
  }
};
</script>