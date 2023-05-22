<template>
  <div class="total">
    <h3>НАС УЖЕ:</h3>

    <!--BICYCLES-->
    <div class="total__bicycles">
      <img
        :src="getImageUrl(bicycle.bicycleType)"
        alt="RD"
        v-for="bicycle in bicycles"
        :key="bicycle['.key']"
        :style="{ left: bicycle.position + '%' }"
      />
    </div>
    <h3>{{ bicycles.length }}</h3>
  </div>
</template>

<script>
export default {
  name: "TotalRiders",

  props: {
    bicycles: {
      type: Array,
      required: true,
    },
  },

  methods: {
    // apply image url according to bicycle type
    getImageUrl(type) {
      switch (type) {
        case "rigid":
          return require("../../../assets/images/icons/rigid.svg");
        case "hardteil":
          return require("../../../assets/images/icons/hardteil.svg");
        default:
          return require("../../../assets/images/icons/rigid.svg");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.total {
  display: grid;
  grid-template-columns: 0.2fr 1fr 80px;
  padding: 0 6%;

  h3 {
    font-family: "Bahnschrift Bold SemiCondensed", sans-serif;
    font-weight: 900;
    text-transform: lowercase;
    font-size: rem(25px);
    margin: 0;
    line-height: 15px;
  }

  @include responsive(phone) {
    grid-template-columns: 80px 1fr 50px;
  }

  &__bicycles {
    position: relative;
    border-bottom: 2px solid $black;
    width: 100%;

    img {
      position: absolute;
      bottom: -11px;
      left: 0;
      width: 15%;

      @include responsive(tab-port) {
        width: 25%;
      }
    }
  }
}
</style>
