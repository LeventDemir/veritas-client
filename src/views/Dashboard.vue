<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-12">
        <hr />
        <img :src="$store.getters.getUser.photo" alt="Avatar" class="avatar" />
        <strong>{{ $store.getters.getUser.username }}</strong>

        <button
          @click="admin = !admin"
          class="btn btn-danger"
          style="float: right; margin-left: 10px"
        >{{ admin ? 'Ürünler' : 'Yöneticiler' }}</button>

        <button
          v-if="admin"
          data-toggle="modal"
          data-target="#userModal"
          @click="setModalData('create', 'http://ec2-52-14-172-108.us-east-2.compute.amazonaws.com/static/base/avatar.png', '', '')"
          class="btn btn-danger"
          style="float: right"
        >Yönetici Ekle</button>

        <router-link
          v-else
          :to="{ name: 'productOperations', params: { page: 'create' } }"
          tag="button"
          class="btn btn-danger"
          style="float: right"
        >Ürün Ekle</router-link>

        <hr />
        <br />
        <h3 style="text-align: center">{{ admin ? 'Yöneticiler' : 'Ürünler'}}</h3>
        <br />

        <ul class="list-group" v-if="admin">
          <li v-for="user in users" :key="user.uuid" class="list-group-item">
            <a href="#!">
              <strong>{{ user.username }}</strong>
            </a>

            <span style="float: right; margin-left: 30px">
              <i
                data-toggle="modal"
                data-target="#userModal"
                @click="setModalData('edit', user.photo, user.username, user.uuid)"
                class="fa fa-pencil-alt text-success"
              ></i>
              <i
                data-toggle="modal"
                data-target="#userModal"
                @click="setModalData('delete', user.photo, user.username, user.uuid)"
                class="fa fa-trash text-danger"
                style="margin-left: 20px"
              ></i>
            </span>

            <span
              v-if="user.uuid === $store.getters.getUser.uuid"
              class="chip text-white"
              style="float: right"
            >ben</span>
          </li>
        </ul>

        <div v-else>
          <h4
            v-if="products.length ===  0"
            class="alert alert-danger text-center"
          >Hiç ürün bulunmamaktadır!</h4>
          <div v-else>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 v-if="categories.includes('Duvar Tipi Klima')">Duvar Tipi Klima</h2>
              <div v-for="product in products" :key="product.uuid">
                <Card v-if="product.categorie === 'Duvar Tipi Klima'" :data="product" />
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 v-if="categories.includes('Salon Tipi Klima')">Salon Tipi Klima</h2>
              <div v-for="product in products" :key="product.uuid">
                <Card v-if="product.categorie === 'Salon Tipi Klima'" :data="product" />
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 v-if="categories.includes('Kaset Tipi Klima')">Kaset Tipi Klima</h2>
              <div v-for="product in products" :key="product.uuid">
                <Card v-if="product.categorie === 'Kaset Tipi Klima'" :data="product" />
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 v-if="categories.includes('Kanallı Tip Klima')">Kanallı Tip Klima</h2>
              <div v-for="product in products" :key="product.uuid">
                <Card v-if="product.categorie === 'Kanallı Tip Klima'" :data="product" />
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 v-if="categories.includes('Multi Tipi Klima')">Multi Tipi Klima</h2>
              <div v-for="product in products" :key="product.uuid">
                <Card v-if="product.categorie === 'Multi Tipi Klima'" :data="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Photo ref -->
    <input type="file" ref="photo" accept="image/*" @change="uploadPhoto" style="display: none" />

    <!-- Modal -->
    <div
      class="modal fade"
      id="userModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{
              !admin ? 'Ürün Silme' :
              modalData.type === 'edit' ? 'Yönetici Güncelleme' :
              modalData.type === 'delete' ? 'Yönetici Silme' :
              'Yönetici Ekleme'
              }}
            </h5>
          </div>

          <div class="modal-body">
            <center v-if="!admin">
              <strong class="text-danger">Bu ürünü silmek istediğinizden emin misiniz?</strong>
            </center>

            <div v-else-if="modalData.type === 'edit'">
              <center>
                <img
                  :src="modalData.photo"
                  @click="$refs.photo.click()"
                  alt="Avatar"
                  class="avatar-big"
                />
                <br />
                <br />
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-user"></span>
                    </span>
                    <input
                      type="text"
                      id="username"
                      v-model="modalData.username"
                      placeholder="Yönetici adı"
                      class="form-control noneradius"
                    />
                  </div>
                </div>
                <strong v-if="error" class="text-danger">
                  {{
                  error === 'length' ? 'Yönetici adı 3, 20 karakter arası olmalıdır!' :
                  error === 'photo' ? 'Seçtiğiniz dosya çok büyük başaka bir fataoğraf seçiniz' :
                  'Bu Yönetici adı zaten var!'
                  }}
                </strong>
              </center>
            </div>

            <div v-else-if="modalData.type === 'delete'">
              <center>
                <img :src="modalData.photo" alt="Avatar" class="avatar-big" />
                <br />
                <br />
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-user"></span>
                    </span>
                    <input
                      type="text"
                      id="username"
                      v-model="modalData.username"
                      placeholder="Yönetici adı"
                      class="form-control noneradius"
                      disabled
                    />
                  </div>
                </div>
                <br />
                <strong
                  class="text-danger"
                >{{ users.length === 1 ? 'Bu yönetici silinemez!' : 'Bu yöneticiyi silmek istediğinizden emin misiniz?'}}</strong>
              </center>
            </div>

            <div v-else>
              <center>
                <img
                  :src="modalData.photo"
                  @click="$refs.photo.click()"
                  alt="Avatar"
                  class="avatar-big"
                />
              </center>
              <br />

              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-user"></span>
                  </span>
                  <input
                    type="text"
                    id="username"
                    v-model="modalData.username"
                    placeholder="Yönetici adı"
                    class="form-control noneradius"
                  />
                </div>
              </div>

              <div class="from-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-lock"></span>
                  </span>
                  <input
                    type="password"
                    id="password"
                    v-model="modalData.password"
                    placeholder="Şifre"
                    class="form-control noneradius"
                  />
                </div>
              </div>

              <br />

              <center>
                <strong v-if="error" class="text-danger">
                  {{
                  error === 'username' ? 'Yönetici adı 3, 20 karakter arası olmalıdır!' :
                  error === 'password' ? 'Şifre adı 8, 16 karakter arası olmalıdır!' :
                  error === 'photo' ? 'Seçtiğiniz dosya çok büyük başaka bir fataoğraf seçiniz' :
                  'Bu Yönetici adı zaten var!'
                  }}
                </strong>
              </center>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              ref="close"
              @click="error = false"
              class="btn btn-secondary"
              data-dismiss="modal"
            >Kapat</button>

            <button
              v-if="!admin"
              type="button"
              @click="removeProduct"
              class="btn btn-danger"
            >Ürünü sil</button>

            <button
              v-else-if="modalData.type === 'edit'"
              type="button"
              @click="updateUser"
              class="btn btn-danger"
            >Değişiklikleri kaydet</button>

            <button
              v-else-if="modalData.type === 'delete'"
              type="button"
              :disabled="users.length === 1 ? true : false"
              @click="removeUser"
              class="btn btn-danger"
            >Yöneticiyi sil</button>

            <button v-else type="button" @click="createUser" class="btn btn-danger">Yönetici ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Card from "../components/Card";

export default {
  components: { Card },
  data() {
    return {
      admin: false,
      modalData: {
        type: "",
        photo: "",
        username: "",
        token: "",
        password: ""
      },
      error: false,
      users: [],
      products: [],
      categories: []
    };
  },
  created() {
    this.getUsers();
    this.getProducts();
  },
  methods: {
    getUsers() {
      this.$store
        .dispatch("getUsers")
        .then(response => (this.users = response.data));
    },
    setModalData(type, photo, username, uuid) {
      this.modalData.type = type;
      this.modalData.photo = photo;
      this.modalData.username = username;
      this.modalData.uuid = uuid;
    },
    uploadPhoto(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();

      if (files[0].size / (1024 * 1024) < 2) {
        const vm = this;

        reader.onload = e => (vm.modalData.photo = e.target.result);
        reader.readAsDataURL(files[0]);

        this.modalData.photo = "";
      } else this.error = "photo";
    },
    createUser() {
      if (
        this.modalData.username.length > 2 &&
        this.modalData.username.length < 21
      ) {
        if (
          this.modalData.password.length > 7 &&
          this.modalData.username.length < 17
        ) {
          this.$store.dispatch("createUser", this.modalData).then(response => {
            if (response.data.success === false) {
              this.flash("İşlem gerçekleştirilemedi", "error", {
                timeout: 3000
              });
              this.$refs.close.click();
            } else if (response.data.msg) this.error = "taken";
            else {
              this.error = false;
              this.getUsers();
              this.flash("Yönetici Eklendi", "success", { timeout: 3000 });
              this.$refs.close.click();
            }
          });
        } else this.error = "password";
      } else this.error = "username";
    },
    updateUser() {
      if (
        this.modalData.username.length > 2 &&
        this.modalData.username.length < 21
      ) {
        this.modalData.user = this.modalData.uuid;
        this.$store.dispatch("updateUser", this.modalData).then(response => {
          if (response.success === true) {
            this.error = false;
            this.getUsers();
            this.$refs.close.click();
            this.flash("Yönetici Güncellendi", "success", { timeout: 3000 });
          } else if (response.success === false) {
            this.$refs.close.click();
            this.flash("Yönetici Güncellenemedi", "error", { timeout: 3000 });
          } else this.error = true;
        });
      } else this.error = "length";
    },
    removeUser() {
      this.$store.dispatch("removeUser", this.modalData.uuid).then(response => {
        if (response.data.success === true) {
          if (this.modalData.uuid === this.$store.getters.getUser.uuid) {
            localStorage.removeItem("token");
            this.$store.commit("setAuth", false);
            this.$store.commit("setToken", "");
            this.$store.commit("setUser", {
              uuid: "",
              photo: "",
              username: ""
            });
            this.$router.push({ name: "home" });
          }

          this.error = false;
          this.getUsers();
          this.$refs.close.click();
          this.flash("Yönetici Silindi", "success", { timeout: 3000 });
        } else this.flash("Yönetici Silinemedi", "error", { timeout: 3000 });
      });
    },
    getProducts() {
      this.$store.dispatch("getProducts").then(response => {
        this.products = response.data;

        for (let product in this.products)
          if (!this.categories.includes(this.products[product].categorie))
            this.categories.push(this.products[product].categorie);
      });
    },
    removeProduct() {
      this.$store.dispatch("removeProduct").then(response => {
        if (response.data.success) {
          this.getProducts();
          this.flash("Ürün Silindi", "success", { timeout: 3000 });
        } else this.flash("Ürün Silinemedi", "error", { timeout: 3000 });
        this.$refs.close.click();
      });
    }
  }
};
</script>


<style scoped>
.avatar {
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 18px;
  margin-right: 7px;
}

.avatar-big {
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 7px;
}
</style>
