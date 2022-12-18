<template>
  <div class="grid grid-cols-4 mt-10">
    <div class="">
      <!-- THIS IS AVATAR -->
      <div class="shadow-sm hover:shadow-md transition-shadow">
        <div class="relative overflow-hidden p-4 rounded-md">
          <div class="absolute top-0 left-0 right-0 bottom-0 -z-10 blur-md"
            :style="{ backgroundImage: 'url(' + currentUser.photoURL + ')' }">
          </div>
          <img class="block w-full" :src="currentUser.photoURL" alt="avatar">
          <el-tooltip class="box-item" effect="dark" content="Chỉnh sửa" placement="right">
            <div
              class="absolute left-0 bottom-0 mb-8 ml-8 w-[40px] h-[40px] bg-indigo-600 shadow-md rounded-full flex justify-center items-center cursor-pointer">
              <PencilSquareIcon class="w-5 h-5 text-white" />
            </div>
          </el-tooltip>
          <el-tooltip class="box-item" effect="dark" content="Tải lên" placement="left">
            <div
              class="absolute right-0 bottom-0 mb-8 mr-8 w-[40px] h-[40px] bg-indigo-600 shadow-md rounded-full flex justify-center items-center cursor-pointer">
              <ArrowUpTrayIcon class="w-5 h-5 text-white" />
            </div>
          </el-tooltip>
        </div>
      </div>
      <!-- THIS IS INFO LOCATION -->
      <div class="mb-5 pt-5 text-slate-500">
        <el-divider content-position="left">
          <div class="flex flex-nowrap text-slate-700">
            <MapPinIcon class="w-5 h-5" />
            <span class="ml-1 text-base font-bold cursor-default">Đang sinh sống tại</span>
          </div>
        </el-divider>
        <p class="capitalize text-indigo-600 font-bold text-lg cursor-default">
          {{ info.address.city }}
        </p>
        <span class="text-sm cursor-default">{{ info.address.details }}</span>
      </div>
    </div>
    <!-- THIS INFO DETAILS -->
    <div class="pt-2 col-span-3">
      <div class="pl-14">
        <!-- Name, nickname, sologan & bookmark -->
        <div class=" flex justify-between">
          <div class="flex items-start">
            <p class="text-3xl font-black text-slate-700 cursor-default">{{ currentUser.displayName }}</p>
            <div class="flex text-slate-500 text-base items-center ml-2 hover:underline cursor-pointer">
              <TagIcon class="w-4 h-4" />
              <span class="ml-1 ">{{ info.type }}</span>
            </div>
          </div>
          <div>
            <el-button type="primary">
              <BookmarkIcon class="w-4 h-4" />
              <p class="ml-1">Theo dõi người này</p>
            </el-button>
          </div>
        </div>
        <div class="flex flex-col text-slate-700 mt-1">
          <h5 class="mr-2 font-semibold cursor-default">Tương tác</h5>
          <el-rate v-model="info.rate" size="large" show-score text-color="#ff9900" score-template="{value} điểm" />
        </div>
        <div class="flex flex-col text-slate-700 mt-1 cursor-default">
          <h5 class="mr-2 font-semibold">Sologan</h5>
          <span class="text-slate-600 mt-1 italic">"{{ info.sologan }}"</span>
        </div>
        <div class="mt-2">
          <el-button-group>
            <el-button type="primary">
              <ChatBubbleLeftIcon class="w-4 h-4" />
              <span class="ml-1">Nhắn tin</span>
            </el-button>
            <el-button type="primary">
              <FlagIcon class="w-4 h-4" />
              <span class="ml-1">Báo cáo tài khoản này</span>
            </el-button>
          </el-button-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon, TagIcon, BookmarkIcon, ChatBubbleLeftIcon, FlagIcon, PencilSquareIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/solid';
import { reactive, ref, computed } from 'vue';
import { useStore } from 'vuex'

// const imageCache = 'https://i.pinimg.com/736x/49/27/aa/4927aa285cd5c1de43e34da92d520b57.jpg?v=' + Date.now() % 100000;

const info = reactive({
  name: 'Yandere 001',
  type: 'user',
  rate: 3.7,
  sologan: 'Trên trời có hàng vạn vì sao, dưới đất chỉ có mình tao là anh hùng',
  address: {
    city: 'hồ chí minh',
    details: '10 - Trần bá giao - Phường 5 - Gò vấp',
  }
});

const store = useStore();

const currentUser = computed(() => store.state.sign.currentUser);

// eslint-disable-next-line no-unused-vars
const toolChangeAvatar = ref(false);

</script>