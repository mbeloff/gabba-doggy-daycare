<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-2 mx-auto bg-white shadow-lg lg:px-10">
    <router-link :to="{ name: 'Home'}" class="flex items-center flex-1 self-stretch mr-2 text-blue-600 lg:mr-6 focus:outline-blue nav-brand">

      <!-- <img class="h-6 mr-2" src="../assets/img/gddc-paw.svg" alt="Gabba Doggy Daycare Paw Icon"> -->
      <img class="h-full pr-3" src="../assets/img/gddc-text.svg" alt="Gabba Doggy Daycare">

    </router-link>
    
    <div class="block lg:hidden" >
     
      <!-- <button v-on:click="show = !show" class="flex items-center text-white focus:outline-none bg-pink-500 p-1 rounded focus:bg-pink-600 animate-ping-sm">
        <svg class="w-6 h-6 fill-current"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path :class="{ 'rotate-180' : show}" class="transform origin-center transition" d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
        </svg>
      </button> -->

      <button class="menu bg-pink-500 rounded focus:outline-pink" v-on:click="show = !show" :class="{ 'opened' : show}" onclick="this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
      <svg width="38" height="38" viewBox="0 0 100 100" class="transform transition " :class="{ 'rotate-90' : show}">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>

    </div>
    <transition name="slide">
      <div v-show="show" class="absolute left-0 flex-grow block w-full px-4 pb-0 bg-white shadow-lg lg:flex lg:shadow-none droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto border-t lg:border-none">
        <div class="flex flex-col lg:flex-row  lg:flex-grow lg:space-y-0 ">
          <nav-item v-for="(item, i) in regionMenu" v-bind:item="item" :key="i" :style="{ order: item.order }"></nav-item>
        </div>
        <div class="flex flex-row flex-wrap justify-between mt-4 sm:mt-0">
          <div class="self-center w-full mb-5 text-center divide-x divide-pink-500 align-center lg:w-auto lg:mb-0">
            <button class="link-pink px-3" @click="showLogin()">Login</button>
            <router-link :to="{name: 'Sign-up'}" class="link-pink px-3" exact-active-class="text-pink-300 focus:outline-none">Create Account</router-link>
          </div>
          <!-- <div class="flex self-center h-full">
            <SocialIcon site="facebook" class="focus:outline-blue" ></SocialIcon>
            <SocialIcon site="instagram" class="focus:outline-blue" ></SocialIcon>
            
          </div> -->

         
        </div>
        
      </div>
    </transition>
     <div class="w-full flex justify-between border-t mt-2" :class="{ 'pt-2' : phone }"><a class="font-bold tracking-wide text-xl" :href="`tel:` + phone.replace(/\s+/g, '') "><i class="fad fa-mobile-alt mr-2 wiggle2"></i>{{phone}}</a>
      <open-modal class="inline-block rounded-full px-2 ml-2 text-lg" title="Leave a message"><i class="far fa-comment-alt-smile"></i></open-modal></div>
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
        menus: {
          brisbane: [
             {
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
          label: "Grooming",
          link: "Grooming",
          order: "3",
        },
        {
          label: "Contact",
          link: "Contact",
          order: "4"
        }
          ],
          adelaide: [
            {
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
        return this.menus[this.$store.state.global.region]
      },
      phone() {
        return this.$store.state[this.$store.state.global.region].contact.phone
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

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
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
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>