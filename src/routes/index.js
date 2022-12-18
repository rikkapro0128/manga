import Home from "@/page/Home.vue";
import Sign from "@/page/Sign.vue";
import Story from "@/page/Story.vue";
import Manga from "@/page/Manga.vue";
import Profile from "@/page/Profile.vue";
import BadPage from "@/page/BadPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { application as FirebaseApp } from '@/firebase/instance.js';
import store from '@/vuex/store.js';

const routes = [
  { path: "/", component: Home, meta: { layout: 'default', transition: "slide-left" } },
  { path: "/sign", component: Sign, meta: { layout: 'default', transition: "slide-right", requiresAuth: true, reverseAuth: true } },
  { path: "/manga", component: Manga, meta: { layout: 'default', transition: "slide-right" } },
  { path: "/story", component: Story, meta: { layout: 'none', transition: "slide-right" } },
  { path: "/profile", component: Profile, meta: { layout: 'default', transition: "slide-right", requiresAuth: true } },
  { path: "/badpage",  name: 'badpage', component: BadPage, meta: { layout: 'default', transition: "slide-right" } },
  { path: '/:pathMatch(.*)*', redirect: { name: 'badpage' },  meta: { layout: 'none', } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {

    const auth = getAuth(FirebaseApp);

    if(to.meta?.reverseAuth) {
      if(store.state.sign.currentUser !== null) {
        next();
      }else {
        onAuthStateChanged(auth, (user) => {
          if(user) {
            next('/');
          }else {
            next();
          }
        })
      }
    }else {
      if(store.state.sign.currentUser) {
        next();
      }else {
        onAuthStateChanged(auth, (user) => {
          if(user) {
            next();
          }else {
            next('/badpage');
          }
        })
      }
    }


  }else {
    next();
  }
});

export default router;
