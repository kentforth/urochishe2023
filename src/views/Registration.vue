<script setup lang="js">
import { 
  ref,
  onBeforeMount,
  onBeforeUnmount
} from "vue";
/*import firebase from "firebase/app";
import "firebase/firestore";*/
import Form from "../components/pages/Registration/Form.vue";
import TotalRiders from '../components/pages/Registration/TotalRiders.vue'
import Agreement from "../components/pages/Registration/Agreement.vue";

const form = ref({})
const bicycles = ref([])
const formType = ref('registration')
const riderNumber = ref(0)
const isRiderSaving = ref(false)
const isExcelButtonVisible = ref(false)

let isAgree = false

onBeforeMount(() => {
  window.addEventListener("keydown", showPasswordPrompt);
  window.scrollTo({ top: 0 });
  getAllData();
})

onBeforeUnmount(() => {
  window.removeEventListener("keyup", showPasswordPrompt);
})

function changeAgreement (agreement) {
  isAgree = agreement;
  form.value.setIsAgree(agreement);
}

function showPasswordPrompt (event) {
  if (event.key === "F10") {
    if (prompt("Please enter password", '') === import.meta.env.VITE_PASSWORD) {
      isExcelButtonVisible.value = true;
    }
  }
}

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAllData () {
  /*this.bicycles = [];
  return firebase
      .firestore()
      .collection("riders")
      .orderBy("number")
      .get()
      .then((snapshot) => {
        snapshot.forEach((document) => {
          this.bicycles.push(document.data());
        });
      });*/
}

async function saveRider (form) {
  isRiderSaving.value = true;
  await getAllData();
  const lastNumber = bicycles.value.length
      ? bicycles.value[bicycles.value.length - 1].number
      : 0;
  const rider = Object.assign({}, form);
  rider.number = lastNumber + 1;
  riderNumber.value = rider.number;
  rider.position = getRandomNumber(0, 85);

  // await firebase.firestore().collection("riders").add(rider);
  await getAllData();
  isRiderSaving.value = false;
  formType.value = "payment";
}

</script>

<template>
  <div
      class="registration"
      :class="formType === 'payment' ? 'no-background' : ''"
  >
    <!--DOWNLOAD ToEXCEL    -->
    <div class="download-buttons">
      <JsonExcel
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
      </JsonExcel>
    </div>

    <div class="wrapper" v-if="formType === 'registration'">
      <TotalRiders v-if="formType === 'registration'" :bicycles="bicycles" />

      <!--AGREEMENT-->
      <Agreement
          v-if="formType === 'registration'"
          :form="form"
          @change-agreement="changeAgreement"
          ref="agreement"
      />

      <!--FORM-->
      <Form
          v-if="formType === 'registration'"
          @save-rider="saveRider"
          ref="form"
          :is-rider-saving="isRiderSaving"
      />
    </div>

    <!--PAYMENT-->
    <div class="payment" v-if="formType === 'payment'">
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
.registration::v-deep {
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
