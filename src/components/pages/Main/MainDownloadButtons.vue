<script setup lang="ts">
import { 
  computed,
  onMounted,
  onBeforeMount
} from 'vue'

let interval = null
let opacity: string | number = '0'
let isButtonsDisabled = true

const buttonsOpacity = computed(() => {
  return {
    opacity: `${opacity}%`,
  }
})

onMounted(() => {
  interval = setInterval(() => {
    getButtonsOpacity()
  }, 1000);
})
onBeforeMount(() => {
  clearInterval(interval);
})

function downloadKML () {
  if (!isButtonsDisabled) {
    downloadFile("Урочище 2022.kml", "Урочище 2022.kml");
  }
}

function downloadGPX () {
  if (!isButtonsDisabled) {
    downloadFile("Urochishe2022.gpx", "Urochishe2022.gpx");
  }
}

function downloadFile (url, fileName) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  link.click();
}

function getButtonsOpacity () {
  const startDate = getDate(2022, 6, 12, 19, 50, 0);
  const endDate = getDate(2022, 6, 12, 20, 0, 0);
  const today = new Date();

  const todayToStartDiff = Math.abs(today - startDate);
  const endToStartDiff = Math.abs(endDate - startDate);
  opacity = +Math.round((todayToStartDiff / endToStartDiff) * 100);
  if (opacity > 100) opacity = 100;

  if (opacity === 100) {
    isButtonsDisabled = false;
  }

  return opacity;
}

function getDate (year, month, date, hours, minutes, seconds) {
  const now = new Date(year, month, date);
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(seconds);
  return now;
}
</script>

<template>
  <div class="main-download-buttons">
    <img src="../../../assets/images/main/wood.png" alt="wood" class="wood" />
    <img
      src="../../../assets/images/main/left-right-contour.png"
      alt="left-and-right-contour"
      class="contour"
    />

    <div class="buttons">
      <button @click="downloadKML" class="btn-kml">
        <img
          src="../../../assets/images/main/KML.svg"
          alt="btn-kml"
          :style="buttonsOpacity"
        />
      </button>
      <button @click="downloadGPX" class="btn-gpx">
        <img
          src="../../../assets/images/main/GPX.svg"
          alt="btn-gpx"
          :style="buttonsOpacity"
        />
      </button>
    </div>
  </div>
</template>



<style scoped lang="scss">
.main-download-buttons {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  z-index: 3;

  .wood {
    position: absolute;
    left: 7.5%;
    width: 85%;
    z-index: 2;
  }

  .contour {
    object-fit: cover;
    width: 100%;
  }

  .buttons {
    position: absolute;
    top: 64.5%;
    left: 43%;
    display: flex;

    @include responsive(tab-land) {
      left: 43.5%;
    }

    button {
      width: max-content;
    }
    .btn-gpx,
    .btn-kml {
      z-index: 999;
      position: relative;
      top: 0;
      right: 48px;

      @include responsive(tab-land) {
        right: 35px;
      }

      @include responsive(tab-port) {
        right: 20px;
      }

      @include responsive(phone) {
        right: 13px;
      }
    }

    .btn-kml {
      left: 10px;

      @include responsive(tab-land) {
        left: 0;
      }
    }

    img {
      height: 130px;

      @include responsive(tab-land) {
        height: 80px;
      }
      @include responsive(tab-port) {
        height: 50px;
      }

      @include responsive(phone) {
        height: 18px;
      }

      @include responsive(phone) {
        height: 30px;
      }
    }
  }
}
</style>
