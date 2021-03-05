<template>
  <div class="flex flex-col justify-center">
    <p class="text-center text-sm mb-2">select your location</p>
    <div class="flex justify-center space-x-3">
      <button :class="{'bg-pink-500 text-white' : isRegion('brisbane')}" class="text-gray-400 py-px px-6 rounded-full bg-gray-200 focus:outline-none" @click="regionSelect('brisbane')">Brisbane</button>
      <button :class="{'bg-pink-500 text-white' : isRegion('adelaide')}" class="text-gray-400 py-px px-6 rounded-full bg-gray-200 focus:outline-none" @click="regionSelect('adelaide')">Adelaide</button>
    </div>    
  </div>
</template>

<script>
export default {
methods: {
      regionSelect(region) {
        this.$store.dispatch('setRegion', region);
        this.$router.push({
          name: this.$route.name,
          params: {
            region: region
          }
        })
      },
      isRegion(region) {
        return region == this.$store.state.region
        // return region == this.$route.params.region
      }
    },
}
</script>

<style lang="scss" scoped>
</style>