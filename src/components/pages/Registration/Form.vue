<script setup lang="ts">
import {
  ref,
  watch,
  toRefs,
  computed,
} from "vue";

import {
  Form,
  Field,
  useField,
  configure,
  ErrorMessage
} from 'vee-validate';

import { 
  useValidateAge,
  useValidateName,
  useValidateCity,
  useValidateLastName
} from "@/services/vee-validate";

import { vMaska } from "maska"
import "firebase/firestore";

import RadioButtonGroup from "../../RadioButtonGroup.vue";

import type { IRider, ICheckbox} from "@/types";

import mtb from "@/assets/images/icons/mtb.png"
import road from "@/assets/images/icons/road.png"
import singleSpeed from "@/assets/images/icons/single-speed.png"

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

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

const form = ref<IRider>({
  age: null,
  city: '',
  name: '',
  phone: '',
  number: 0,
  gender: "М",
  isAgree: false,
  lastName: '',
  position: '0',
  category: "гонщик",
  bicycleType: "ROAD"
})
const bicycleTypes = ref([
  {
    id: 1,
    image: road
  },
  {
    id: 2,
    image: mtb
  },
  {
    id: 3,
    image: singleSpeed
  }
])

const genders: ICheckbox[] = [
  {
    id: 1,
    title: 'М',
  },
  {
    id: 2,
    title: 'Ж',
  }
]
const bicycles: ICheckbox[] = [
  {
    id: 1,
    title: '(ROAD)',
  },
  {
    id: 2,
    title: '(MTB)',
  },
  {
    id: 3,
    title: '(Fixed/Single)',
  }
]
const categories: ICheckbox[] = [
  {
    id: 1,
    title: 'гонщик',
  },
  {
    id: 2,
    title: 'исследователь',
  }
]

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

function setIsAgree (agreement: boolean) {
  form.value.isAgree = agreement;
}

function setGender (gender: string) {
  form.value.gender = gender
}

function setCategory (category: string) {
  form.value.category = category
}

function setBicycleType (type: string) {
  form.value.bicycleType = type;
}

function onInvalidSubmit ({ errors }: any) {
  scrollToField(Object.keys(errors)[0])
}

function scrollToField (id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({behavior: "smooth", block: 'center'});
}

function onSubmit (values: any) {
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
  <Form
    v-slot="{ errors }"
    class="form"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <div :class="isRiderSaving ? 'blur' : ''">
      <!--NAME-->
      <div class="form__item">
        <label for="name">ИМЯ:**</label>
        <Field
          v-model.trim="form.name"
          id="name"
          type="text"
          name="name"
          :rules="useValidateName"
          placeholder="Введите имя"
          autocomplete="off"
          :class="{'form__input-error' : errors.name}"
        />
        <ErrorMessage name="name" class="form__error"/>
      </div>

      <!--LAST NAME-->
      <div class="form__item">
        <label for="last_name">ФАМИЛИЯ:</label>
        <Field
          v-model.trim="form.lastName"
          id="lastName"
          type="text"
          name="lastName"
          :rules="useValidateLastName"
          placeholder="Введите фамилию"
          autocomplete="off"
          :class="{'form__input-error' : errors.lastName}"
        />
        <ErrorMessage name="lastName" class="form__error"/>
      </div>

      <!--GENDER-->
      <div class="form__gender">
        <label for="#">ПОЛ:</label>
        <RadioButtonGroup
          :checkboxes="genders"
          @set-value="setGender"
        />
      </div>

      <!--CONTACT INFO-->
      <div class="form__item">
        <label for="age">ВОЗРАСТ:</label>
        <Field
          v-model.trim="form.age"
          id="age"
          name="age"
          type="number"
          :rules="useValidateAge"
          :class="{'form__input-error' : errors.age}"
        />
        <ErrorMessage name="age" class="form__error"/>
      </div>

      <!--CITY-->
      <div class="form__item">
        <label>ГОРОД:</label>
        <Field
          v-model.trim="form.city"
          id="city"
          name="city"
          :rules="useValidateCity"
          autocomplete="off"
          :class="{'form__input-error' : errors.city}"
        />
        <ErrorMessage name="city" class="form__error"/>
      </div>

      <!--PHONE-->
      <div class="form__item">
        <label>НОМЕР ТЕЛЕФОНА:</label>
        <input 
          v-maska
          data-maska="+7 (###) ###-####" 
          placeholder="999 9999999" 
        />
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
      <div class="form__bicycle-type-wrapper">
        <RadioButtonGroup 
          :checkboxes="bicycles" 
          :bicycle-types="bicycleTypes"
          @set-value="setBicycleType"
        />
      </div>

      <!--CATEGORY-->
      <div class="form__category">
        <label>КАТЕГОРИЯ:</label>
        <RadioButtonGroup
          :checkboxes="categories"
          class="form__category-item"
          @set-value="setCategory"
        />
      </div>
    </div>

    <!--BUTTONS-->
    <div class="buttons" v-if="formType === 'registration'">
      <button
        type="submit"
        :class="isRiderSaving ? 'blur' : ''"
        class="btn-save"
      >
          <img
          src="../../../assets/images/icons/btn-finish.svg"
          alt="btn-finish"
          class="form__btn-save"
        />
<!--        <img
          v-else
          src="../../../assets/images/icons/btn-finish-disabled.svg"
          alt="btn-finish-disabled"
        />-->
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
  
  &__gender, 
  &__category  {
    .radio-button-group {
      width: max-content;
      margin-top: 10px;
    }
    
    .radio-button-group :deep(.radio-button-group__item) {
      button {
        justify-content: flex-start;
        margin-left: 0;
        width: 90px;
      }
    }

    .radio-button-group :deep(.radio-button-group__title) {
      margin-left: 25%;
    }

    .radio-button-group :deep(.radio-button-group__item):last-child {
      margin-left: 10px;
    }
  }

  &__category {
    .radio-button-group :deep(.radio-button-group__title) {
      margin-left: 10px;
      font-weight: bold;
    }
    
    .radio-button-group :deep(.radio-button-group__item) {
      flex-direction: row-reverse;
      align-items: center;
      width: max-content;
      
      &:last-child {
        margin-left: 0;
      }
    }
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
  }

  &__item:nth-child(4) {
    margin-top: rem(20px);
    width: rem(250px);
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

  &__btn-save {
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

  &__error {
    color: $red-bright;
  }
  
  &__input-error {
    border: 2px solid $red-bright !important;
  }

  .buttons {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
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
