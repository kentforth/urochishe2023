<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ref } from 'vue'

const router = useRouter()

const isButtonRegisterHover = ref(false)
const sponsorsRow1 = ref([
  {
    id: 1,
    alt: "sportceh",
    url: "https://vk.com/sportceh70",
    image: 'src/assets/images/main/sportceh.svg',
  },
  {
    id: 2,
    alt: "gluhoman",
    url: "https://vk.com/purplexblvze",
    image: 'src/assets/images/main/gluhoman.svg',
  },
  {
    id: 3,
    alt: "sarmatian",
    url: "https://vk.com/sarmatian_ways",
    image: 'src/assets/images/main/sarmatian.svg',
  },
  {
    id: 4,
    alt: "zukling",
    url: "https://vk.com/cykling",
    image: 'src/assets/images/main/zukling.svg',
  },
  {
    id: 5,
    alt: "neutrino",
    url: "https://vk.com/neutrino_components",
    image: 'src/assets/images/main/neutrino.svg',
  },
])

const sponsorsRow2 = ref([
  {
    id: 6,
    alt: "gosha",
    url: "https://vk.com/gobags",
    image: 'src/assets/images/main/gosha.svg',
  },
  {
    id: 8,
    alt: "noji",
    url: "https://vk.com/knifetomsk",
    image: 'src/assets/images/main/noji.svg',
  },
  {
    id: 7,
    alt: "polar-fox",
    url: "https://vk.com/polarfoxbikepack",
    image: 'src/assets/images/main/polar-fox.svg',
  },
])

function goToRegistration () {
  router.push("/Registration");
}
</script>

<template>
  <div class="sponsors">
    <div class="register">
      <button
        class="btn-register"
        @click="goToRegistration"
        @mouseover="isButtonRegisterHover = true"
        @mouseleave="isButtonRegisterHover = false"
      >
        <img
          v-if="isButtonRegisterHover"
          src="../../../assets/images/main/btn-register-hover.svg"
          alt="btn-register"
        />
        <img
          v-else
          src="../../../assets/images/main/btn-register.svg"
          alt="btn-register"
        />
      </button>
    </div>

    <div class="sponsors-container">
      <img
        src="../../../assets/images/main/contour-3.png"
        alt="contour 2"
        class="sponsors-image"
      />

      <div class="sponsors-items">
        <a
          v-for="sponsor in sponsorsRow1"
          :key="sponsor.id"
          :href="sponsor.url"
          target="_blank"
        >
          <img :src="sponsor.image" :alt="sponsor.alt" />
        </a>
      </div>
      <div class="sponsors-items">
        <a
          v-for="sponsor in sponsorsRow2"
          :key="sponsor.id"
          :href="sponsor.url"
          target="_blank"
        >
          <img :src="sponsor.image" :alt="sponsor.alt" />
        </a>
      </div>
    </div>

    <div></div>
  </div>
</template>



<style scoped lang="scss">
.sponsors {
  position: relative;

  .register {
    width: 100%;
    position: absolute;
    top: -160px;
    left: 0;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    @include responsive(tab-port) {
      top: -100px;
    }

    @include responsive(phone) {
      top: -60px;
    }

    .btn-register {
      z-index: 999;
      img {
        height: 200px;

        @include responsive(tab-port) {
          height: 150px;
        }
        @include responsive(phone) {
          height: 80px;
        }
      }
    }
  }

  .sponsors-container {
    width: 100%;
    position: relative;

    .sponsors-image {
      width: 100%;
      height: 500px;
      position: absolute;
      z-index: -1;
      bottom: 20px;
      left: 0;
      object-fit: cover;
      object-position: top;

      @include responsive(tab-port) {
        bottom: -120px;
        height: 1000px;
        object-fit: cover;
      }

      @include responsive(phone) {
        bottom: 145px;
        height: 100%;
        object-fit: cover;
      }
    }

    .sponsors-items {
      position: relative;
      width: 100%;
      left: 0;
      padding: 50px 30px 10px 30px;
      display: grid;
      grid-gap: 40px;
      grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: start;

      @include responsive(tab-port) {
        padding: 40px 30px 0 30px;
      }

      a {
        height: max-content;
        cursor: pointer;

        img {
          @include responsive(phone) {
            width: 130px;
          }
        }
      }
    }

    .sponsors-items:nth-child(3) {
      padding-top: 30px;
      padding-bottom: 100px;
    }
  }
}
</style>
