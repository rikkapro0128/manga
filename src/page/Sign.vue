<template>
  <div class="w-full">
    <div class="max-w-screen-xl bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="relative h-[710px] flex-1 bg-indigo-100 text-center hidden lg:flex overflow-hidden">
        <div class="absolute top-0 left-0 bottom-0 right-0 bg-cover blur-sm" :style="ImageBg">
        </div>
        <div class="relative m-8 xl:m-12 w-full bg-cover bg-center bg-no-repeat hover:scale-[1.02] transition-transform"
          :style="ImageBg">
        </div>
      </div>
      <div class="lg:w-1/2 p-6 sm:p-12">
        <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            class="w-32 mx-auto" />
        </div>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-xl xl:text-2xl">
            Hãy {{ typeSign }} trải nghiệm
          </h1>
          <div class="w-full flex-1 mt-8">
            <div v-if="$route.query.type === 'in'" class="flex flex-col items-center">
              <button @click="handleSign('google')"
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4" />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853" />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04" />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335" />
                  </svg>
                </div>
                <span class="ml-4">
                  Đăng nhập với Google
                </span>
              </button>

              <button
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div class="bg-white p-1 rounded-full">
                  <svg class="w-6" viewBox="0 0 32 32">
                    <path fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                  </svg>
                </div>
                <span class="ml-4">
                  Đăng nhập với GitHub
                </span>
              </button>
            </div>

            <div v-if="$route.query.type === 'in'" class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                hoặc
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email" placeholder="Email" />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password" placeholder="Mật khẩu" />
              <Transition>
                <input v-if="$route.query.type === 'up'"
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Xác nhận mật khẩu" />
              </Transition>
              <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <span class="ml-3">
                  {{ typeSign.charAt(0).toUpperCase() + typeSign.slice(1) }}
                </span>
              </button>
              <p class="mt-6 text-xs text-gray-600 text-center">
                Bạn sẽ đồng ý với chính sách của miru's
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Điều khoản dịch vụ
                </a>
                và
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ElNotification } from 'element-plus';
import { application as FirebaseApp } from "@/firebase/instance.js";

const route = useRoute();
const router = useRouter();
const provider = new GoogleAuthProvider();
const auth = getAuth(FirebaseApp);

const typeSign = computed(() => route.query.type === 'in' ? 'đăng nhập' : 'đăng ký');
const ImageBg = { backgroundImage: 'url(' + require(`@/assets/image/bg/bg_sign.png`) + ')' }

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'vi';

const handleSign = (type) => {
  if (type === 'google') {
    signInWithPopup(auth, provider)
      .then(() => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        ElNotification({
          title: 'Nice',
          type: 'success',
          position: 'bottom-right',
          duration: 5000,
          message: h('i', { style: 'color: #67c23a' }, 'Đăng nhập thành công'),
        })
        router.push('/');
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error.code, error.message);
      });
  }
}

</script>

<style lang="css" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
