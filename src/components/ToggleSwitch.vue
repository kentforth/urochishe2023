<script setup lang="ts">
import {
  ref,
  defineEmits
} from "vue";

const boxClass = ref('')
const isChecked = ref(false)

const emit = defineEmits(['toggle-switch'])

function toggleSwitchState () {
  boxClass.value = isChecked.value ? "box--inactive" : "box--active";
  isChecked.value = !isChecked.value;
  emit("toggle-switch", isChecked.value);
}
</script>

<template>
  <div class="switch" @click="toggleSwitchState">
    <img
      v-if="!isChecked"
      src="../assets/images/icons/box-start.png"
      alt="switch-inactive"
      class="switch__outer"
    />
    <img
      v-else
      src="../assets/images/icons/box-end.png"
      alt="switch-active"
      class="switch__outer"
    />

    <img
      src="../assets/images/icons/box-inner.svg"
      alt="box-inner"
      :class="boxClass"
      class="switch__inner"
    />
  </div>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  cursor: pointer;

  &__outer {
    position: absolute;
    top: 0;
    left: 0;

    @include responsive(tab-port) {
      width: 65px !important;
    }
  }

  &__inner {
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 999;
    height: 28px;

    @include responsive(tab-port) {
      width: 30px !important;
      top: 0px;
    }
  }

  .box {
    &--active {
      transition: 0.3s ease;
      transform: translateX(44px);

      @include responsive(tab-port) {
        transform: translateX(27px);
      }
    }
    &--inactive {
      transition: 0.3s ease;
      transform: translateX(0);
    }
  }
}
</style>
