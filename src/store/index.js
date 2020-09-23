import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAnimating: false
  },
  mutations: {
    SET_ANIMATION_STATUS(state, payload) {
      state.isAnimating = payload;
    }
  },
  actions: {
    setAnimationStatus: ({ commit }, payload) => {
      commit("SET_ANIMATION_STATUS", payload);
    }
  },
  getters: {
    getAnimationStatus: state => {
      return state.isAnimating;
    }
  },
  modules: {}
});
