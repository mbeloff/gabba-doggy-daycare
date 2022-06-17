import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    region: "brisbane",
    email: "woof@gabbadoggydaycare.com",
    accessToken: "",
    howFound: {},
    brisbane: {
      clientId: "1e18704def422bd1a3c1d3fdde12d106",
      hasGrooming: true,
      hasTraining: false,
      trialDays: '2',
      newAccountLink: "https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=",
      contact: {
        openTime: "6:00am",
        closeTime: "6:30pm",
        email: "woof@gabbadoggydaycare.com",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14157.078780074915!2d153.0441013!3d-27.4919868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cbf7d0ff474ef0e!2sGabba%20Doggy%20Daycare!5e0!3m2!1sen!2sau!4v1608508120256!5m2!1sen!2sau",
        reviewLink: 'https://g.page/gabba-doggy-daycare/review?gm',
        placeId: 'ChIJdRYTDfhbkWsRDu909A99vyw',
        name: "Gabba Doggy Daycare",
        street: "46 Deshon St",
        suburb: "Woolloongabba",
        city: 'Brisbane',
        postcode: "4102 QLD",
        phone: "0423 487 302"
      },      
    },
  },
  mutations: {
    setRegion(state, payload) {
      state.region = payload
    },
    setAuthCode(state, payload) {
      state.authCode = payload
    },
    setToken(state, payload) {
      state.accessToken = payload
    },
    setHowFound(state, payload) {
      state.howFound = payload
    }
  },
  actions: {
    setRegion(context, payload) {
      context.commit('setRegion', payload)
    },
    setAuthCode(context, payload) {
      context.commit('setAuthCode', payload)
    },
    setToken(context, payload) {
      context.commit('setToken', payload)
    },
    setHowFound(context, payload) {
      context.commit('setHowFound', payload)
    }
  },
  modules: {}
})