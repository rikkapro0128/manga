<template>
  <div @click="sideToManga"
    class="cursor-pointer flex justify-center relative hover:-translate-y-1 transition-transform  duration-300">
    <!-- $number chapter -->
    <div
      class="h-72 md:h-auto md:w-48 flex flex-col md:flex-row md:max-w-xl  bg-white rounded-lg shadow-lg xl:flex-col">
      <!-- $image card -->
      <img class="w-full object-cover max-w-xs block"
        src="https://st.ntcdntempv3.com/data/comics/187/da-nhan-tai-sinh.jpg" alt="" />
      <!-- $info card -->
      <div class="p-6 flex flex-col justify-start">
        <h5 class="text-gray-900 text-lg font-medium mb-2">Dã nhân tái sinh</h5>
        <p class="text-gray-700 text-base mb-4 line-clamp-5 xl:hidden">
          Tôi bất ngờ lìa đời.Rồi gặp phải một tên thần linh nửa vời, sau màn chào hỏi nửa vời, tôi bị hắn đẩy xuống một
          vùng rừng rú hoang dã. Không có phép thuật. Không cheat gì luôn. Thứ duy nhất tôi có thể dựa vào chỉ là trí
          khôn cùng với karate của mình. Mọi điều còn lại là bảo vệ bản thân trước thế giới mới khắc nghiệt này!!.
        </p>
        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      </div>
    </div>
    <div
      class="absolute top-2 right-2 rounded-full border-indigo-600 bg-white w-12 h-12 flex justify-center items-center border-[2px] shadow-sm shadow-indigo-600">
      12
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function sideToManga() {
  router.push('/manga');
}
</script>