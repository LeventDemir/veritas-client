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

        <button v-if="admin" class="btn btn-danger" style="float: right">Yönetici Ekle</button>
        <hr />
        <br />
        <h3 style="text-align: center">{{ admin ? 'Yöneticiler' : 'Ürünler'}}</h3>
        <br />

        <ul class="list-group" v-if="admin">
          <li v-for="user in users" :key="user.uuid" class="list-group-item">
            <a
              href
              @click="$router.push({ name: 'profile', params: { id: user.uuid } })"
            >{{ user.username }}</a>

            <span style="float: right; margin-left: 30px">
              <i
                data-toggle="modal"
                data-target="#userModal"
                @click="setModalData(user.photo, user.username, user.token)"
                class="fa fa-pencil-alt text-success"
              ></i>
              <i class="fa fa-trash text-danger" style="margin-left: 20px"></i>
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
            <h5 class="modal-title" id="exampleModalLongTitle">Kullanıcı Güncelleme</h5>
          </div>
          <div class="modal-body">
            <input
              type="file"
              ref="photo"
              accept="image/*"
              @change="uploadPhoto"
              style="display: none"
            />

            <center>
              <img :src="modalData.photo" @click="$refs.photo.click()" alt="Avatar" class="avatar" />
              <br />
              <br />
              <input type="text" v-model="modalData.username" class="form-control" />
              <br />
              <strong
                v-if="error"
                class="text-danger"
              >{{ error === 'length' ? 'Kullanıcı adı 3, 20 karakter arası olmalıdır!' : 'Bu kullanıcı adı zaten var!'}}</strong>
            </center>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              ref="close"
              @click="error = false"
              class="btn btn-secondary"
              data-dismiss="modal"
            >Close</button>
            <button type="button" @click="update" class="btn btn-danger">Değişiklikleri kaydet</button>
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
        photo: "",
        username: "",
        token: ""
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
    setModalData(photo, username, token) {
      this.modalData.photo = photo;
      this.modalData.username = username;
      this.modalData.token = token;
    },
    uploadPhoto(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      const reader = new FileReader();
      const vm = this;

      reader.onload = e => (vm.modalData.photo = e.target.result);
      reader.readAsDataURL(files[0]);

      this.modalData.photo = "";
    },
    update() {
      if (
        this.modalData.username.length > 2 &&
        this.modalData.username.length < 21
      ) {
        this.$store.dispatch("updateUser", this.modalData).then(response => {
          if (response === true) {
            this.error = false;
            this.getUsers();
            this.$refs.close.click();
          } else this.error = true;
        });
      } else this.error = "length";
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
  margin-right: 5px;
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
