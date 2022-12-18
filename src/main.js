import { createApp } from 'vue'
import App from './App.vue';
import { onAuthStateChanged, getAuth } from "firebase/auth";

/* Your Configuration */
import { application as FirebaseApp } from '@/firebase/instance.js';
import router from '@/routes/index.js';
import store from '@/vuex/store.js';

/* Styles Global */
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/tailwindcss/index.css';
import '@/assets/styles/element/var.css';
import "element-plus/dist/index.css";

const implementApp = createApp(App);

const auth = getAuth(FirebaseApp);

onAuthStateChanged(auth, (user) => {
  store.commit('updateCurrentUser', user)
})

implementApp.use(store);
implementApp.use(router);
implementApp.mount('#app');

