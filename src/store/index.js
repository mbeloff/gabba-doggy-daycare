import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        region: 'brisbane',
        email: 'woof@gabbadoggydaycare.com',
        accessToken: '',
        howFound: {},
        brisbane: {
            clientId: '1e18704def422bd1a3c1d3fdde12d106',
            hasGrooming: true,
            hasTraining: false,
            trialDays: '2',
            newAccountLink:
                'https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=',
            contact: {
                openTime: '6:00am',
                closeTime: '6:30pm',
                email: 'woof@gabbadoggydaycare.com',
                map:
                    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.395253315318!2d153.0503321!3d-27.4880806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a3781a43f41%3A0x40bb1b6c19b1156c!2s1025%20Stanley%20St%20E%2C%20East%20Brisbane%20QLD%204169!5e0!3m2!1sen!2sau!4v1660514788832!5m2!1sen!2sau',
                reviewLink: 'https://g.page/gabba-doggy-daycare/review?gm',
                placeId: 'ChIJQT-kgTdakWsRbBWxGWwbu0A',
                name: 'Gabba Doggy Daycare',
                street: '1025 Stanley St E',
                suburb: 'East Brisbane',
                city: 'Brisbane',
                postcode: '4169 QLD',
                phone: '0450 927 302'
            }
        }
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
