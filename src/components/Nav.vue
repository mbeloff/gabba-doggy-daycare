<template>
  <nav @mouseleave="hide" v-touch:swipe.down="hide" class="mx-auto flex items-center justify-between flex-wrap py-4 px-2 lg:px-10 shadow-lg bg-white relative">
    <router-link :to="{ name: 'Home'}" class="flex items-center flex-shrink-0 text-blue-600 mr-2 lg:mr-6 focus:outline-blue">

      <img class="h-8 mr-2" src="../assets/img/gddc-paw.svg" alt="">
      <!-- <span class="font-semibold text-xl tracking-tight ml-2">Gabba Doggy Day Care</span> -->
      <img class="h-5 md:h-6" src="../assets/img/gddc-text.svg" alt="">

    </router-link>
    <div class="block lg:hidden">
      <button v-on:click="show = !show" class="flex items-center py-2 rounded text-blue-600 hover:text-blue-400 hover:border-blue-400 focus:outline-blue">
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <transition name="slide">
      <div v-show="show" class="w-full block flex-grow lg:flex absolute px-4 pb-4 shadow-lg lg:shadow-none droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto bg-white left-0 ">
        <div class="text-sm lg:flex-grow font-bold mt-1 lg:space-y-0 lg:space-x-4">
          <menu-item v-for="(item, i) in items" v-bind:item="item" :key="i" tabindex="-1"></menu-item>
        </div>
        <!-- 
        
        unhide login/sign-up below
      
       -->
        <div class="flex flex-row flex-wrap justify-between mt-4 sm:mt-0 ">
          <div class=" self-center align-center w-full lg:w-auto text-center divide-pink-500 divide-x text-pink-500 mb-3 lg:mb-0">
            <button class="px-4 focus:outline-blue" @click="showLogin()">Login</button>
            <router-link :to="{name: 'Sign-up'}" class="px-4 focus:outline-blue">Create Account</router-link>
          </div>
          <div class="h-full flex self-center">
            <SocialIcon site="facebook" class="focus:outline-blue"></SocialIcon>
            <SocialIcon site="instagram" class="focus:outline-blue"></SocialIcon>
          </div>

          <open-modal class="inline-block  px-5 py-2 rounded bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue ml-2">Let me Know!</open-modal>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        show: true,
        items: [
          {
          label: "Home",
          link: "Home",
        },
        {
          label: "Daycare",
          link: "Daycare",
          sub: [
            {
              label: "About",
              link: "Daycare",
              hash: "#about"
            },
            {
              label: "Prices",
              link: "Daycare",
              hash: "#prices"
            },
            {
              label: "Joining",
              link: "Daycare",
              hash: "#enrol"
            }
          ]
        },
        {
          label: "Contact",
          link: "Contact",
        }
        ]
      }
    },
    methods: {
      onResize() {
        if (window.innerWidth > 1023) {
          this.show = true
        } else {
          this.show = false
        }
      },
      showLogin() {
        this.$modal.show('login-modal')
      },
      hide() {
        if (window.innerWidth < 1024) {
          this.show = false
        }
        
      }
    },
    created() {
      window.addEventListener('resize', this.onResize)
      if (window.innerWidth < 1023) {
        this.show = false
      }
    },
    BeforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    },
  }
</script>
<style>
  .droppy {
    top: 100%;
    z-index: -1;
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: top .75s ease, opacity 1s;
  }

  .slide-enter {
    top: 0%;
    opacity: 0;
  }

  .slide-leave-to {
    top: 0%;
    opacity: 0;
  }
</style>