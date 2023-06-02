<script setup lang="ts">
import {
  ref,
} from "vue";

import type { ICheckbox } from "@/types";
import type { PropType } from "vue";

interface IBicycleTypes {
  id: number,
  image: string
}

const emit = defineEmits(['set-value'])



const props = defineProps({
  checkboxes: {
    type: Array as PropType<ICheckbox[]>,
    default: {},
    required: true
  },
  bicycleTypes: {
    type: Array as PropType<IBicycleTypes[]>,
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

  @media (max-width: $tablet - 1px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__title, button {
    margin-left: 20%;

    @media (max-width: $tablet) {
      margin-left: 5%;
    }

    @media (min-width: $desktop) {
      margin-left: 32%;
    }
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

    &:nth-child(1) {
      @media (min-width: $tablet + 1px) {
        .radio-button-group__title {
          margin-left: 67px;
        }

        button {
          margin-left: 66px;
        }
      }
      
      @media (min-width: $desktop) {
        .radio-button-group__title {
          margin-left: 135px;
        }

        button {
          margin-left: 130px;
        }
      }
    }
    
    &:nth-child(2) {
      @media (min-width: $tablet + 1px) {
        .radio-button-group__title {
          margin-left: 60px;
        }

        button {
          margin-left: 52px;
        }
      }
      @media (min-width: $desktop) {
        .radio-button-group__title {
          margin-left: 116px;
        }

        button {
          margin-left: 107px;
        }
      }
    }
    
    &:nth-child(3) {
      @media (min-width: $tablet + 1px) {
        .radio-button-group__title {
          margin-left: 46px;
        }

        button {
          margin-left: 66px;
        }
      }
      
      @media (min-width: $desktop) {
        .radio-button-group__title {
          margin-left: 116px;
        }

        button {
          margin-left: 135px;
        }
      }
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
