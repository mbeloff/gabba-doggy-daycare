import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    global: {
      openTime: "6:30am",
      closeTime: "6:30pm",
      email: "woof@gabbadoggydaycare.com",
    },
    mutations: {},
    actions: {},
    modules: {}
  }
})