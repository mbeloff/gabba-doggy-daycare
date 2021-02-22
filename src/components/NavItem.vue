<template>
  <router-link tabindex="0" :to="{ name: item.link, params: {region: this.$store.state.global.region}}"   class="relative lg:inline-block menu-item focus:outline-blue mx-3 my-2 lg:my-0 focus:text-blue-500 hover:text-blue-500 font-bold" active-class="text-blue-500">{{item.label}}
  </router-link>

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
      clickMenu(route) {
        // if (!el.sub) {
          this.$router.push({ name: route, params: {region: this.$store.state.global.region} })
          return
        // } else {
          // this.open = !this.open
        // }
      },
      // clickSub(route) {
      //   this.$router.push(route)
      // },
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