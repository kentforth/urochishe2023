<script setup lang="ts">
import {
  ref,
} from "vue";

import type { ICheckbox} from "@/types";
import type { PropType } from "vue";

const emit = defineEmits(['set-value'])

const props = defineProps({
  checkboxes: {
    type: Array as PropType<ICheckbox[]>,
    default: {},
    required: true
  },
  bicycleTypes: {
    type: Array,
    default: []
  }
})

let checkboxId = ref(1)

function setCheckboxValue (id: number, title: string) {
  checkboxId.value = id
  emit('set-value', title)
}

</script>

<template>
  <div class="radio-button-group">
    <div v-for="(checkbox, index) in checkboxes" class="radio-button-group__item">
      <img :src="bicycleTypes[index].image" alt="bicycleType" v-if="bicycleTypes.length" class="radio-button-group__image">
      
      <div class="radio-button-group__title">{{checkbox.title}}</div>
      
      <button @click="setCheckboxValue(checkbox.id, checkbox.title)">
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
  </div>
</template>

<style scoped lang="scss">
.radio-button-group {
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media (max-width: $tablet) {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  
  
  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-end;

    @media (max-width: $tablet) {
      margin-bottom: 10px;
      align-items: center;
    }
  }
  
  &__title, button {
    margin-left: 20%;
    
    @media (max-width: $tablet) {
      margin-left: 5%;
    }

    @media (min-width: $desktop) {
      margin-left: 30%;
    }
  }
  
  &__image {
    width: 170px;
    
    @media (min-width: $laptop) {
      width: 200px;
    }
    
    @media (min-width: $desktop) {
      width: 300px;
    }
    
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
