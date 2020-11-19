<template>
  <div class="flex w-full h-full bg-bottom bg-no-repeat bg-cover notfound">
    <div class="w-full px-10 pt-10 mx-auto md:w-1/2">
      <p class="text-5xl font-bold">Sorry :(</p>
      <p class="text-xl">I couldn't find the page you were looking for</p>
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