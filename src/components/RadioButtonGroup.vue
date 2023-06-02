<script setup lang="ts">
import {
  ref, 
  toRefs
} from "vue";

import type { ICheckbox } from "@/types";
import type { PropType } from "vue";

interface IBicycleTypes {
  id: number,
  image: string,
  tooltipText?: string
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
  },
  hasTooltip: {
    type: Boolean,
    default: false
  }
})

let checkboxId = ref(1)
const isTooltipShow = ref(false)
let currentTooltipText = ''
let currentTooltipIndex = ref(0)

const { hasTooltip } = toRefs(props)

function setCheckboxValue (id: number, title: string) {
  checkboxId.value = id
  emit('set-value', title)
}

function showTooltip (id: number, currentIndex: number) {
  if (!hasTooltip.value) {
    return false
  }
  
  if (!isTooltipShow.value) return false
  
  return id === currentIndex;
}

function setCurrentTooltip (index: number, text: string) {
  isTooltipShow.value = true
  currentTooltipText = text
  currentTooltipIndex.value = index
}
</script>

<template>
  <div class="radio-button-group">
    <div v-for="(checkbox, index) in checkboxes" class="radio-button-group__item">
      <Transition name="fade">
        <span class="radio-button-group__tooltip" v-if="showTooltip(index, currentTooltipIndex)">{{currentTooltipText}}</span>
      </Transition>
      
      <img :src="bicycleTypes[index].image" alt="bicycleType" v-if="bicycleTypes.length" class="radio-button-group__image">
      
      <div class="radio-button-group__title">{{checkbox.title}}</div>
      
      <button 
        @click="setCheckboxValue(checkbox.id, checkbox.title)" 
        @mouseover="setCurrentTooltip(index, bicycleTypes[index].tooltipText)"
        @mouseleave="isTooltipShow = false"
      >
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
    position: relative;
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

        .radio-button-group__tooltip {
          left: 60px;
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
  
  &__tooltip {
    position: absolute;
    background-color: $black-900;
    color: $white;
    border-radius: 6px;
    padding: 8px 16px;
    bottom: 100px;
    left: 20px;
    transition: 0.3s ease;
    font-weight: normal;
    
    @media (min-width: $tablet) {
      left: 30px;
    }

    @media (min-width: $laptop) {
      left: 20px;
    }

    @media (min-width: $desktop) {
      left: 30px;
    }
    
    &:after {
      /*content: " ";
      position: relative;
      top: 27px; !* At the bottom of the tooltip *!
      right:30px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: red transparent transparent transparent;*/
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
