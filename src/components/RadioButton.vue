<script setup lang="ts">
import {
  ref
} from "vue";

const isChecked = ref(false)

const emit = defineEmits(['toggle-checkbox'])

function toggleCheckbox () {
  isChecked.value = !isChecked.value
  emit("toggle-checkbox", isChecked.value);
}

</script>

<template>
  <div class="checkbox">
    <img
      v-if="!isChecked"
      @click="toggleCheckbox"
      src="../assets/images/icons/checkbox-unchecked.svg"
      alt="checkbox-unchecked"
      class="checkbox__unchecked"
    />
    <img
      v-else
      @click="toggleCheckbox"
      src="../assets/images/icons/checkbox-checked.svg"
      alt="checkbox-checked"
      class="checkbox__checked"
    />
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  height: 66px;
  &__unchecked {
    height: 50px;
    cursor: pointer;
  }

  &__checked {
    transform: translateY(-15px);
    height: 66px;
    cursor: pointer;
  }
}
</style>
