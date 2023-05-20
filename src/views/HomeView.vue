<script setup lang="ts">
import {db}  from '@/services/firebase'
import { query, doc, collection, getDocs, addDoc } from 'firebase/firestore'

import { onMounted } from "vue";
import firebase from "firebase/compat";
import CollectionReference from "firebase/compat";

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
  console.log('RIDERS', riders)
}

async function onClick () {
  const docData: CollectionReference = {
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
