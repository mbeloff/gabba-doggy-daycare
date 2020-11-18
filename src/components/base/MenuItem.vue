<template>
  <div @focus="openSub" @blur="mouseLeave" @mouseleave="mouseLeave" @click="clickMenu(item, item.link)" class="block lg:inline-block relative menu-item focus:outline-blue" tabindex="0">
    <button tabindex="0" class="font-bold block lg:inline-block focus:outline-none focus:text-blue-600 hover:text-blue-600  p-3">{{item.label}} <i v-if="item.sub" class="fal ml-2 fa-chevron-right fa-rotate-90"></i></button>
    <transition-expand v-if="item.sub" class="mt-1">
      <div class="lg:absolute grid items-center origin-top bg-white dropdown lg:shadow-lg px-3 py-2" v-show="open">
      <button tabindex="0" class="text-left font-bold px-5 py-3 hover:text-blue-600 focus:outline-none focus:text-blue-600" v-for="(item, i) in item.sub" :key="i" @click.stop="clickSub(item)">{{item.label}}</button>
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
  // max-height: 300px;
  @media only screen and (min-width: 1024px) {
  // left: 50%;
  }
}
</style>