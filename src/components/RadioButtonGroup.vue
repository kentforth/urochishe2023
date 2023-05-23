<script setup lang="ts">
import {
  ref
} from "vue";

const isCheckedLeft = ref(true)
const isCheckedRight = ref(false)

const emit = defineEmits(['choose-checkbox'])

const props = defineProps({
  titleLeft: {
    type: String,
    default: "",
  },
  titleRight: {
    type: String,
    default: "",
  },
  checkboxRightClass: {
    type: String,
    default: "checkbox-right-class",
  },
})

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

</script>

<template>
  <div class="checkbox">
    <div class="checkbox__left">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  align-content: center;

  span {
    width: max-content;
    margin-left: 20px;
    font-weight: 800;
    font-size: 20px;

    @include responsive(tab-port) {
      font-size: 12px;
    }
  }

  &__container {
    height: 66px;
    display: flex;
    align-items: flex-end;

    @include responsive(tab-port) {
      height: 46px;
    }
  }

  &__left,
  &__right {
    width: 90px;
    display: flex;
    flex-direction: column;
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
