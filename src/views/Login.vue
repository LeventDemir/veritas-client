<template>
  <section class="relative" id="spesification">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-12">
          <div class="page-title">
            <h2>
              <strong>Bayi Girişi | Oturum Ekranı</strong>
            </h2>
          </div>
          <div class="space-40"></div>
          <form action method="POST" role="form">
            <div class="form-group">
              <label for>Kullanıcı adı</label>
              <input type="text" name="username" class="form-control" id />

              <label for>Parola</label>
              <input type="password" name="password" class="form-control" id />
            </div>
            <button type="submit" name="loginBTN" value="login" class="btn btn-danger btn-block">
              Oturum
              Aç
            </button>
          </form>
          <div class="space-40"></div>
        </div>
      </div>
    </div>
  </section>
</template>
