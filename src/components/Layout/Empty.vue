<template>
  <div class="absolute top-0 left-0 bottom-0 right-0 overflow-y-hidden flex flex-nowrap">
    <div :class="`transition-all ease-in-out relative max-h-screen`"
      :style="{ minWidth: toggle ? `${nav.maxWidth}px` : `${nav.minWidth}px` }">
      <div class="w-full h-full dark:bg-[#191A1C] p-3">
        <div class="flex flex-col justify-between h-full">
          <div class="h-full">
            <div @click="$router.push({ name: 'homepage' })" class="flex flex-nowrap items-center cursor-pointer">
              <img src="https://mangadex.org/_nuxt/fe9305523f3efa4185ff8ebcf401d17b.svg" alt="logo">
              <span :class="`transition-all capitalize text-lg flex-1 text-center font-bold w-full absolute`"
                :style="{ transform: `translateX(${toggle ? 0 : -100}%)`, opacity: `${toggle ? 1 : 0}` }">trang
                chủ</span>
            </div>
            <div class="absolute w-full left-0 right-0 mt-6">
              <div :class="`relative h-full transition-transform`"
                :style="{ width: `${nav.maxWidth}px`, transform: `translateX(${toggle ? 0 : -100}%)` }">
                <div class="px-3">
                  <el-space class="w-full" fill wrap direction="vertical" :size="10">
                    <div>
                      <p class="text-bold">Kiểu đọc</p>
                      <el-button
                        @click="options.typeRead.index = handleNext(options.typeRead.index, options.typeRead.val.length)"
                        class="w-full mt-2 uppercase" type="success">{{
                            options.typeRead.val[options.typeRead.index]
                        }}</el-button>
                    </div>
                    <div>
                      <p class="text-bold">Tốc độ kéo</p>
                      <el-slider v-model="options.speedDrag" :step="0.5" max="5" show-stops
                        style="--el-slider-main-bg-color: var(--el-color-success);" />
                    </div>
                    <div>
                      <p class="text-bold">Chapter</p>
                      <el-select v-model="selectChapter" class="w-full mt-2" placeholder="Select" size="large">
                        <el-option v-for="chapter in chapters" :key="chapter.id"
                          :label="chapter.num + ' - ' + chapter.name" :value="chapter.num" />
                      </el-select>
                    </div>
                    <div>
                      <p class="text-bold">Trang</p>
                      <el-select v-model="selectChapter" class="w-full mt-2" placeholder="Select" size="large">
                        <el-option v-for="chapter in chapters" :key="chapter.id"
                          :label="chapter.num + ' - ' + chapter.name" :value="chapter.num" />
                      </el-select>
                    </div>
                    <div>
                      <div class="flex justify-between flex-nowrap">
                        <p class="text-bold">Lưu lịch sử đọc</p>
                        <el-switch v-model="options.historySave" size="small"
                          style="--el-switch-on-color: var(--el-color-success);" />
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between flex-nowrap">
                        <p class="text-bold">Cuộn tự động</p>
                        <el-switch v-model="options.autoScroll.state" size="small"
                          style="--el-switch-on-color: var(--el-color-success);" />
                      </div>
                      <el-slider v-model="options.autoScroll.pick" :step="10" show-stops class="mt-2 transition-all"
                        :style="{ '--el-slider-main-bg-color': 'var(--el-color-success)', 'transform': `translateY(${options.autoScroll.state ? '0' : '-12px'})`, 'opacity': `${options.autoScroll.state ? 1 : 0}` }" />
                    </div>
                  </el-space>
                </div>
              </div>
            </div>
          </div>
          <Transition mode="out-in" name="fade">
            <div @click="toggle = true" v-if="!toggle"
              class="rounded-full w-fit p-1 active:bg-gray-800 transition-colors cursor-pointer">
              <EllipsisVerticalIcon class="w-7 h-7 " />
            </div>
            <div @click="toggle = false" v-else
              class="rounded-full w-fit p-1 active:bg-gray-800 transition-colors cursor-pointer">
              <XMarkIcon class="w-7 h-7 " />
            </div>
          </Transition>
        </div>

      </div>
    </div>
    <div :class="`px-6 max-h-screen mx-auto`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/vue/20/solid'
// import { useWindowSize } from '@vueuse/core';

const toggle = ref(false)
// const window = reactive(useWindowSize());
const nav = reactive({ minWidth: 0, maxWidth: 300 });
const options = reactive({
  typeRead: {
    val: [
      'chiều ngang',
      'trang dài',
      'trang đơn',
      'trang đôi',
    ],
    index: 0,
  },
  speedDrag: 0,
  autoScroll: {
    state: false,
    pick: 30,
  },
  historySave: false,
})

const chapters = reactive([
  {
    id: 1,
    num: 1,
    name: 'No name 1',
    link: 'https://element-plus.org/en-US/component/select.html',
  },
  {
    id: 2,
    num: 1.1,
    name: 'No name 2',
    link: 'https://element-plus.org/en-US/component/select.html',
  },
  {
    id: 3,
    num: 1.2,
    name: 'No name 3',
    link: 'https://element-plus.org/en-US/component/select.html',
  },
  {
    id: 4,
    num: 1.3,
    name: 'No name 4',
    link: 'https://element-plus.org/en-US/component/select.html',
  },
  {
    id: 5,
    num: 1.4,
    name: 'No name 5',
    link: 'https://element-plus.org/en-US/component/select.html',
  },
]);
const selectChapter = ref(chapters[0].num);

const handleNext = (index, length) => {
  return index === length - 1 ? 0 : ++index;
}

</script>

<style lang="css" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 150ms ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>