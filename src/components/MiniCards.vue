<template>
  <div class="row text-white">
    <router-link
      :to="{ name: 'categorie', params: { categorie: 'duvar' } }"
      data-wow-delay="0.2s"
      class="col-xs-6 text-center wow fadeInRight lgwith"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
    >
      <a href style="color: rgb(255, 255, 255);">
        <div class="single-price blue">
          <div class="price-tag">Duvar Tipi Klima</div>
          <div class="space-30"></div>
          <img src="/src/assets/img/duvartipi.png" alt />
          <div class="space-20"></div>
        </div>
        <div class="space-30"></div>
      </a>
    </router-link>

    <router-link
      :to="{ name: 'categorie', params: { categorie: 'salon' } }"
      data-wow-delay="0.2s"
      class="col-xs-6 text-center wow fadeInRight lgwith"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
    >
      <a style="color: rgb(255, 255, 255);">
        <div class="single-price pink">
          <div class="price-tag">Salon Tipi Klima</div>
          <div class="space-30"></div>
          <img src="/src/assets/img/salontipi.png" alt />
          <div class="space-20"></div>
        </div>
        <div class="space-30"></div>
      </a>
    </router-link>

    <router-link
      :to="{ name: 'categorie', params: { categorie: 'kaset' } }"
      data-wow-delay="0.2s"
      class="col-xs-6 text-center wow fadeInRight lgwith"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
    >
      <a href style="color: rgb(255, 255, 255);">
        <div class="single-price green">
          <div class="price-tag">Kaset Tipi Klima</div>
          <div class="space-30"></div>
          <img src="/src/assets/img/kasettipi.png" alt />
          <div class="space-20"></div>
        </div>
        <div class="space-30"></div>
      </a>
    </router-link>

    <router-link
      :to="{ name: 'categorie', params: { categorie: 'kanal' } }"
      data-wow-delay="0.2s"
      class="col-xs-6 text-center wow fadeInRight lgwith"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
    >
      <a href style="color: rgb(255, 255, 255);">
        <div class="single-price gold">
          <div class="price-tag">Kanallı Tip Klima</div>
          <div class="space-30"></div>
          <img src="/src/assets/img/kanaltipi.png" alt />
          <div class="space-20"></div>
        </div>
        <div class="space-30"></div>
      </a>
    </router-link>

    <router-link
      :to="{ name: 'categorie', params: { categorie: 'multi' } }"
      data-wow-delay="0.2s"
      class="col-xs-6 text-center wow fadeInRight lgwith"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;"
    >
      <a href style="color: rgb(255, 255, 255);">
        <div class="single-price purple">
          <div class="price-tag">Multi Tipi Klima</div>
          <div class="space-30"></div>
          <img src="/src/assets/img/multi.png" alt />
          <div class="space-20"></div>
        </div>
        <div class="space-30"></div>
      </a>
    </router-link>
  </div>
</template>