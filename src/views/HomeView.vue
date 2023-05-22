<script setup lang="ts">
import {db}  from '@/services/firebase'
import { query, doc, collection, getDocs, addDoc } from 'firebase/firestore'

import { onMounted } from "vue";
import { CollectionReference } from 'firebase/firestore'

import MainDetails from '@/components/pages/Main/MainDetails.vue'
import MainSponsors from '@/components/pages/Main/MainSponsors.vue'
import MainDownloadButtons from '@/components/pages/Main/MainDownloadButtons.vue'

export interface IRider extends CollectionReference{
  name: string,
  age: number
}

const riders = []

const ridersCollection = collection(db, 'riders')

/*
onMounted(() => {
  getRiders()
})
*/

/*async function getRiders () {
  const q = await query(collection(db, 'riders'));
  const docs = await getDocs(q)
  docs.forEach((doc) => {
    riders.push(doc.data())
  });
}

async function onClick () {
  const docData: IRider = <IRider>{
    name: 'Вася',
    age: 35
  }
  await addDoc(ridersCollection, docData)
}*/
</script>

<template>
  <div class="home">
    <!--LOGO-->
    <div class="logo">
      <img src="../assets/images/main/logo.svg" alt="logo" />
    </div>

    <MainDetails />

    <MainDownloadButtons />

    <MainSponsors />
  </div>
</template>
