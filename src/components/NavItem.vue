<template>
  <router-link tabindex="0" :to="{ name: item.link, params: {region: this.$store.state.region}}" class="relative lg:inline-block menu-item focus:outline-blue mx-3 my-2 lg:my-0 focus:text-blue-500 hover:text-blue-500 font-bold text-sm" exact-active-class="text-blue-500">
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
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>