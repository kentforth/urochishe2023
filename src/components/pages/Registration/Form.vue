<script setup lang="ts">
import {
  ref,
  watch,
  toRefs,
  computed,
  defineProps,
  defineEmits
} from "vue";

import "firebase/firestore";
// import { vMaska } from "maska"
import RadioButtonGroup from "../../RadioButtonGroup.vue";

import { IForm } from "@/types";

import { Form, Field } from 'vee-validate';

const emit = defineEmits(['save-rider'])

const props = defineProps({
  formType: {
    type: String,
    default: "registration",
  },
  isRiderSaving: {
    type: Boolean,
    required: true,
  },
})

const { formType, isRiderSaving} = toRefs(props)

const isDisabled = true

const form = ref<IForm>({
  age: null,
  city: "",
  name: "",
  phone: "",
  number: 0,
  gender: "М",
  isAgree: false,
  lastName: "",
  category: "Гонщик",
  bicycleType: "RIGID"
})

/*watch('$v.$error', (newUsername) => {
  // Do something with the updated value.
});*/

/*  watch: {
    "$v.$error": {
      handler() {
        this.isDisabled = this.isFormValid();
      },
      deep: true,
    },
  },*/

/*  computed: {
    isButtonDisabled() {
      return this.isDisabled || !this.form.isAgree;
    },
  },*/

/*  validations: {
    form: {
      name: { required },
      last_name: { required },
      age: { required },
      city: { required },
      phone: { required },
    },
  },*/

function setIsAgree (agreement) {
  form.value.isAgree = agreement;
}

function setGender (gender) {
  form.value.gender = gender === "right" ? "Ж" : "М";
}

function setCategory (category) {
  form.value.category = category === "right" ? "Исследователь" : "Гонщик";
}

function setBicycleType (type) {
  form.value.bicycleType = type === "right" ? "HARDTAIL" : "RIGID";
}

function onSubmit (values) {
  console.log('VALUES', values)
  /*form.value.$touch();
  if (this.$v.form.$error || this.isButtonDisabled) {
    return;
  }
  form.value.age = +form.value.age;
  emit("save-rider", form.value);*/
}


/*    isFormValid() {
      const isValid = !Object.values(this.$v.form.$model).every(
          (x) => x !== null && x !== ""
      );
      return isValid;
    },*/

</script>

<template>
  <Form class="form" @submit="onSubmit">
    <div :class="isRiderSaving ? 'blur' : ''">
      <!--NAME-->
      <div class="form__item">
        <label for="name">ИМЯ:**</label>
        <Field
          autocomplete="off"
          type="text"
          id="name"
          name="name"
          placeholder="Введите имя"
          v-model.trim="form.name"
        />
<!--        <p class="error" v-if="$v.form.name.$error">Введите имя</p>-->
      </div>

      <!--LAST NAME-->
      <div class="form__item">
        <label for="last_name">ФАМИЛИЯ:</label>
        <Field
          type="text"
          autocomplete="off"
          id="last_name"
          placeholder="Введите фамилию"
          name="lastName"
          v-model.trim="form.lastName"
        />
<!--        <p class="error" v-if="$v.form.last_name.$error">Введите фамилию</p>-->
      </div>

      <!--GENDER-->
      <div class="form__item_gender">
        <label for="#">ПОЛ:</label>
        <RadioButtonGroup
          @choose-checkbox="setGender"
          title-left="M"
          title-right="Ж"
        />
      </div>

      <!--CONTACT INFO-->
      <div class="form__item">
        <label for="age">ВОЗРАСТ:</label>
        <Field
          type="number"
          id="age"
          name="age"
          v-model.trim="form.age"
          value="0"
          min="1"
        />
<!--        <p class="error" v-if="$v.form.age.$error">Введите возраст</p>-->
      </div>

      <!--CITY-->
      <div class="form__item">
        <label>ГОРОД:</label>
        <Field
          id="city"
          name="city"
          v-model.trim="form.city"
          autocomplete="off"
        />
<!--        <p class="error" v-if="$v.form.city.$error">Введите возраст</p>-->
      </div>

      <!--PHONE-->
      <div class="form__item">
        <label>НОМЕР ТЕЛЕФОНА:</label>
        <input v-maska data-maska="+7 (###) ###-####" placeholder="999 9999999"/>
<!--          <MaskedInput
              v-model.trim="form.phone"
              name="phone"
              mask="\+\7 (111) 111-1111"
              placeholder="Введите номер телефона"
              type="tel"
              autocomplete="off"
          />-->
<!--          <p class="error" v-if="$v.form.phone.$error">Введите номер телефона</p>-->
      </div>

      <p class="error notion">
        **вся личная информация будет скормлена диким собакам по окончании гонки
        и не будет использована в корыстных целях <br />(честно говоря, мы
        просто не в курсе как использовать информацию в корыстных целях)
      </p>

      <!--BICYLE TYPE-->
      <label>ВЕЛОСИПЕД:</label>
      <div class="form__bicycle-type-container">
        <div class="form__bicycle-type">
          <img src="../../../assets/images/icons/rigid-big.svg" alt="rigid" />
          <img
            src="../../../assets/images/icons/hardteil-big.svg"
            alt="rigid"
            class="form__bicycle-type_hardteil"
          />
        </div>
        <RadioButtonGroup
          title-left="(RIGID)"
          title-right="(HARDTAIL)"
          checkbox-right-class="bicycle-right"
          @choose-checkbox="setBicycleType"
        />
      </div>

      <!--CATEGORY-->
      <div class="form__category">
        <label>КАТЕГОРИЯ:</label>
        <RadioButtonGroup
          class="form__category-item"
          title-left="Гонщик"
          title-right="Исследователь"
          checkbox-right-class="bicycle-right"
          @choose-checkbox="setCategory"
        />
      </div>
    </div>

    <!--BUTTONS-->
    <div class="buttons" v-if="formType === 'registration'">
      <button
        type="submit"
        :class="isRiderSaving ? 'blur' : ''"
        class="btn-save"
        :disabled="true"
      >
        <!--        <img
          v-if="!isButtonDisabled"
          src="../../../assets/images/icons/btn-finish.svg"
          alt="btn-finish"
        />-->
        <img
          src="../../../assets/images/icons/btn-finish-disabled.svg"
          alt="btn-finish-disabled"
        />
      </button>
      <img
        v-if="isRiderSaving"
        src="../../../assets/images/icons/rhombus.png"
        alt="rhombus"
        class="rhombus"
      />
    </div>
  </Form>
</template>



<style scoped lang="scss">
.form {
  margin-top: 2em;
  padding: 0 6%;

  @include responsive(tab-port) {
    width: 100%;
  }

  .notion {
    width: 90%;
    margin: 20px 0 20px 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    height: 80px;

    input {
      width: 45%;
      font-size: rem(20px);
      outline: none;
      border: 2px solid $black;
      border-radius: 4px;
      padding: 5px;

      @include responsive(tab-port) {
        width: 100%;
      }
    }

    &_gender {
      .checkbox {
        margin-top: 10px;

        &__left {
          span {
            margin-left: 24px;
          }
        }
      }
    }
  }

  &__item:nth-child(4) {
    margin-top: rem(20px);
    width: rem(130px);
  }

  &__bicycle-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
      height: 160px;

      @include responsive(tab-port) {
        height: 80px;
      }
    }
    &_hardteil {
      margin-left: 100px;
      transform: translateY(-10px);

      @include responsive(tab-port) {
        margin-left: 30px;
      }
    }
  }

  &__bicycle-type-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .checkbox {
      display: grid;
      grid-template-columns: 90px 206px 118px !important;

      .checkbox__left,
      .checkbox__right {
        .checkbox__checked {
          transform: translateX(18px);
        }
      }

      .checkbox__left,
      .checkbox__right {
        align-items: center;

        @include responsive(phone) {
          grid-gap: 15px;
        }
      }

      @include responsive(tab-port) {
        grid-template-columns: 80px 50px 80px !important;
      }

      span {
        margin-left: 0 !important;
      }

      .bicycle-right {
        grid-column: 3;
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  &__category {
    margin-top: 20px;

    .checkbox {
      margin-top: 20px;
    }
  }

  &__category-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .bicycle-right {
      grid-template-columns: 100px 1fr;
    }
  }

  &__category-item > .checkbox__left,
  &__category-item > .checkbox__right {
    display: grid;
    align-items: center;
    margin-bottom: 20px;

    span {
      grid-column: 2;
      grid-row: span 2;
      margin-left: 0;
    }

    .checkbox {
      &__container {
        width: 100px;
      }
    }
  }

  .error {
    color: $red;
  }

  .buttons {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    .btn-save {
      cursor: pointer;
      outline: none;
      border: none;
      margin-bottom: 40px;

      &:disabled {
        cursor: default;
      }

      img {
        @include responsive(tab-port) {
          width: 250px;
        }
      }
    }
  }
}

.rhombus {
  position: absolute;
  bottom: 300px;
  height: 100px;
  left: 45%;
  animation: rotating 3s linear infinite;

  @include responsive(phone) {
    bottom: 150px;
    left: 35%;
  }
}

.blur {
  filter: blur(10px);
  transition: 0.3s ease;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
