<template>
  <div class="tile h-full grid place-items-center">
      <div class="container px-4 py-20 mx-auto lg:px-20 xl:px-40">
        <p v-if="this.name == 'Explore'" class="mb-3 font-bold">Sorry, this page isn't available at our <span class="text-blue-500 capitalize">{{this.region}}</span> location yet.
        </p>
        <p v-else class="mb-3 font-bold">Sorry, <span class="text-blue-500">{{ this.$route.name }}</span> is not available at our <span class="capitalize text-blue-500">{{ this.region }}</span> location yet.
        </p>

        <p class="text-sm mb-3">Please select a different page or location from the top menu or...</p>
        
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