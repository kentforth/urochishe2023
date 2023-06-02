<script setup lang="ts">
import { 
  toRefs, 
  computed 
} from "vue";

import type { PropType } from 'vue'
import type { IRider } from "@/types";

import mtb from "@/assets/images/icons/mtb.png"
import road from "@/assets/images/icons/road.png"
import singleSpeed from "@/assets/images/icons/single-speed.png"

const props = defineProps({
  riders: {
    type: Array as PropType<IRider[]>,
    required: true
  }
})

const { riders } = toRefs(props)

const totalRiders = computed(() => {
  return riders.value.length ? riders.value.length : ''
})

function getImageUrl (type: string) {
  switch (type) {
    case "(ROAD)":
      return road
    case "(MTB)":
      return mtb
    case "(Fixed/Single)":
      return singleSpeed
    default:
      return road
  }
}
</script>

<template>
  <div class="total">
    <h3>НАС УЖЕ:</h3>

    <!--BICYCLES-->
    <div class="total__bicycles">
      <img
        :src="getImageUrl(rider.bicycleType)"
        alt="RD"
        v-for="rider in riders"
        :key="rider.lastName"
        :style="{ left: rider.position + '%' }"
      />
    </div>
    <h3>{{ totalRiders }}</h3>
  </div>
</template>

<style scoped lang="scss">
.total {
  display: grid;
  grid-template-columns: 0.2fr 1fr 80px;
  padding: 0 6%;

  h3 {
    font-family: "Bahnschrift Bold SemiCondensed", sans-serif;
    font-weight: 900;
    text-transform: lowercase;
    font-size: rem(25px);
    margin: 0;
    line-height: 15px;
    
    &:last-child {
      margin-left: 40px;
    }
  }

  @include responsive(phone) {
    grid-template-columns: 80px 1fr 50px;
  }

  &__bicycles {
    position: relative;
    border-bottom: 2px solid $black;
    width: 100%;

    img {
      position: absolute;
      bottom: -11px;
      left: 0;
      width: 15%;

      @include responsive(tab-port) {
        width: 25%;
      }
      
      @media (max-width: $tablet) {
        bottom: -6px;
      }
      
    }
  }
}
</style>
