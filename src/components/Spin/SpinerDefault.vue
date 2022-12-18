<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
    <div class="atom-spinner" :style="{ 'animation-iteration-count': props.count ? props.count : 0 }">
      <div class="spinner-inner">
        <div class="spinner-line" :style="{ borderLeftColor: props.color }"></div>
        <div class="spinner-line" :style="{ borderLeftColor: props.color }"></div>
        <div class="spinner-line" :style="{ borderLeftColor: props.color }"></div>
        <!--Chrome renders little circles malformed :(-->
        <div class="spinner-circle" :style="{ color: props.color }">
          &#9679;
        </div>
      </div>
    </div>
    <span class="italic mt-2 miru--blink">{{ passMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
  count: {
    type: Number,
    default: 1,
  },
  message: {
    type: String,
  }
});

const passMessage = computed(() => props.message.charAt(0).toUpperCase() + props.message.slice(1, -1))

</script>

<style lang="css" scoped>
.miru--blink {
  animation: blink 1s infinite;
}

@keyframes fadeIn {

  50%,
  to {
    opacity: 1;
  }
}

@keyframes blink {

  50% {
    opacity: 1;
  }

  from,
  to {
    opacity: 0;
  }
}

@keyframes atom-spinner-animation-1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}

.atom-spinner {
  opacity: 0;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}

.atom-spinner,
.atom-spinner * {
  box-sizing: border-box;
}

.atom-spinner {
  height: 60px;
  width: 60px;
  overflow: hidden;
}

.atom-spinner .spinner-inner {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
}

.atom-spinner .spinner-circle {
  display: block;
  position: absolute;
  /* color: #ff1d5e; */
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.atom-spinner .spinner-line {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-left-width: calc(60px / 25);
  border-top-width: calc(60px / 25);
  /* border-left-color: #ff1d5e; */
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
}

.atom-spinner .spinner-line:nth-child(1) {
  animation: atom-spinner-animation-1 1s linear infinite;
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(2) {
  animation: atom-spinner-animation-2 1s linear infinite;
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(3) {
  animation: atom-spinner-animation-3 1s linear infinite;
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}
</style>