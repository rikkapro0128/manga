<template>
  <div class="mb-14 mt-12 select-none	">
    <swiper @click="clickMangaTrend" @swiper="onSwiper" @slideChange="viewer" :modules="modules" :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }" :loop="true" class="mySwiper">
      <swiper-slide :key="trendNow" v-for="trendNow in trendingDemo" class="h-[540px]">
        <div class="relative w-full h-full grid grid-cols-3">
          <div class="flex flex-col justify-end">
            <!-- trend name -->
            <div
              class="text-shadow cursor-pointer font-[Pacifico] text-4xl text-slate-700 text-center leading-relaxed antialiased mb-5">
              {{
                  trendNow.name
              }}
            </div>
            <!-- trend top level -->
            <div class="w-fit shadow-md">
              <p class="bg-[#49D26D] text-xs p-1 px-2 inline-block rounded-l-md text-white">
                TOP {{
                    trendNow.top
                }}</p>
              <p class="cursor-pointer bg-slate-500 text-xs p-1 px-2 inline-block rounded-r-md text-white">nổi bật</p>
            </div>
            <!-- trend rate -->
            <p class="-mx-1 text-slate-800 pt-1 flex flex-nowrap items-center">
              <StarIcon class="w-5 h-5 fill-yellow-400 mx-1" />
              <span class="mx-1">Đánh giá -</span>
              <span class="text-sm mx-1">{{ trendNow.rate }}</span>
            </p>
            <!-- trend genres -->
            <div class="-m-1 py-2">
              <span
                class="cursor-pointer inline-block text-xs bg-slate-400 text-white py-1 px-2 m-1 rounded-md shadow-md"
                :key="tag + index" v-for="(tag, index) in trendNow.genres">{{ tag
                }}</span>
            </div>
            <!-- trend genres -->
            <p class="pt-3 line-clamp-4 italic text-slate-800">{{ trendNow.desc }}</p>
          </div>
          <div class="col-span-2 relative overflow-hidden">
            <div class="absolute -z-10 top-0 left-0 bottom-0 right-0 bg-no-repeat bg-cover bg-center blur-lg mx-12"
              :style="{ backgroundImage: `url(${trendNow.thumbnail})` }">
            </div>
            <div
              class="w-2/4 h-full m-auto bg-no-repeat bg-cover bg-center scale-90 hover:scale-95 transition-transform rounded-md"
              :style="{ backgroundImage: `url(${trendNow.thumbnail})` }"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-end items-center mt-4">
      <div class="flex h-10 px-3 mr-3 items-center rounded-full border-[2px] border-indigo-600">
        <div class="w-5 h-5 mx-1 rounded-full transition-colors cursor-pointer"
          :style="{ backgroundColor: indexSlide === num - 1 ? '#4F46E5' : '#CBD5E1' }" :key="num"
          @click="swiperCtx.slideTo(num)" v-for="num in trendingDemo.length"></div>
      </div>
      <div>
        <el-button @click="swiperCtx.slidePrev()" color="#4338CA" size="large" circle>
          <ArrowUturnLeftIcon class="w-5 h-5 fill-white" />
        </el-button>
        <el-button @click="swiperCtx.slideNext()" color="#4338CA" size="large" circle>
          <ArrowUturnRightIcon class="w-5 h-5 fill-white" />
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  StarIcon,
  ArrowUturnRightIcon,
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const trendingDemo = [
  {
    name: 'TAM NHÃN HAO THIÊN LỤC',
    desc: 'Dương Tiễn Hạ Phàm Diệt Trừ Yêu Quái Dưới Hình Hài Một Người Con Gái. Đọc sẽ rõ ~.~',
    top: 5,
    rate: '4.5/5',
    viewer: 7665225,
    thumbnail: 'https://st.ntcdntempv3.com/data/comics/71/tam-nhan-hao-thien-luc.jpg?v=' + Date.now() % 100000,
    banner: '',
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Manhua', 'Truyện Màu'],
    chapterPresent: 312.1
  },
  {
    name: 'TRÙNG SINH ĐÔ THỊ THIÊN TÔN',
    desc: 'Vô Cực Thiên Tôn tu tiên, nghịch chuyển tiên pháp tối cao của tông môn. Chỉ là vì trở về đô thị! Lần này, quyết sửa chữa sai lầm, bù đắp lại nuối tiếc của kiếp trước, tiền bạc, sức mạnh, người đẹp đều có đủ. Truyện cải biên từ tiểu thuyết "Trùng Sinh chi Đô Thị Tu Tiên"',
    top: 3,
    rate: '4.1/5',
    viewer: 86405625,
    thumbnail: 'https://st.ntcdntempv3.com/data/comics/97/trung-sinh-do-thi-thien-ton.jpg?v=' + Date.now() % 100000,
    banner: '',
    genres: ['Manhua', 'Truyện Màu'],
    chapterPresent: 359
  },
  {
    name: 'TA CHẲNG QUA LÀ MỘT ĐẠI LA KIM TIÊN',
    desc: 'Truyện tranh Ta Chẳng Qua Là Một Đại La Kim Tiên được cập nhật nhanh và đầy đủ nhất tại NetTruyen. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ NetTruyen ra các chương mới nhất của truyện Ta Chẳng Qua Là Một Đại La Kim Tiên.',
    top: 2,
    rate: '4.8/5',
    viewer: 48382332,
    thumbnail: 'https://st.ntcdntempv3.com/data/comics/11/ta-chang-qua-la-mot-dai-la-kim-tien.jpg?v=' + Date.now() % 100000,
    banner: '',
    genres: ['Manhua', 'Truyện Màu', 'Action'],
    chapterPresent: 286
  },
  {
    name: 'TIÊN TÔN LẠC VÔ CỰC',
    desc: 'Truyện tranh Tiên Tôn Lạc Vô Cực được cập nhật nhanh và đầy đủ nhất tại NetTruyen. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ NetTruyen ra các chương mới nhất của truyện Tiên Tôn Lạc Vô Cực.',
    top: 1,
    rate: '4.9/5',
    viewer: 45633731,
    thumbnail: 'https://st.ntcdntempv3.com/data/comics/230/tien-ton-lac-vo-cuc.jpg?v=' + Date.now() % 100000,
    banner: '',
    genres: ['Manhua', 'Truyện Màu', 'Action', 'Adventure', 'Chuyển Sinh'],
    chapterPresent: 171
  },
  {
    name: 'ĐẠI QUẢN GIA LÀ MA HOÀNG',
    desc: 'Truyện tranh Đại Quản Gia Là Ma Hoàng được cập nhật nhanh và đầy đủ nhất tại NetTruyen. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ NetTruyen ra các chương mới nhất của truyện Đại Quản Gia Là Ma Hoàng.',
    top: 4,
    rate: '4.9/5',
    viewer: 285132,
    thumbnail: 'https://st.ntcdntempv3.com/data/comics/188/dai-quan-gia-la-ma-hoang.jpg?v=' + Date.now() % 100000,
    banner: '',
    genres: ['Manhua', 'Truyện Màu', 'Adventure'],
    chapterPresent: 330
  },
]

const router = useRouter();
const swiperCtx = ref();
const indexSlide = ref(0);
const touchLimit = reactive({ start: false, end: false });
const modules = [Autoplay];

const onSwiper = (swiper) => {
  swiperCtx.value = swiper;
  touchLimit.start = swiper.isBeginning;
  touchLimit.end = swiper.isEnd;
};

const viewer = (swiper) => {
  touchLimit.start = swiper.isBeginning;
  touchLimit.end = swiper.isEnd;
  indexSlide.value = swiper.realIndex;
}

const clickMangaTrend = () => {
  router.push('/manga');
}

</script>

<style lang="css" scoped>
.text-shadow {
  text-shadow: 1px 2px #0000002e;
}
</style>
