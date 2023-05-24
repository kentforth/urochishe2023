<script setup lang="ts">
import {
  ref,
  toRefs,
  PropType,
} from "vue";

import type { ICheckbox} from "@/types";

const emit = defineEmits(['change-checkbox'])

const props = defineProps({
  checkboxes: {
    type: Array as PropType<ICheckbox[]>,
    default: {},
    required: true
  }
})

const { checkboxes } = toRefs(props)

const isCheckedLeft = ref(true)
const isCheckedRight = ref(false)

let checkboxId = ref(1)

function setCheckboxRight () {
  isCheckedRight.value = true;
  isCheckedLeft.value = false;
  emit("choose-checkbox", "right");
}

function setCheckboxLeft () {
  isCheckedRight.value = false;
  isCheckedLeft.value = true;
  emit("choose-checkbox", "left");
}

function changeCheckbox (id: number, title: string) {
  checkboxId.value = id
  emit('change-checkbox', title)
}

</script>

<template>
  <div class="radio-button-group">
    <div v-for="checkbox in checkboxes" class="radio-button-group__item">
      <div class="radio-button-group__title">{{checkbox.title}}</div>
      
      <button @click="changeCheckbox(checkbox.id, checkbox.title)">
        <img 
          v-if="checkboxId === checkbox.id"
          src="../assets/images/icons/checkbox-checked.svg"
          alt="checkbox-unchecked"
          class="radio-button-group__checked"
        />
        <img
          v-else
          src="../assets/images/icons/checkbox-unchecked.svg"
          alt="checkbox-unchecked"
          class="radio-button-group__unchecked"
        />
      </button>
    </div>
<!--    <div class="checkbox__left">
      <span>{{ titleLeft }}</span>
      <div v-if="!isCheckedLeft" class="checkbox__container">
        <img
          @click="setCheckboxLeft"
          src="../assets/images/icons/checkbox-unchecked.svg"
          alt="checkbox-unchecked"
          class="checkbox__unchecked"
        />
      </div>
      <div v-else class="checkbox__container">
        <img
          @click="setCheckboxLeft"
          src="../assets/images/icons/checkbox-checked.svg"
          alt="checkbox-checked"
          class="checkbox__checked"
        />
      </div>
    </div>

    <div class="checkbox__right" :class="checkboxRightClass">
      <span>{{ titleRight }}</span>
      <div v-if="!isCheckedRight" class="checkbox__container">
        <img
          @click="setCheckboxRight"
          src="../assets/images/icons/checkbox-unchecked.svg"
          alt="checkbox-unchecked"
          class="checkbox__unchecked"
        />
      </div>
      <div v-else class="checkbox__container">
        <img
          @click="setCheckboxRight"
          src="../assets/images/icons/checkbox-checked.svg"
          alt="checkbox-checked"
          class="checkbox__checked"
        />
      </div>
    </div>-->
  </div>
</template>

<style scoped lang="scss">
.radio-button-group {
  display: flex;
  align-items: flex-end;
  
  &__title {
    background: red;
    margin-left: 10px;
  }
  
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-end;
    width: 66px;
  }
  
  button {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 66px;
  }

  &__unchecked {
    height: 52px;
    cursor: pointer;
    transform: translateX(-2px);

    @include responsive(tab-port) {
      height: 45px;
    }
  }

  &__checked {
    height: 66px;
    cursor: pointer;

    @include responsive(tab-port) {
      height: 59px;
    }
  }

}
</style>
