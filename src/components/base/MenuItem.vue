<template>
  <div @focus="openSub" @blur="mouseLeave" @mouseleave="mouseLeave" @click="clickMenu(item, item.link)" class="block lg:inline-block relative menu-item focus:outline-blue" tabindex="0">
    <button tabindex="-1" class="block lg:inline-block text-gray-700 hover:text-blue-600 focus:outline-blue p-3">{{item.label}}</button> 
    <transition-expand v-if="item.sub" class="mt-1">
      <div class="lg:absolute grid items-center origin-top bg-white dropdown lg:shadow-lg" v-show="open">
      <span tabindex="0" class="px-5 py-3 hover:text-blue-600 focus:outline-blue" v-for="(item, i) in item.sub" :key="i" @click.stop="clickSub({name: item.link, hash: item.hash})">{{item.label}}</span>
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
      }
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
  // overflow: hidden;
  // max-height: 300px;
  @media only screen and (min-width: 1024px) {
  // left: 50%;
  }
}
</style>