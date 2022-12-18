import state from '@/vuex/ModuleSign/states.js';
import mutations from '@/vuex/ModuleSign/mutations.js';

const ModuleSign = {
  state: () => ({ ...state }),
  mutations: {
    ...mutations,
  },
  actions: {

  },
  getters: {

  }
}

export default ModuleSign;
