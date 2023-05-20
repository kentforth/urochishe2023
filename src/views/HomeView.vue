<script setup lang="ts">
import {db}  from '@/services/firebase'
import { query, doc, collection, getDocs, addDoc } from 'firebase/firestore'

import { onMounted } from "vue";
import { CollectionReference } from 'firebase/firestore'

export interface IRider extends CollectionReference{
  name: string,
  age: number
}

const riders = []

const ridersCollection = collection(db, 'riders')

onMounted(() => {
  getRiders()
})

async function getRiders () {
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
}
</script>

<template>
  <div>
    <button @click="onClick">
      CLICK
    </button>
  </div>
</template>
