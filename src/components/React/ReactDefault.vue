<template>
  <div class="grid grid-cols-5 -mx-[6px]">
    <div @click="handleReaction('excited')" :class="['bg-[-32px_-8px] bg-[length:820%]', classCommon]"
      :style="ImageReact"></div>
    <div @click="handleReaction('love')" :class="['bg-[length:820%] bg-[-32px_-64px]', classCommon]"
      :style="ImageReact"></div>
    <div @click="handleReaction('sad')" :class="['bg-[length:820%] bg-[-200px_-64px]', classCommon]"
      :style="ImageReact"></div>
    <div @click="handleReaction('cry')" :class="['bg-[length:820%] bg-[-200px_-8px]', classCommon]" :style="ImageReact">
    </div>
    <div @click="handleReaction('angry')" :class="['bg-[length:820%] bg-[-87px_-8px] ', classCommon]"
      :style="ImageReact"></div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['onReact'])

const classCommon = 'w-[40px] h-[40px] mx-[6px] bg-slate-300 rounded-full cursor-pointer bg-no-repeat hover:scale-110 transition';
const ImageReact = { backgroundImage: 'url(' + require(`@/assets/image/emotion/react.gif`) + ')' }

function handleReaction(state) {
  emit('onReact', state);
}

</script>