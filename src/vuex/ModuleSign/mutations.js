const mutations = {
  updateCurrentUser (state, payload) {
    state.currentUser = payload;
    state.loading = false;
  },
  updateLoading (state, payload) {
    state.loading = payload;
  },
} 

export default mutations;
