<template>
  <nav class="flex items-center justify-between flex-wrap p-6 shadow-lg bg-white">
    <div class="flex items-center flex-shrink-0 text-blue-500 mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Gabba Doggy Daycare</span>
    </div>
    <div class="block lg:hidden">
      <button v-on:click="show = !show" class="flex items-center px-3 py-2 border rounded text-blue-600 border-blue-400 hover:text-blue-400 hover:border-blue-400">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <transition name="slide">
      <div v-show="show" class="w-full block flex-grow lg:flex  absolute pl-4 pb-4 droppy lg:p-0 lg:relative lg:z-auto lg:items-center lg:w-auto bg-white left-0">
      <div class="text-sm lg:flex-grow font-bold mt-1">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 mr-4">
          Menu#2
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600">
          Menu#3
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-lg px-5 py-2 rounded bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:text-white hover:bg-blue-700 mt-4 lg:mt-0">Register</a>
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
  transition: all .75s ease;
}
.slide-enter {
  top: -130%;
}
.slide-leave-to {
  top: -130%;
}
</style>