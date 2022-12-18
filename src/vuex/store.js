import { createStore } from 'vuex';

import ModuleSign from '@/vuex/ModuleSign/index.js';

const store = createStore({
  modules: {
    sign: ModuleSign,
  }
})

export default store;
