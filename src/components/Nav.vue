<template>
  <nav @mouseleave="hide" v-touch:swipe.down="hide" class="relative flex flex-wrap items-center justify-between px-2 py-4 mx-auto bg-white shadow-lg lg:px-10">
    <router-link :to="{ name: 'Home'}" class="flex items-center flex-shrink-0 mr-2 text-blue-600 lg:mr-6 focus:outline-blue">

      <img class="h-8 mr-2" src="../assets/img/gddc-paw.svg" alt="">
      <!-- <span class="ml-2 text-xl font-semibold tracking-tight">Gabba Doggy Day Care</span> -->
      <img class="h-5 md:h-6" src="../assets/img/gddc-text.svg" alt="">

    </router-link>
    <div class="block lg:hidden">
      <button v-on:click="show = !show" class="flex items-center py-2 text-blue-600 rounded hover:text-blue-400 hover:border-blue-400 focus:outline-blue">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <transition name="slide">
      <div v-show="show" class="absolute left-0 flex-grow block w-full px-4 pb-4 bg-white shadow-lg lg:flex lg:shadow-none droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto ">
        <div class="mt-1 text-sm font-bold lg:flex-grow lg:space-y-0 lg:space-x-4">
          <menu-item v-for="(item, i) in items" v-bind:item="item" :key="i" tabindex="-1"></menu-item>
        </div>
        <!-- 
        
        unhide login/sign-up below
      
       -->
        <div class="flex flex-row flex-wrap justify-between mt-4 sm:mt-0 ">
          <div class="self-center w-full mb-3 text-center text-pink-500 divide-x divide-pink-500 align-center lg:w-auto lg:mb-0">
            <button class="px-4 focus:outline-blue" @click="showLogin()">Login</button>
            <router-link :to="{name: 'Sign-up'}" class="px-4 focus:outline-blue">Create Account</router-link>
          </div>
          <div class="flex self-center h-full">
            <SocialIcon site="facebook" class="focus:outline-blue"></SocialIcon>
            <SocialIcon site="instagram" class="focus:outline-blue"></SocialIcon>
          </div>

          <open-modal class="inline-block btn-blue">Let me Know!</open-modal>
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
              name: "Daycare",
              hash: "#about"
            },
            {
              label: "Prices",
              name: "Daycare",
              hash: "#prices"
            },
            {
              label: "Joining",
              name: "Daycare",
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