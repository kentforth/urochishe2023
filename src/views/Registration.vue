<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onBeforeUnmount, computed
} from "vue";

import "firebase/firestore";
import { db }  from '@/services/firebase'
import {
  query,
  doc,
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore'

import type { IRider } from '@/types';

import Form from "@/components/pages/Registration/Form.vue";
import TotalRiders from '@/components/pages/Registration/TotalRiders.vue'
import Agreement from "@/components/pages/Registration/Agreement.vue";

const riders = ref<IRider[]>([])
const formType = ref('registration')
const riderNumber = ref(0)
const isSubmitDisabled = ref(true)
const isExcelButtonVisible = ref(false)

onBeforeMount(() => {
  window.addEventListener("keydown", showPasswordPrompt);
  window.scrollTo({ top: 0 });
  getRiders();
})

onBeforeUnmount(() => {
  window.removeEventListener("keyup", showPasswordPrompt);
})

function setAgreement (hasAgreement: boolean) {
  isSubmitDisabled.value = !hasAgreement
}

function saveRider (number: string | number) {
  riderNumber.value = number
  formType.value = 'payment'
}

function showPasswordPrompt (event: any) {
  if (event.key === "F10") {
    if (prompt("Please enter password", '') === import.meta.env.VITE_PASSWORD) {
      isExcelButtonVisible.value = true;
    }
  }
}

async function getRiders () {
  riders.value = []
  const q = await query(collection(db, 'riders'));
  const docs = await getDocs(q)
  docs.forEach((doc) => {
    riders.value.push(doc.data())
  });
}



</script>

<template>
  <div
      class="registration"
      :class="formType === 'payment' ? 'no-background' : ''"
  >
    <!--DOWNLOAD ToEXCEL    -->
    <div class="download-buttons">
<!--      <JsonExcel
          v-if="isExcelButtonVisible"
          :data="bicycles"
          class="btn-excel"
          name="riders.xls"
          :export-fields="{
          Номер: 'number',
          Фамилия: 'last_name',
          Имя: 'name',
          Возраст: 'age',
          Пол: 'gender',
          Велосипед: 'bicycleType',
          Категория: 'category',
          Телефон: 'phone',
        }"
      >
        <span>Сохранить в excel</span>
      </JsonExcel>-->
    </div>

    <div class="wrapper" v-if="formType === 'registration'">
      <TotalRiders :riders="riders" />

      <!--AGREEMENT-->
      <Agreement @set-agreement="setAgreement" />

      <!--FORM-->
      <Form
        :is-disabled="isSubmitDisabled"
        @save-rider="saveRider"
      />
    </div>

    <!--PAYMENT-->
    <div class="payment" v-else>
      <div class="payment__content">
        <p>Поздравляем! Вы зарегестрировались на гонку</p>
        <p>Урочище</p>
        <p>Ваш номер участника</p>
        <p class="rider-number">{{ riderNumber }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.registration {
  background-image: url("../assets/images/details-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;

  .download-buttons {
    display: flex;
    justify-content: center;
    padding: 2em;

    .btn-excel {
      width: max-content;
      background-color: $black;
      display: flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 600;
      color: $pink;

      img {
        width: 20px;
        margin-left: 5px;
      }
    }
  }
}

.wrapper {
  width: 75%;
  margin: 0 auto;
  padding: 8% 0 0 0;
  background-color: $white;
  -webkit-box-shadow: 1px 1px 15px 5px #000000;
  box-shadow: 1px 1px 15px 5px #000000;

  @include responsive(phone) {
    width: 90%;
  }
}

h3 {
  font-family: "Bahnschrift Bold SemiCondensed", sans-serif;
  font-weight: 700;
  font-size: rem(25px);
  margin: 0;
  line-height: 15px;
}

h3:nth-child(1) {
  width: rem(130px);
  margin-right: rem(10px);

  @include responsive(phone) {
    font-size: rem(16px);
  }
}

h3:nth-child(3) {
  margin-left: rem(25px);
  font-size: rem(30px);

  @include responsive(phone) {
    font-size: 20px;
  }
}

.notion {
  font-size: rem(15px);
  color: $red;
  padding: 0 6%;
}

.error {
  color: $error;
}

.showError {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.hideError {
  opacity: 0;
}

.payment {
  text-align: center;
  margin: 10% auto 0 auto;
  padding: 8% 0 0 0;
  width: 75%;
  background-color: $white;
  -webkit-box-shadow: 1px 1px 15px 5px #000000;
  box-shadow: 1px 1px 15px 5px #000000;

  p {
    font-size: rem(40px);
    letter-spacing: 1px;

    @include responsive(phone) {
      font-size: rem(25px);
    }
  }

  p:nth-child(3) {
    font-size: rem(50px);

    @include responsive(phone) {
      font-size: rem(35px);
      margin-top: rem(20px);
    }
  }

  span {
    color: $red-bright;
  }

  .rider-number {
    font-size: rem(80px);
    margin: rem(20px) 0;
  }
}

.no-background {
  background-image: none;
}
</style>
