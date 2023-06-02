<script setup lang="ts">
import { 
  ref,
  computed
} from 'vue'

import { useRouter } from 'vue-router';

import btnRegister from "@/assets/images/main/btn-register.png"
import btnRegisterHover from "@/assets/images/main/btn-register-hover.png"

const router = useRouter()

const isHover = ref(false)

const image = computed(() => {
  return isHover.value ? btnRegisterHover : btnRegister
})

function goToRegistration () {
  router.push("/registration");
}
</script>

<template>
  <div class="main-content">
    <img src="../../../assets/images/main/wood.png" alt="wood" class="main-content__wood" />

    <button
      class="main-content__register"
      @click="goToRegistration"
      @mouseover="isHover = !isHover"
      @mouseleave="isHover = !isHover"
    >
      <img
        :src="image"
        alt="btn-register"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wood {
    width: 80%;
  }
  
  &__register {
    position: absolute;
    bottom: -10px;

    @media (min-width: 768px) {
      bottom: 30px;
    }
    
    img {
      width: 300px;

      @media (max-width: 360px) {
        width: 250px;
      }
      
      @media (min-width: 768px) {
        width: 600px;
      }
    }
  }
}
</style>
