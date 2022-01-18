import Vue from "vue";
import Vuex from "vuex";
// import VueRouter from "vue-router";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    resetLocale(state) {
      state.baseUrl = location.origin;
    },
    setLocale(state, locale) {
      state.baseUrl = state.baseUrl + "/" + locale;
    },
  },
  actions: {},
  getters: {},
});

  