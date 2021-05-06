<template>
  <div id="app">
    <div class="fixed w-full nav-wrapper" style="z-index: 100">

<!--// CITY SELECT // -->

      <div class="bg-blue-500 lg:px-10 font-bold text-white z-10">
        <button title="GDDC Brisbane" :class="{'tab-active text-pink-500' : isRegion('brisbane')}" class="py-1 px-3 font-bold focus:outline-none" @click="regionSelect('brisbane')">Brisbane</button>
        <button title="GDDC Adelaide" :class="{'tab-active text-pink-500' : isRegion('adelaide')}" class="py-1 px-3 font-bold focus:outline-none" @click="regionSelect('adelaide')">Adelaide</button>
      </div>

      <nav-bar></nav-bar>
    </div>
    <div class="pt-19 app-content" style="min-height: 50vh">
      <transition name="pagefade" mode="out-in">
        <router-view />
      </transition>
      <Modal name="contact-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template #title>Got a Question?</template>
          <template #body>
            <form-inquiry></form-inquiry>
          </template>
        </modal-inner>
      </Modal>
      <Modal name="login-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template #title>Login</template>
          <template #body>
            <form-login></form-login>
          </template>
        </modal-inner>
      </Modal>
    </div>
    <section-footer></section-footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import SectionFooter from './components/SectionFooter.vue'
  import ModalInner from './components/ModalInner.vue'
  import FormInquiry from '@/components/FormInquiry.vue'
  import FormLogin from '@/components/FormLogin.vue'
  export default {
    data() {
      return {
        accessToken: ""
      }
    },
    mounted() {
      if (this.$route.name == 'Login') {
        this.$modal.show('login-modal');
      }
    },
    watch: {
      "$route.params.path": {
        handler: function () {
          if (this.$route.path == '/login') {
            this.$modal.show('login-modal');
          }
        },
        deep: true,
        immediate: true
      },
    },
    methods: {
      regionSelect(region) {
        this.$store.dispatch('setRegion', region);
        this.$router.push({
          name: this.$route.name,
          params: {
            region: region
          }
        })
      },
      isRegion(region) {
        return region == this.$store.state.region
        // return region == this.$route.params.region
      }
    },
    created() {      
      let path = this.$route.path
      let param = this.$route.params.region
      console.log(window.location.href)
      console.log(window.location.hash)
      if (window.location.href.indexOf("access_token") > 1) {
        this.accessToken = window.location.hash.split('=').split('&')[0]
        this.$store.dispatch('setAuthCode', this.accessToken)
        console.log('state authCode: ' + this.$store.state.authCode)
        console.log('authCode: ' + this.authCode)
        return
      }
      if (path !== '/' && !param) {
        this.$router.push({
          name: this.$route.name,
          params: {
            region: this.$store.state.region
          }
        })
      } else {
        if (path == '/home/adelaide') {
          this.$store.dispatch('setRegion', param)
        } else if (param == 'adelaide' || param == 'brisbane') {
        this.$store.dispatch('setRegion', param)
      } else if (param) {
        this.$router.push({
            name: 'NotFound',
          })
      }
      }
    },
    beforeUpdate() {
      
      let param = this.$route.params.region
      if (param == this.getRegion()) {
        return
      }
      else if (param == 'adelaide' || param == 'brisbane') {
        this.$store.dispatch('setRegion', param)
      } else if (param) {
        this.$router.push({
            name: 'NotFound',
          })
      } else if (param == undefined) {
        this.$router.push({
          name: this.$route.name,
          params: {
            region: this.$store.state.region
          }
        })
      }
    },
    name: 'App',
    components: {
      NavBar,
      SectionFooter,
      ModalInner,
      FormInquiry,
      FormLogin,
    },
    metaInfo: {
      title: 'Home',
      titleTemplate: 'Gabba Doggy Daycare | %s',
      meta: [{
        name: 'description',
        content: "Your pup's home away from home. Don't leave your dogs home alone, taken them to Gabba Doggy Daycare to have fun with new friends.",
        vmid: 'description'
      }]
    },
    
    jsonld: {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "Gabba Doggy Daycare",
      "image": "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg",
      "logo": "https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "5"
      },
      "review": [{
          "@type": "Review",
          "author": "Meika Ruby",
          "datePublished": "2020-12-15",
          "description": "My doggy had a great time. I loved the photos they sent and could tell he was entertained all day. The staff were lovely and I could tell Billy was comfortable with them 💙",
          "name": "Facebook Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Jennie S",
          "datePublished": "2020-12-12",
          "description": `I took advantage of the new business promotion on the 3 free days to see whether the doggy daycare would be a fit for my 2 small dogs.
          They had to much fun on the days they were there and we will definitely be booking in again.
          The ladies there were very professional and were very quick to answer any questions that i had.`,
          "name": "Google Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Hannah Roberts",
          "datePublished": "2021-02-11",
          "description": `Wonderful place! Our lab and golden retriever have been coming weekly and always have the best time. The staff are lovely and it's a fun environment. Couldn't recommend more`,
          "name": "Google Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        }
      ],
      "telephone": "0423 487 302",
      "email": "woof@gabbadoggydaycare.com",
      "url": "https://www.gabbadoggydaycare.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "46 Deshon st",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": {
          "@type": "DayOfWeek",
          "name": "Mo-Fr 06:30-18:30"
        }
      }
    }
  }
</script>
<style lang="postcss">
  .app-content{
    margin-top: 131px;
    @media only screen and (min-width: 1024px) {
      margin-top: 129px
    }
  }
  .btn-disabled {
    pointer-events: none;
    opacity: .3;
  }

  .tab-active {
    background: white;
    position: relative;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.223), 0px 30px 30px rgba(0, 0, 0, 0.123)
  }

  .pagefade-enter-active,
  .pagefade-leave-active {
    transition-duration: 0.15s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .pagefade-enter,
  .pagefade-leave-active {
    opacity: 0;
  }

    .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .grow-enter-active,
  .grow-leave-active {
    transition: max-height 0.5s, opacity 0.5s;
    max-height: 100px;
  }

  .grow-enter,
  .grow-leave-to {
    opacity: 0;
    max-height: 0px;
  }

  .grow2-enter-active,
  .grow2-leave-active {
    transition: max-height 0.5s, opacity 0.5s;
    max-height: 756px;
  }

  .grow2-enter,
  .grow2-leave-to {
    opacity: 0;
    max-height: 0px;
  }
  
  .tile {
    background: linear-gradient(to bottom, rgb(246, 246, 246),rgb(246, 246, 246), rgba(235, 236, 240, 0.644)), url(./assets/img/gddc_tile.svg);
    background-size: 300px;
  }

  @font-face {
    font-display: swap;
  }

  body {
    font-family: 'Open Sans', Arial, sans-serif !important;
    color: #474b57;
    scroll-behavior: smooth;    
  }
  
  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='black' fill-opacity='.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to bottom right, rgba(0, 153, 255, 0.63), rgb(212, 232, 255));
    background-size: 5px 5px, cover;
  }

  #app {
    display: grid;
    grid-template-rows: minmax(100vh, 1fr) auto;
    min-height: 100vh;
  }

  .vm--modal {
    height: auto !important;
    background-color: transparent !important
  }

  .vm--overlay {
    background: #0006;
  }

  @layer components {
    .btn-blue {
      @apply px-5 py-2 bg-blue-500 text-white rounded-md text-base border-yellow-300 border-b-2
    }

    .btn-blue:hover {
      @apply bg-yellow-400
    }

    .btn-blue:focus {
      @apply outline-blue
    }

    .link-pink {
      @apply text-pink-500
    }

    .link-pink:hover {
      @apply underline
    }

    .link-pink:focus {
      @apply underline outline-blue
    }

    .my-input {
      @apply w-full px-3 py-1 text-lg text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none placeholder-blue-400
    }

    .my-input:focus {
      @apply outline-none ring bg-opacity-75
    }

    .my-label {
      @apply block mt-1 mb-0 text-xs font-bold text-blue-500 uppercase
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
    -webkit-transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .avoid-clicks {
    pointer-events: none;
  }
</style>