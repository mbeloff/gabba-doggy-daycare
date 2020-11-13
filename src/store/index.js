import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    global: {
      openTime: "7:00am",
      closeTime: "6:00pm",
      email: "woof@gabbadoggydaycare.com",
    },
    mutations: {},
    actions: {},
    modules: {}
  }
})