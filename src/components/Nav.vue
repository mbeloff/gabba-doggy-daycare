<template>
  <nav @mouseleave="hide" v-touch:swipe.down="hide" class="relative flex flex-wrap items-center justify-between px-2 py-4 mx-auto bg-white shadow-lg lg:px-10">
    <router-link :to="{ name: 'Home'}" class="flex items-center flex-shrink-0 mr-2 text-blue-600 lg:mr-6 focus:outline-blue">

      <img class="h-8 mr-2" src="../assets/img/gddc-paw.svg" alt="Gabba Doggy Daycare Paw Icon">
      <img class="h-5 md:h-6" src="../assets/img/gddc-text.svg" alt="Gabba Doggy Daycare">

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
        <div class="flex flex-col lg:flex-row divide-x-0 lg:divide-x-2 lg:flex-grow lg:space-y-0 divide-blue-200">
          <nav-item v-for="(item, i) in items" v-bind:item="item" :key="i" tabindex="-1" :style="{ order: item.order }"></nav-item>
          <a href="https://www.gabbadoggydaycareshop.com" target="_blank" class="block px-3 py-3 lg:py-0 lg:inline-block focus:outline-none focus:text-blue-500 hover:text-blue-500 font-bold" style="order: 3">Daycare Shop</a>
        </div>
        <div class="flex flex-row flex-wrap justify-between mt-4 sm:mt-0">
          <div class="self-center w-full mb-5 text-center divide-x divide-pink-500 align-center lg:w-auto lg:mb-0">
            <button class="link-pink px-3" @click="showLogin()">Login</button>
            <router-link :to="{name: 'Sign-up'}" class="link-pink px-3" exact-active-class="text-pink-300 focus:outline-none">Create Account</router-link>
          </div>
          <div class="flex self-center h-full">
            <SocialIcon site="facebook" class="focus:outline-blue" ></SocialIcon>
            <SocialIcon site="instagram" class="focus:outline-blue" ></SocialIcon>
          </div>

          <open-modal class="inline-block btn-blue ml-2" title="Leave a message"><i class="far fa-comment-alt-smile"></i></open-modal>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script>
import NavItem from '@/components/NavItem.vue'
  export default {
    components: { NavItem },
    name: 'Nav',
    data() {
      return {
        show: true,
        items: [
          {
          label: "Home",
          link: "Home",
          order: "1"
        },
        {
          label: "Daycare",
          link: "Daycare",
          order: "2",
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
            },
            // {
            //   label: "Shop",
            //   name: "Shop",
            // }
          ]
        },
        {
          label: "Contact",
          link: "Contact",
          order: "4"
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