import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
      region: "brisbane",
      email: "woof@gabbadoggydaycare.com",
    brisbane: {
      hasGrooming: true,
      hasTraining: true,
      trialDays: '3',
      newAccountLink: "https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=",
      contact: {
        openTime: "6:30am",
        closeTime: "6:30pm",
        email: "woof@gabbadoggydaycare.com",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14157.078780074915!2d153.0441013!3d-27.4919868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cbf7d0ff474ef0e!2sGabba%20Doggy%20Daycare!5e0!3m2!1sen!2sau!4v1608508120256!5m2!1sen!2sau",
        name: "Gabba Doggy Daycare",
        street: "46 Deshon St",
        suburb: "Woollloongabba",
        city: 'Brisbane',
        postcode: "4102 QLD",
        phone: "0423 487 302"
      },
      
    },
    adelaide: {
      hasGrooming: false,
      hasTraining: false,
      trialDays: '2',
      newAccountLink: "https://secure.petexec.net/newOwner.php?x=nY9ncZ+6Dbg=",
      contact: {
        email: "adelaide@gabbadoggydaycare.com",
        openTime: "7:00am",
        closeTime: "6:30pm",
        name: "Gabba Doggy Daycare Bowden",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1497711006255!2d138.57764031523757!3d-34.90269078038304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c8c9c90eac39%3A0x6d46df845e15728b!2s86%20Gibson%20St%2C%20Bowden%20SA%205007!5e0!3m2!1sen!2sau!4v1613522591272!5m2!1sen!2sau",
        street: "86 Gibson St",
        city: "Adelaide",
        suburb: "Bowden",
        postcode: "5007 SA",
        phone: "0423 487 302"
      },
    }
  },
  mutations: {
    setRegion(state, payload) {
      state.region = payload
    }
  },
  actions: {
    setRegion(context, payload) {
      context.commit('setRegion', payload)
    }
  },
  modules: {}
})