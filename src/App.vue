<template>
  <div id="app">

    <div class="fixed w-full nav-wrapper" style="z-index: 100">
      <Nav />
    </div>
    <div class="content-wrapper pt-19" style="margin-top: 72px">
      <transition name="pagefade" mode="out-in">
        <router-view />
      </transition>

      <modal name="contact-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template v-slot:title>Got a Question?</template>
          <template v-slot:body>
            <RegisterInterest></RegisterInterest>
          </template>
        </modal-inner>
      </modal>
      <modal name="login-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template v-slot:title>Login</template>
          <template v-slot:body>
            <Login></Login>
          </template>
        </modal-inner>
      </modal>
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
  // import Slider from "@/components/Slider.vue"
  import Login from '@/components/Login.vue'

  export default {
    jsonld: {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "Gabba Doggy Daycare",
      "image": "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg",
      "logo": "https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg",
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
    },
    name: 'App',
    components: {
      Nav,
      Footer,
      ModalInner,
      RegisterInterest,
      Login,
      // Slider
    },
    metaInfo: {
      title: 'Home',
      titleTemplate: 'Gabba Doggy Daycare | %s',
      meta: [{
        name: 'description',
        content: "Your best friends' new favourite place. Don't leave your dogs home alone, taken them to Gabba Doggy Daycare for a great day out.",
        vmid: 'description'
      }]
    },
    mounted() {
      if (this.$route.path == '/login') {
        this.$modal.show('login-modal')
      }
    }
  }
</script>
<style lang="postcss">
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



  body {
    font-family: 'Open Sans', Arial, sans-serif !important;
    color: #474b57;
    scroll-behavior: smooth;
    font-display: swap;
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
      @apply w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none
    }

    .my-input:focus {
      @apply outline-none ring bg-opacity-75
    }
  }
</style>