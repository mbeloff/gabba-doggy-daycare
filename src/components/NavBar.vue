<template>
  <nav class="relative flex flex-wrap items-center justify-between  mx-auto bg-white shadow-lg ">
    <div class="flex flex-wrap items-center justify-between w-full px-2 py-2 lg:px-10 mx-auto">
      <div class="bg-white absolute top-0 left-0 w-full h-full depth-fix"></div>
      <div class="flex items-center mr-2 text-blue-600 lg:mr-6 ">
        <router-link class="h-full flex-grow" 
        :to="{
          name: 'New Home', 
          params: {region: getRegion()}
          }">
          <img class="nav-logo" src="../assets/img/gddc-text.svg" alt="Gabba Doggy Daycare">
        </router-link>
      </div>

      <div class="block lg:hidden">

        <button id="menu-button" class="flex bg-pink-500 rounded focus:outline-pink" v-on:click="show = !show" :class="{ 'opened' : show}" aria-label="Main Menu">
          <svg width="38" height="38" viewBox="0 0 100 100">
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>


      </div>
      <transition name="slide">
        <div v-show="show" class="absolute left-0 flex-grow block w-full px-4 pb-0 bg-white shadow-2xl lg:flex lg:shadow-none droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto lg:border-none py-3" >
          <div class="flex flex-col lg:flex-row  lg:flex-grow lg:space-y-0">
            <nav-item @click.native="hide" v-for="(item, i) in regionMenu" v-bind:item="item" :key="i" :style="{ order: item.order }"></nav-item>
          </div>
          <!-- <div class="flex flex-row flex-wrap justify-between my-3 sm:my-0"> -->
            <div class="grid grid-cols-2 gap-4 lg:w-auto lg:mb-0 text-center my-3 lg:my-0">
              <button class="btn-blue px-2" @click="showLogin()">Login</button>
              <router-link @click.native="hide" :to="{name: 'Sign-up', params: {region: getRegion()}}" class="btn-blue bg-pink-400 text-white self-center px-2" active-class="btn-disabled">Create Account</router-link>
            </div>
          <!-- </div> -->
        </div>
      </transition>
    </div>

    <div class="bg-white left-0 w-full flex justify-between border-t px-2 py-2 lg:px-10" :class="{ 'pt-2' : phone }"><a class="font-bold tracking-wide text-xl hover:text-pink-500" :href="`tel:` + removeSpaces(phone) "><i class="fad fa-mobile-alt mr-2 wiggle2"></i>{{phone}}</a>
      <open-modal class="inline-block rounded-full px-2 ml-2 text-lg hover:text-pink-500" title="Leave a message"><i class="far fa-comment-alt-smile"></i></open-modal>
    </div>
  </nav>
</template>

<script>
  import NavItem from '@/components/NavItem.vue'
  export default {
    components: {
      NavItem
    },
    name: 'Nav',
    data() {
      return {
        show: true,
        menus: {
          brisbane: [{
              label: "Home",
              link: "New Home",
              order: "1"
            },
            {
              label: "Tour",
              link: "Explore",
              order: "1"
            },
            {
              label: "Daycare",
              link: "Daycare",
              order: "2",
            },
            {
              label: "Grooming",
              link: "Grooming",
              order: "3",
            },
            {
              label: "Training",
              link: "Training",
              order: "4",
            },
            {
              label: "Contact",
              link: "Contact",
              order: "5"
            }
          ],
          adelaide: [{
              label: "Home",
              link: "New Home",
              order: "1"
            },
            {
              label: "Daycare",
              link: "Daycare",
              order: "2",
            },
            {
              label: "Contact",
              link: "Contact",
              order: "4"
            }
          ]
        },
      }
    },
    computed: {
      regionMenu() {
        return this.menus[this.getRegion()]
      },
      phone() {
        return this.$store.state[this.getRegion()].contact.phone
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
      },
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
    mounted() {
      document.addEventListener('scroll', this.hide)
    }
  }
</script>
<style>
  .nav-logo {
    height: 38px; 
    width: 258px
  }

  #menu-button>* {
    pointer-events: none
  }

  .depth-fix {
    z-index: -1
  }

  .droppy {
    top: 100%;
    z-index: -2;
    will-change: top opacity
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: top .6s ease, opacity .8s;
  }

  .slide-enter {
    top: 0%;
    opacity: 0;
  }

  .slide-leave-to {
    top: 0%;
    opacity: 0;
  }

  .nav-brand {
    min-width: 200px !important;
    max-width: 300px !important;
  }

  .wiggle2 {
    animation: wiggle infinite 8s;
    -webkit-animation: wiggle infinite 8s;
    animation-delay: -2s;
    -webkit-animation-delay: -3s;
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
  }

  .line {
    fill: none;
    stroke: white;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 5;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 5;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 5;
  }

  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 5;
  }

  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 5;
  }

  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 5;
  }
</style>