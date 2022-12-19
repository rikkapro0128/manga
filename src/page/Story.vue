<template>
  <div class="relative w-full h-full" v-if="!cachedDone.length">
    <Spiner color="#4F46E5" message="đang tải hình ảnh bạn đợi xíu nha..." />
  </div>
  <div v-else class="py-8 h-full max-w-5xl">
    <div @mousedown="handleOnClick" @mouseup="handleUnClick" @mouseleave="handleUnClick" @mousemove="handleMouseMove"
      class="h-full overflow-hidden px-10 cursor-pointer">
      <div ref="eleScroll" class="overflow-y-scroll max-h-full hide-scroll">
        <div class="flex justify-center m-auto relative" v-for="(story, index) in cachedDone" :key="story">
          <div
            :class="`absolute right-0 ${story ? 'bottom-0' : 'top-1/2'} -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-600 flex justify-center items-center opacity-50`">
            {{
                index + 1
            }}
          </div>
          <img
            :class="`${index === 0 || !cachedDone[index - 1] ? 'rounded-t-lg' : (index === cachedDone.length - 1) || !cachedDone[index + 1] ? 'rounded-b-lg' : ''}`"
            v-if="story" :src="story.image" alt="story">
          <div v-else class="flex flex-nowrap flex-1 items-center border-transparent border-y-8">
            <div class="w-12 h-12 bg-red-400 flex justify-center items-center rounded-l-md">
              <ExclamationTriangleIcon class="w-8 h-8" />
            </div>
            <div
              class="flex flex-1 justify-center items-center dark:bg-white dark:text-slate-800 font-extrabold h-full rounded-r-md">
              <span class="uppercase select-none">
                ảnh này bị lỗi bạn đợi admin fix nhé
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useMouse } from '@vueuse/core'
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'

import Spiner from '@/components/Spin/SpinerDefault.vue';

const storys = reactive([
  'https://i.ibb.co/K9nN30T/1.jpg',
  'https://i.ibb.co/n1SrzH3/2.jpg',
  'https://i.ibb.co/NTQ5CNc/3.jpg',
  'https://i.ibb.co/LPFmKtW/4.jpg',
  'https://i.ibb.co/6PLn48t/5.jpg',
  'https://i.ibb.co/JrH7bwQ/6.jpg',
  'https://i.ibb.co/YdPKQk2/7.jpg',
  'https://i.ibb.co/GdGNqrd/8.jpg',
  'https://i.ibb.co/VqZHhLy/9.jpg',
  'https://i.ibb.co/Wsc5b5J/10.jpg',
  'https://i.ibb.co/8X0fMY7/11.jpg',
  'https://i.ibb.co/B3TpWgn/12.jpg',
  'https://i.ibb.co/kgyY4y8/13.jpg',
  'https://i.ibb.co/M8bykHg/14.jpg',
  'https://i.ibb.co/P10YcH7/15.jpg',
  'https://i.ibb.co/jbg6D7R/16.jpg',
  'https://i.ibb.co/KzNXF0F/17.jpg',
  'https://i.ibb.co/k4fLJ3t/18.jpg',
  'https://i.ibb.co/b2SYTq5/19.jpg',
  'https://i.ibb.co/1z1VZJb/20.jpg',
  'https://i.ibb.co/mbwybPQ/21.jpg',
  'https://i.ibb.co/hWGkgZf/22.jpg',
  'https://i.ibb.co/zfjX75V/23.jpg',
  'https://i.ibb.co/nBCG0f9/24.jpg',
  'https://i.ibb.co/FYvXb3q/25.jpg',
  'https://i.ibb.co/PYFvLM9/26.jpg',
  'https://i.ibb.co/RN9wzKd/27.jpg',
  'https://i.ibb.co/W3YHs8s/28.jpg',
  'https://i.ibb.co/6Hjg25b/29.jpg',
  'https://i.ibb.co/8K4CQ0p/30.jpg',
  'https://i.ibb.co/kSMfksJ/31.jpg',
  'https://i.ibb.co/4dhBfF4/32.jpg',
  'https://i.ibb.co/DrGPRxq/33.jpg',
  'https://i.ibb.co/hmH7Ycb/34.jpg',
  'https://i.ibb.co/tL9px6t/35.jpg',
  'https://i.ibb.co/gSMpmQv/36.jpg',
  'https://i.ibb.co/YLsgHds/37.jpg',
  'https://i.ibb.co/cFhVwsQ/38.jpg',
  'https://i.ibb.co/Kb8BMd0/39.jpg',
])
const cachedDone = ref([]);
const tracking = reactive({ start: 0, temp: 0, result: 0, drag: false, direction: 'none', present: 0 });
const mouse = reactive(useMouse());
const eleScroll = ref();

const cachedImages = async (payload, isCache = true) => {
  const results = payload.map((val) => {
    const image = val + (isCache ? `?date=${Date.now()}` : '');
    return new Promise((res, rej) => {
      const InstanceImage = new Image();
      InstanceImage.onload = () => {
        if (InstanceImage.width === 180 && InstanceImage.height === 180) {
          rej({ image, result: false });
        } else {
          res({ image, result: true });
        }
      }
      InstanceImage.onerror = () => {
        rej({ image, result: false });
      }
      InstanceImage.src = image;
    })
  })
  return await (await Promise.allSettled(results)).map(image => image.value);
}

const handleOnClick = () => {
  tracking.drag = true;
  tracking.start = mouse.y;
  tracking.present = eleScroll.value.scrollTop;
}

const handleUnClick = () => {
  tracking.drag = false;
  tracking.temp = 0;
  tracking.start = 0;
  tracking.present = eleScroll.value.scrollTop;
}

const handleMouseMove = () => {
  if (tracking.drag) {
    if (mouse.y > tracking.temp) {
      tracking.direction = 'down';
      tracking.result = -(mouse.y - tracking.start);
    } else if (mouse.y < tracking.temp) {
      tracking.direction = 'up';
      tracking.result = (tracking.start - mouse.y);
    }
    tracking.temp = mouse.y;
    eleScroll.value.scrollTop = (tracking.result * 2.5) + tracking.present;
  }
}

cachedImages(storys, true).then(arr => { cachedDone.value = arr });

</script>

<style lang="scss" scoped>

</style>
