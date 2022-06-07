import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import vueGtm from 'vue-gtm'
import vueMeta from 'vue-meta'
import './assets/styles/index.css'
import VueJsonLD from 'vue-jsonld'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueJsonLD)
Vue.use(vueMeta)
Vue.use(VModal, { componentName: 'v-modal' })

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GMAP_KEY,
        libraries: 'places',
        map_ids: '889dff40544104c5',
        myLocation: false
    }
})

Vue.config.productionTip = false
const requireComponent = require.context(
    // The relative path of the components folder
    './components/base',
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )

    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )
})

Vue.mixin({
    methods: {
        removeSpaces: str => str.replace(/\s+/g, ''),
        getRegion() {
            return this.$store.state.region
        }
    }
})

Vue.use(vueGtm, {
    id: 'GTM-KS5N5P7',
    defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: false, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
