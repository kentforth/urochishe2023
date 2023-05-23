<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router';

const router = useRouter()

const isButtonRegisterHover = ref(false)

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
        @mouseover="isButtonRegisterHover = true"
        @mouseleave="isButtonRegisterHover = false"
    >
      <img
          v-if="isButtonRegisterHover"
          src="../../../assets/images/main/btn-register-hover.png"
          alt="btn-register"
      />
      <img
          v-else
          src="../../../assets/images/main/btn-register.png"
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
      
      @media (min-width: 768px) {
        width: 600px;
      }
    }
  }
}
</style>
