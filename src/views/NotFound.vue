<template>
  <div class="flex w-full h-full bg-bottom bg-no-repeat bg-cover notfound">
    <div class="w-full px-10 pt-10 sm:pt-20 mx-auto md:w-1/2 mb-2">
      <p class="text-5xl font-bold mb-2">Sorry :(</p>
      <p class="text-xl mb-2">I couldn't find the page you were looking for</p>
      <router-link class="text-pink-500 hover:underline focus:text-yellow-500 focus:outline-blue" :to="{name: 'Home'}"><i class="fal fa-home mr-2"></i>take me back home </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.notfound {
  min-height: 350px;
  background-image: url(../assets/img/error-pup.jpg);
  /* background-size: contain */
}
</style>