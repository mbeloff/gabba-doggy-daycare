<template>
  <div id="app">
    <div class="fixed w-full nav-wrapper z-50">
      <!--// CITY SELECT // -->

      <!-- <div class="bg-blue-500 lg:px-10 font-bold text-blue-100 z-10 pt-1 px-1">
        <button title="GDDC Brisbane" :class="{'tab-active text-pink-500' : isRegion('brisbane')}" class="tab" @click="regionSelect('brisbane')">Brisbane</button>
        <button title="GDDC Adelaide" :class="{'tab-active text-pink-500' : isRegion('adelaide')}" class="tab" @click="regionSelect('adelaide')">Adelaide</button>
      </div> -->

      <nav-bar></nav-bar>
      <!-- // * sub-nav message bar -->
      <!-- <div class="shadow-lg fixed z-50 bg-gray-100 border-gray-200 border-t w-full text-center text-sm py-1 flex justify-center">
        <div class="grid items-center">🎅</div>
        <p>asd</p>
        <div class="grid items-center">🎅</div>
      </div> -->
        
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
      <Modal name="taxi-modal" height="auto" :classes="['h-auto', 'bg-transparent']" :scrollable="true" :adaptive="true" :clickToClose="false" :focusTrap="true">
        <modal-inner>
          <template #title>Pet Taxi<span class="font-normal"> - Brisbane</span></template>
          <template #body>
            <section-taxi></section-taxi>
          </template>
        </modal-inner>
      </Modal>
    </div>
    <section-footer></section-footer>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import SectionFooter from '@/components/SectionFooter.vue'
  import ModalInner from '@/components/ModalInner.vue'
  import FormInquiry from '@/components/FormInquiry.vue'
  import FormLogin from '@/components/FormLogin.vue'
  import SectionTaxi from '@/components/SectionTaxi.vue'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      if (this.$route.name == 'Login') {
        this.$modal.show('login-modal');
      }
      if (this.$route.name == 'Taxi') {
        this.$modal.show('taxi-modal');
      }
    },
    watch: {
      "$route.params.path": {
        handler: function () {
          if (this.$route.path == '/login') {
            this.$modal.show('login-modal');
          }
          if (this.$route.params.region == 'brisbane') {
            this.$store.dispatch('setRegion', this.$route.params.region)
          } else if (this.$route.params.region) {
            this.$router.push({
              name: 'NotFound'
            })            
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
    beforeCreate() {
      
    },
    created() {
      // if (this.$route.name == 'NewOwner') {
      //   return
      // }
    },
    beforeUpdate() {
      // if (this.$route.name == 'NewOwner') {
      //   return
      // }
    //   let param = this.$route.params.region
    //   if (param == this.getRegion()) {
    //     return
    //   } else if (param == 'adelaide' || param == 'brisbane') {
    //     this.$store.dispatch('setRegion', param)
    //   } else if (param) {
    //     this.$router.push({
    //       name: 'NotFound',
    //     })
    //   } else if (param == undefined) {
    //     this.$router.push({
    //       name: this.$route.name,
    //       params: {
    // region: this.$store.state.region
    //       }
    //     })
    //   }
    },
    name: 'App',
    components: {
      NavBar,
      SectionFooter,
      ModalInner,
      FormInquiry,
      FormLogin,
      SectionTaxi
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


  }
</script>
<style lang="postcss">
  .app-content {
    /* add 29px for message */
    margin-top: 96px;

    
  }

  @media only screen and (min-width: 1074px) {
    .app-content {
      margin-top: 99px
    }
  }

  .btn-disabled {
    pointer-events: none;
    opacity: .3;
  }

  .tab-active {
    background: white;
    position: relative;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.223), 0px 30px 30px rgba(0, 0, 0, 0.123);
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
    background: linear-gradient(to bottom, rgb(246, 246, 246), rgb(246, 246, 246), rgba(235, 236, 240, 0.644)), url(./assets/img/gddc_tile.svg);
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
      @apply w-full px-3 py-1 text-lg text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded appearance-none placeholder-blue-400
    }

    .my-input:focus {
      @apply outline-none ring bg-opacity-75
    }

    .my-label {
      @apply block mt-1 mb-0 text-xs font-bold text-blue-500 uppercase
    }

    .tab {
      @apply transition-all duration-500 ease-out py-1 pt-1.5 px-3 font-bold border-none outline-none rounded-t-md
    }

    .tab:focus {
      @apply outline-none
    }

    .tab:active {
      @apply outline-none
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