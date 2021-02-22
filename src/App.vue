<template>
  <div id="app">
    <div class="fixed w-full nav-wrapper" style="z-index: 100">
      <!-- <div class="bg-blue-500 lg:px-10 font-bold text-white z-10">
        <button :class="{'loc-active text-pink-500' : isRegion('brisbane')}" class="py-1 px-3 font-bold" @click="regionSelect('brisbane')">Brisbane</button>
        <button :class="{'loc-active text-pink-500' : isRegion('adelaide')}" class="py-1 px-3 font-bold" @click="regionSelect('adelaide')">Adelaide</button>
      </div> -->
      <Nav/>
    </div>
    <div class="pt-19 app-content" style="min-height: 50vh">
      <transition name="pagefade" mode="out-in">
        <router-view />
      </transition>
      <Modal name="contact-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template v-slot:title>Got a Question?</template>
          <template v-slot:body>
            <RegisterInterest></RegisterInterest>
          </template>
        </modal-inner>
      </Modal>
      <Modal name="login-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template v-slot:title>Login</template>
          <template v-slot:body>
            <Login></Login>
          </template>
        </modal-inner>
      </Modal>
    </div>

    <div class="footer-wrapper">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  import ModalInner from './components/ModalInner.vue'
  import RegisterInterest from '@/components/RegisterInterest.vue'
  import Login from '@/components/Login.vue'
  export default {
    data() {
      return {
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
        return region == this.$store.state.global.region
        // return region == this.$route.params.region
      }
    },
    created() {
      let path = this.$route.path
      let param = this.$route.params.region
      if (path !== '/' && !param) {
        console.log('created, no param')
        this.$router.push({
          name: this.$route.name,
          params: {
            region: this.$store.state.global.region
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
      if (param == 'adelaide' || param == 'brisbane') {
        this.$store.dispatch('setRegion', param)
      } else if (param) {
        this.$router.push({
            name: 'NotFound',
          })
      } else if (param == undefined) {
        this.$router.push({
          name: this.$route.name,
          params: {
            region: this.$store.state.global.region
          }
        })
      }
    },
    name: 'App',
    components: {
      Nav,
      Footer,
      ModalInner,
      RegisterInterest,
      Login,
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
        "reviewCount": "3"
      },
      "review": [{
          "@type": "Review",
          "author": "Melka Ruby",
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
<style lang="scss">
.app-content{
  margin-top: 99px;
  @media only screen and (min-width: 1024px) {
     margin-top: 85px
  }
}
</style>
<style lang="postcss">
  .loc-active {
    background: white;
    position: relative;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.223), 0px 30px 30px rgba(0, 0, 0, 0.123)
  }

  .pagefade-enter-active,
  .pagefade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .pagefade-enter-active,
  .pagefade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .pagefade-enter,
  .pagefade-leave-active {
    opacity: 0;
  }

  @font-face {
    font-display: swap;
  }

  body {
    font-family: 'Open Sans', Arial, sans-serif !important;
    color: #474b57;
    scroll-behavior: smooth;
    
  }

  #app {
    display: grid;
    grid-template-rows: 1fr auto;
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
      @apply px-5 py-2 bg-blue-500 text-white rounded-full text-lg
    }

    .btn-blue:hover {
      @apply bg-yellow-400 border-transparent
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
      @apply block mt-2 mb-0 text-sm font-bold text-blue-500 uppercase
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
</style>