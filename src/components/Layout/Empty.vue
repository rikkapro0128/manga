<template>
  <div class="absolute top-0 left-0 bottom-0 right-0 overflow-y-hidden flex flex-nowrap">
    <div :class="`transition-all ease-in-out relative max-h-screen`"
      :style="{ minWidth: toggle ? `${nav.maxWidth}px` : `${nav.minWidth}px` }">
      <div class="w-full h-full dark:bg-[#191A1C] p-3">
        <div class="flex flex-col justify-between h-full">
          <div>
            <div @click="$router.push({ name: 'homepage' })" class="flex flex-nowrap items-center cursor-pointer">
              <img src="https://mangadex.org/_nuxt/fe9305523f3efa4185ff8ebcf401d17b.svg" alt="logo">
              <Transition>
                <span v-if="toggle" class="capitalize text-lg flex-1 text-center font-bold absolute w-full">trang
                  chủ</span>
              </Transition>
            </div>
            <Transition :duration="{ enter: 500, leave: 50 }">
              <div class="absolute w-full left-0 right-0 mt-6" v-if="toggle">
                <div class="px-3">
                  <div>
                    <p class="text-bold">Kiểu đọc</p>
                    <el-button
                      @click="options.typeRead.index = handleNext(options.typeRead.index, options.typeRead.val.length)"
                      class="w-full mt-2 uppercase" type="success">{{
                          options.typeRead.val[options.typeRead.index]
                      }}</el-button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <Transition mode="out-in">
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
  }
})

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
</style>