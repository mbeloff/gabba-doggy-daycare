<template>
  <router-link tabindex="0" :to="{ name: item.link, params: {region: this.$store.state.region}}" class="relative lg:inline-block menu-item focus:outline-blue mx-3 my-2 lg:my-0 focus:text-blue-500 hover:text-blue-500 font-bold" active-class="text-blue-500">
    {{item.label}}
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
          this.$router.push({ name: route, params: {region: this.$store.state.region} })
          return
      },
    }
  }
</script>

<style lang="scss">
</style>