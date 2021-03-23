<template>
  <div class="tile h-full">
      <div class="container px-4 py-20 mx-auto lg:px-20 xl:px-40">
        <p v-if="this.name == 'Explore'" class="mb-3 font-bold">Sorry, this page is still under construction
        </p>
        <p v-else class="mb-3 font-bold">Sorry, <span class="text-blue-500">{{ this.$route.name }}</span> is not available at this location <span class="capitalize">({{ this.region }})</span> yet.
        </p>
        
        <p class="text-sm mb-3">You can switch locations using the menu at the top of the screen.</p>
        <router-link class="text-xl link-pink" :to="{name: 'Home', params: {region: getRegion()}}"><i class="fal fa-home"></i> Take me back home</router-link>
      </div>
    </div>
</template>

<script>
export default {
computed: {
  region() {
    return this.$route.params.region
  },
  name() {
    return this.$route.name
  }
}
}
</script>

<style>

</style>