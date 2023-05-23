<script setup lang="ts">
import { ref } from 'vue'

const sponsors = ref([
  {
    alt: "nerpa",
    url: "https://vk.com/nerpagear",
    image: 'src/assets/images/main/icons/nerpa.png',
  },
  {
    alt: "cycling",
    url: "https://vk.com/cykling",
    image: 'src/assets/images/main/icons/zukling.png',
  },
  {
    alt: "ejik",
    url: "https://vk.com/hedgehoggbags",
    image: 'src/assets/images/main/icons/ejik.png',
  },
  {
    alt: "fatrat",
    url: "https://vk.com/club19154833",
    image: 'src/assets/images/main/icons/fatrat.png',
  },
  {
    alt: "polar",
    url: "https://vk.com/polarfoxbikepack",
    image: 'src/assets/images/main/icons/polar.png',
  },
  {
    alt: "fil",
    url: "https://www.instagram.com/phils_crafts/",
    image: 'src/assets/images/main/icons/fil.png',
  },
  {
    alt: "sarmatina",
    url: "https://vk.com/sarmatian_ways",
    image: 'src/assets/images/main/icons/sarmatina.png',
  },
  {
    alt: "noji",
    url: "https://vk.com/knifetomsk",
    image: 'src/assets/images/main/icons/noji.png',
  },
  {
    alt: "itsmybike",
    url: "https://vk.com/itsmybike",
    image: 'src/assets/images/main/icons/itsmybike.png',
  },
  {
    alt: "proto",
    url: "https://vk.com/protostudia",
    image: 'src/assets/images/main/icons/proto.png',
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
