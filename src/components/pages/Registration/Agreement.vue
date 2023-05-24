<script setup lang="ts">
import ToggleSwitch from "../../ToggleSwitch.vue";

const emit = defineEmits(['change-agreement'])

function changeAgreement (isAgree: boolean) {
  emit("change-agreement", isAgree);
}
</script>

<template>
  <div class="agreement">
    <div class="agreement__item">
      <p class="agreement__notice">
        Во время оплаты указывайте имя, фамилию и номер участника
      </p>
      <p class="error">
        Стоимость участия 2000 рублей
        <span class="payment-link">
          <br />
          Ссылка для оплаты мероприятия:
          <br />
          <a
            href="https://www.tinkoff.ru/rm/franchuk.anton2/TX77Z93513/"
            target="_blank"
            >Tinkoff банк</a
          >
          <br />
          <a href="https://donate.stream/PURPLEXBLVZE" target="_blank"
            >ЮMoney</a
          >
        </span>
      </p>
    </div>

    <h1 class="agreement__item">Условия участия</h1>

    <div class="agreement__item">
      <p>мне больше 18 лет</p>
    </div>

    <div class="agreement__item">
      <p>
        у меня нет ограничений по здоровью, препятствующих моему участию в гонке
      </p>
    </div>
    <p>я осознаю и принимаю возможные риски, влючая, но не ограничиваясь:</p>
    <div class="agreement__item">
      <p>черезмерные физические нагрузки</p>
    </div>
    <div class="agreement__item">
      <p>физические и эмоциональные травмы*</p>
    </div>
    <div class="agreement__item">
      <p>
        нападение диких или одомашненных животных (да ладно, когда такое было?)
      </p>
    </div>
    <div class="agreement__item">
      <p>
        я понимаю, что могу сойти с дистанции в любой момент и обратиться за
        помощью
      </p>
    </div>

    <div class="agreement__item medic">
      <p>* в лагере работает сертифицированный медик</p>
    </div>

    <div class="agree">
      <ToggleSwitch @toggle-switch="changeAgreement" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.agreement {
  margin-top: 5em;
  padding: 0 6%;

  h1 {
    margin-bottom: 12px;
  }

  @include responsive(phone) {
    margin-top: rem(60px);
  }

  p {
    font-size: rem(20px);
  }

  p:nth-child(3) {
    margin-bottom: rem(20px);
  }

  &__notice {
    font-size: rem(15px) !important;
    margin-bottom: 5px;
    font-weight: 700;
  }

  &__item {
    align-items: center;
    margin-bottom: rem(20px);

    label {
      justify-self: end;
    }

    .error {
      color: $red;
    }

    .payment-link {
      color: $black;

      a {
        text-decoration: underline;
      }
    }
  }

  .agree {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    grid-gap: rem(20px);

    .switch {
      margin: 0 0 30px 0;
    }
  }
}

.medic {
  color: $red;

  p {
    font-size: 14px;
  }
}
</style>
