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
          @click="setModalData('create', 'https://musichubs.herokuapp.com/public/base?image=avatar', '', '')"
          class="btn btn-danger"
          style="float: right"
        >Yönetici Ekle</button>

        <router-link
          v-else
          :to="{ name: 'createProduct' }"
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
              modalData.type === 'edit' ? 'Yönetici Güncelleme' :
              modalData.type === 'delete' ? 'Yönetici Silme' :
              'Yönetici Ekleme'
              }}
            </h5>
          </div>

          <div class="modal-body">
            <div v-if="modalData.type === 'edit'">
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
              v-if="modalData.type === 'edit'"
              type="button"
              @click="updateUser"
              class="btn btn-danger"
            >Değişiklikleri kaydet</button>

            <button
              v-else-if="modalData.type === 'delete'"
              type="button"
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
export default {
  data() {
    return {
      admin: true,
      modalData: {
        type: "",
        photo: "",
        username: "",
        token: "",
        password: ""
      },
      error: false,
      users: [],
      products: []
    };
  },
  created() {
    this.getUsers();
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
            if (response.data.el) this.error = "taken";
            else {
              this.error = false;
              this.getUsers();
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
          if (response === true) {
            this.error = false;
            this.getUsers();
            this.$refs.close.click();
          } else this.error = true;
        });
      } else this.error = "length";
    },
    removeUser() {
      this.$store.dispatch("removeUser", this.modalData.uuid).then(response => {
        if (response.data.msg) {
          if (this.modalData.uuid === this.$store.getters.getUser.uuid) {
            this.$store.commit("setAuth", false);
            this.$store.commit("setToken", "");

            localStorage.removeItem("token");

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
        }
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

.chip {
  display: inline-block;
  padding: 0 16px;
  /* height: 25px; */
  font-size: 14px;
  border-radius: 25px;
  background-color: #d9534f;
}
</style>
