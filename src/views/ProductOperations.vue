<template>
  <div class="container">
    <div class="row">
      <div v-if="uploading" class="col-xs-8 col-xs-offset-2">
        <div class="space-100" />
        <center>
          <h3>{{ $store.getters.getUploaded === 100 ? "Yüklendi" : "Yükleniyor..." }}</h3>
          <hr />
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="[{ width: $store.getters.getUploaded + '%' }, { background: '#5cb85c' }]"
            >
              <b>{{ $store.getters.getUploaded + '%' }}</b>
            </div>
          </div>
          <router-link
            v-if="$store.getters.getUploaded === 100"
            :to="{ name: 'dashboard' }"
            tag="button"
            @click.native="$store.commit('resetUploaded')"
            class="btn btn-danger"
          >Devam et</router-link>
        </center>
      </div>

      <div v-else class="col-xs-12 col-sm-10 col-md-12">
        <br />
        <br />
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
        <input type="file" ref="photo" accept="image/*" @change="uploadPhoto" style="display: none" />

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
            <div class="space-20" />
            <a href="#!" class="bttntext price-tag none">{{ product.name ? product.name : 'XXXXX' }}</a>
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
                  <a
                    :target="product.categoriePdf.substr(0, 4) === 'http' ? '_blank' : ''"
                    :href="product.categoriePdf.substr(0, 4) === 'http' ? product.categoriePdf : '#!'"
                  >
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
            <a
              :target="product.categoriePdf.substr(0, 4) === 'http' ? '_blank' : ''"
              :href="product.categoriePdf.substr(0, 4) === 'http' ? product.categoriePdf : '#!'"
              class="bttntext price-tag none"
            >Kategori pdf</a>
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
                  <a
                    :target="product.featuresPdf.substr(0, 4) === 'http' ? '_blank' : ''"
                    :href="product.featuresPdf.substr(0, 4) === 'http' ? product.featuresPdf : '#!'"
                  >
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
            <a
              :target="product.featuresPdf.substr(0, 4) === 'http' ? '_blank' : ''"
              :href="product.featuresPdf.substr(0, 4) === 'http' ? product.featuresPdf : '#!'"
              class="bttntext price-tag none"
            >Özellikler pdf</a>
            <div class="space-50"></div>
            <i @click="product.featuresPdf = ''" class="fa fa-trash text-danger"></i>
          </div>
          <div class="space-30"></div>
        </div>

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

        <div class="space-200" />
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
      uploading: false,
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
      this.uploading = true;

      this.$store.dispatch("createProduct", this.product).then(response => {
        if (response.data.success === true)
          this.flash("Ürün Eklendi", "success", { timeout: 5000 });
        else this.flash("Ürün Eklenemedi", "error", { timeout: 5000 });
      });
    },
    update() {
      this.uploading = true;
      this.product.product = this.$route.params.page;

      this.$store.dispatch("updateProduct", this.product).then(response => {
        if (response.data.success === true)
          this.flash("Ürün Güncellendi", "success", { timeout: 5000 });
        else this.flash("Ürün Güncellenemedi", "error", { timeout: 5000 });
      });
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