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
            <option value disabled>Seçiniz</option>
            <option value="Duvar Tipi Klima">Duvar Tipi Klima</option>
            <option value="Salon Tipi Klima">Salon Tipi Klima</option>
            <option value="Kaset Tipi Klima">Kaset Tipi Klima</option>
            <option value="Kanallı Tip Klima">Kanllı Tip Klima</option>
            <option value="Multi Tipi Klima">Multi Tip Klima</option>
          </select>

          <br />
          <label>Açıklama</label>
          <VueEditor v-model="product.description" />

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
            ref="featuresPdf"
            accept="application/pdf"
            @change="uploadFeaturesPdf"
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
                  <button @click="$refs.featuresPdf.click()" class="btn btn-danger">Özellikler pdf</button>
                </div>
              </div>
            </center>
          </div>

          <div v-if="product.photo || product.categoriePdf || product.featuresPdf">
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
              <div class="space-50"></div>
              <i @click="product.categoriePdf = ''" class="fa fa-trash text-danger"></i>
            </div>
            <div class="space-30"></div>
          </div>

          <div
            v-if="product.featuresPdf"
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
              <div class="space-50"></div>
              <i @click="product.featuresPdf = ''" class="fa fa-trash text-danger"></i>
            </div>
            <div class="space-30"></div>
          </div>

          <br />
          <br />
          <br />

          <button
            v-if="
            $route.params.page === 'create' &&
            product.photo &&
            product.categorie &&
            product.description &&
            product.photo 
            "
            @click="create"
            class="btn btn-danger"
            style="width:100%"
          >Ürün Oluştur</button>

          <button
            v-if="
            $route.params.page !== 'create' &&
            product.photo &&
            product.categorie &&
            product.description &&
            product.photo
            "
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
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data() {
    return {
      product: {
        name: "",
        photo: "",
        categorie: "",
        description: "",
        categoriePdf: "",
        featuresPdf: ""
      }
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
          this.product.categoriePdf = response.data.categoriePdf || "";
          this.product.featuresPdf = response.data.featuresPdf || "";
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
    uploadFeaturesPdf(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      const vm = this;

      reader.onload = e => (vm.product.featuresPdf = e.target.result);
      reader.readAsDataURL(files[0]);

      this.product.featuresPdf = "";
    },
    create() {
      if (
        this.product.name &&
        this.product.photo &&
        this.product.categorie &&
        this.product.description
      ) {
        this.$store
          .dispatch("createProduct", this.product)
          .then(response => this.$router.push({ name: "dashboard" }));
      }
    },
    update() {
      this.product.product = this.$route.params.page;
      if (
        this.product.name &&
        this.product.photo &&
        this.product.categorie &&
        this.product.description
      ) {
        this.$store
          .dispatch("updateProduct", this.product)
          .then(response => this.$router.push({ name: "dashboard" }));
      }
    }
  }
};
</script>


<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
</style>