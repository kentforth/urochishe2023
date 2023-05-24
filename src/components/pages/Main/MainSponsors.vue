<script setup lang="ts">
import { ref } from 'vue'

import fil from "@/assets/images/main/icons/fil.png"
import ejik from "@/assets/images/main/icons/ejik.png"
import noji from "@/assets/images/main/icons/noji.png"
import nerpa from "@/assets/images/main/icons/nerpa.png"
import polar from "@/assets/images/main/icons/polar.png"
import proto from "@/assets/images/main/icons/proto.png"
import fatrat from "@/assets/images/main/icons/fatrat.png"
import zukling from "@/assets/images/main/icons/zukling.png"
import sarmatina from "@/assets/images/main/icons/sarmatina.png"
import itsmybike from "@/assets/images/main/icons/itsmybike.png"

const sponsors = ref([
  {
    alt: "nerpa",
    url: "https://vk.com/nerpagear",
    image: nerpa,
  },
  {
    alt: "zukling",
    url: "https://vk.com/cykling",
    image: zukling,
  },
  {
    alt: "ejik",
    url: "https://vk.com/hedgehoggbags",
    image: ejik,
  },
  {
    alt: "fatrat",
    url: "https://vk.com/club19154833",
    image: fatrat,
  },
  {
    alt: "polar",
    url: "https://vk.com/polarfoxbikepack",
    image: polar,
  },
  {
    alt: fil,
    url: "https://www.instagram.com/phils_crafts/",
    image: fil,
  },
  {
    alt: "sarmatina",
    url: "https://vk.com/sarmatian_ways",
    image: sarmatina,
  },
  {
    alt: "noji",
    url: "https://vk.com/knifetomsk",
    image: noji,
  },
  {
    alt: "itsmybike",
    url: "https://vk.com/itsmybike",
    image: itsmybike,
  },
  {
    alt: "proto",
    url: "https://vk.com/protostudia",
    image: proto,
  },
])

</script>

<template>
  <div class="sponsors">
    <a
        v-for="sponsor in sponsors"
        :key="sponsor.alt"
        :href="sponsor.url"
        target="_blank"
        class="sponsors__link"
    >
      <img :src="sponsor.image" :alt="sponsor.alt" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.sponsors {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 0 100px 0;

    a {
      height: max-content;
      cursor: pointer;
      margin-right: 20px;

      img {
        @include responsive(phone) {
          width: 130px;
        }
      }
    }
  
  &__link {
    img {
      max-width: 120px;

      }
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7) {
      img {
        width: 60px;
      }
    }

    &:nth-child(9) {
      img {
        width: 70px;
      }
    }
  }
}
</style>
