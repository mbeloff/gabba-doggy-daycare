<template>
  <div class="flex notfound bg-no-repeat bg-cover bg-bottom w-full h-full">
    <div class="w-full md:w-1/2 mx-auto px-10 pt-10">
      <p class="font-bold text-5xl">Sorry :(</p>
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