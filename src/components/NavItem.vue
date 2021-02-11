<template>
  <div @focus="openSub" @blur="mouseLeave" @mouseleave="mouseLeave" @click="clickMenu(item, item.link)" class="relative block lg:inline-block menu-item focus:outline-blue" tabindex="0">
    <button tabindex="0" class="block px-3 py-2 lg:py-0 lg:inline-block focus:outline-none focus:text-blue-500 hover:text-blue-500 font-bold">{{item.label}} <i v-if="item.sub" class="ml-2 fal fa-chevron-right fa-rotate-90"></i></button>
    <transition-expand v-if="item.sub" class="mt-1">
      <div class="grid items-center px-3 origin-top bg-white lg:absolute dropdown lg:shadow-lg" v-show="open">
      <button tabindex="0" class="px-5 py-3 font-bold text-left hover:text-blue-500 focus:outline-none focus:text-blue-500" v-for="(item, i) in item.sub" :key="i" @click.stop="clickSub(item)">{{item.label}}</button>
    </div>
    </transition-expand>
  </div>

</template>

<script>
  export default {
    props: {
      item: Object
    },
    data() {
      return {
        open: false
      }
    },
    methods: {
      openSub() {
        {this.open = true}
      },
      mouseLeave() {
        if(window.innerWidth > 1024)
        {this.open = false}
      },
      clickMenu(el, route) {
        if (!el.sub) {
          this.$router.push({ name: route })
          return
        } else {
          this.open = !this.open
        }
      },
      clickSub(route) {
        this.$router.push(route)
      },
    }
  }
</script>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height, transform;

  opacity: 1
}
.expand-enter,
.expand-leave-to {
  opacity: 0;

}

.dropdown {
  width: max-content;
  overflow: hidden;
}
</style>