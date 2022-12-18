<template>
  <div class="">
    <div class="grid grid-cols-[50px_1fr] my-6">
      <!-- THIS AVATAR -->
      <el-avatar class="cursor-pointer" :size="50" :src="`${comment.avatar}?v=${hashImage}`"></el-avatar>
      <!-- THIS COMBOBOX -->
      <div class="grid grid-cols-[8px_1fr]">
        <div></div>
        <div class="flex flex-col">
          <div class="border-[1px] rounded-sm p-3">
            <div class="flex items-center">
              <h5 class="text-sm font-bold cursor-pointer">{{ comment.name }}</h5>
              <p
                class="w-[50px] border-[1px] border-slate-300 p-[3px] text-center rounded-md ml-2 text-[10px] whitespace-nowrap box-border relative">
                <!-- 5 (level) => 89 (%) -->
                <!-- ? (level) => ? (%) -->
                <span
                  class="absolute h-[85%] block rounded-sm bg-[#4AD295] top-1/2 left-[3px] -translate-y-1/2 box-border origin-left"
                  :style="{ width: `${percentForLevel}%` }"></span>
                <span class="relative">Cấp {{ randomLevel }}</span>
              </p>
              <p class="ml-2 italic text-xs">{{ comment.present }}</p>
            </div>
            <div class="w-full h-[1px] bg-slate-300 my-3 mx-auto"></div>
            <div>
              <p class="text-sm">
                {{ comment.content }}
              </p>
            </div>
          </div>
          <!-- THIS TOOLBOX -->
          <div class="text-xs mt-2 flex">
            <span class="mx-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <el-tooltip v-model:visible="stateReact" effect="light" placement="top-start">
                thích
                <template #content>
                  <!-- content for the header slot -->
                  <ReactDefault @onReact="onReact" />
                </template>
              </el-tooltip>
            </span>
            <span @click="showReply = true" class="mx-2 cursor-pointer hover:text-indigo-600 transition-colors">bình
              luận</span>
            <span class="mx-2">{{ comment.timeAt }}</span>
          </div>
        </div>
      </div>
    </div>
    <Transition>
      <div v-if="showReply" class="ml-[60px]">
        <el-tooltip :visible="showTooltipReply" effect="dark" placement="right" content="Nhấn enter để bình luận">
          <ReplyDefault @focusin="(state) => showTooltipReply = true" @focusout="(state) => showTooltipReply = false"
            :focus="true" :reply="replyCtx" @replying="onReplying" class="order-last" />
        </el-tooltip>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import ReplyDefault from '@/components/Reply/ReplyDefault.vue';
import ReactDefault from '@/components/React/ReactDefault.vue';
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
  comment: Object,
})

const replyCtx = reactive({ name: '', target: props.comment.name, content: '' });
const showReply = ref(false);
const showTooltipReply = ref(false);
const stateReact = ref(false);
const hashImage = Date.now() % 100000;
const maxLevel = 5;
const randomLevel = Math.floor(Math.random() * maxLevel) + 1;
const percentForLevel = Math.floor(randomLevel * 89 / 5);

function onReplying(value) {
  console.log(value);
}

function onReact(state) {
  console.log(state);
  stateReact.value = false;
}

</script>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
