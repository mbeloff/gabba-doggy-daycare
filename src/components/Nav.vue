<template>
  <nav class="mx-auto flex items-center justify-between flex-wrap py-6 px-2 lg:px-10 shadow-lg bg-white relative">
    <div class="flex items-center flex-shrink-0 text-blue-500 mr-2 lg:mr-6">
      <i class="fas fa-paw"></i>
      <span class="font-semibold text-xl tracking-tight ml-2">Gabba Doggy Day Care</span>
    </div>
    <div class="block lg:hidden">
      <button v-on:click="show = !show" class="flex items-center px-3 py-3 rounded text-blue-600 hover:text-blue-400 hover:border-blue-400 focus:outline-blue">
        <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <transition name="slide">
      <div v-show="show" class="w-full block flex-grow lg:flex  absolute pl-4 pb-4 shadow-lg lg:shadow-none droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto bg-white left-0">
      <div class="text-sm lg:flex-grow font-bold mt-1">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 focus:outline-blue mr-4">
          Home
        </a>
        <!-- <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 focus:outline-blue mr-4">
          Menu#2
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 focus:outline-blue mr-4">
          Menu#3
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 focus:outline-blue">
          Menu#4
        </a> -->
      </div>
      <div>
        <open-modal class="inline-block text-lg px-5 py-2 rounded bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:text-white hover:bg-blue-700 mt-4 lg:mt-0 focus:outline-blue"><i class="far fa-comment-alt-lines fa-fw mr-2"></i>Register</open-modal>
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
      show: true
    }
  },
  methods: {
  onResize() {
    if (window.innerWidth > 1023) {
      this.show = true
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
  top: -138%;
  opacity: 0;
}
.slide-leave-to {
  top: -138%;
  opacity: 0;
}
</style>