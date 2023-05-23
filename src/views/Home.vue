<script setup lang="ts">
import {db}  from '@/services/firebase'
import { query, doc, collection, getDocs, addDoc } from 'firebase/firestore'

import { onMounted } from "vue";
import { CollectionReference } from 'firebase/firestore'

import MainDetails from '@/components/pages/Main/MainDetails.vue'
import MainContent from '@/components/pages/Main/MainContent.vue'
import MainSponsors from '@/components/pages/Main/MainSponsors.vue'

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
    <MainDetails />

    <MainContent />

    <MainSponsors />
  </div>
</template>
