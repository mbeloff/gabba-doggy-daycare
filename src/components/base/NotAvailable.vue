<template>
  <div class="tile h-full">
      <div class="container px-4 py-20 mx-auto lg:px-20 xl:px-40">
        <p class="mb-3 font-bold">Sorry, <span class="text-blue-500">{{ this.$route.name }}</span> is not available at this location ({{ this.$route.params.region }}) yet.
        </p>
        <p class="text-sm mb-3">If you're looking for a different location, use the menu at the top of the screen</p>
        <router-link class="text-xl link-pink" :to="{name: 'Home'}"><i class="fal fa-home"></i> Take me back home</router-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>