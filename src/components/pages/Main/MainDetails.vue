<script setup lang="ts">
import { 
  ref,
  computed
} from 'vue'

import { useRouter } from 'vue-router';

import btnDetails from "@/assets/images/main/btn-details.png"
import btnDetailsHover from "@/assets/images/main/btn-details-hover.png"

const router = useRouter()

const isHover = ref(false)

const image = computed(() => {
  return isHover.value ? btnDetailsHover : btnDetails
})

function goToDetails () {
  router.push("/details");
}
</script>

<template>
  <div class="details">
    <img src="@/assets/images/main/logo.png" alt="logo" class="details__logo"/>
    
    <div class="details__buttons">
      <button
        class="details__btn"
        @click="goToDetails"
        @mouseover="isHover = !isHover"
        @mouseleave="isHover = !isHover"
      >
        <img
          :src="image"
          alt="btn-details"
        />
      </button>
    </div>
    
    <p>
      (всякiй природный знакъ, мѣра, естественный межевой признакъ, как: рѣчка,
      гора, оврагъ, гривка, лѣсъ и пр.)
    </p>
    <h1>
      мультиформатная грунтовая гонка-погруженіе въ ландшафты юга Томской
      области <br />
      гонка-испытаніе маршрутами многоликаго притомья
    </h1>
    
  </div>
</template>

<style scoped lang="scss">
.details {
  color: $black;
  padding: 3% 5% 0 5%;
  text-align: center;
  background: url('@/assets/images/main/contour-main-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  &__logo {
    width: 60%;
  }

  p {
    font-size: 1.2vw;

    @include responsive(tab-port) {
      font-size: 1.5vw;
    }

    @include responsive(phone) {
      font-size: 1.7vw;
    }
  }

  h1 {
    margin-top: rem(10px);
    font-size: 1.8vw;

    @include responsive(tab-port) {
      font-size: 2.2vw;
    }

    @include responsive(phone) {
      font-size: 2.3vw;
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    height: 140px;
  }

  &__btn {
    @include responsive(phone) {
      margin-bottom: rem(20px);
    }

    img {
      width: 300px;

      @include responsive(tab-port) {
        width: 150px;
      }
    }
  }
}
</style>
