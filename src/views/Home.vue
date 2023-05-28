<script setup lang="ts">
import {
  onMounted
} from "vue";


import MainDetails from '@/components/pages/Main/MainDetails.vue'
import MainContent from '@/components/pages/Main/MainContent.vue'
import MainSponsors from '@/components/pages/Main/MainSponsors.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<template>
  <div class="home">
    <MainDetails />

    <MainContent />

    <MainSponsors />
  </div>
</template>
