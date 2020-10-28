<template>
  <div class="hello h-screen bg-cover bg-center text-white relative">
    <div class="absolute top-0 right-0 trial-img bg-no-repeat bg-contain bg-right-top w-32 h-32"></div>
    <div class="container p-4 flex flex-col justify-center h-full mx-auto">
      <div class="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 class="text-6xl font-bold leading-tight mb-3 text-blue-400">Like a little holiday for your pupper</h1>
        <p class="mb-5 tracking-wider"><span class="font-bold text-orange-500">OPENING SOON!</span> Register your details and we'll keep you posted AND give you a 3-day trial at Gabba Doggy Daycare for FREE when we open.></p>
        <button class="border text-lg rounded-full px-5 py-2 hover:bg-white  hover:text-black focus:outline-white">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .hello {
    background-image: url(../assets/img/pouncingpup.jpg);
    height: calc(100vh - 91px);
    min-height: 700px;
  }

  .trial-img {
    background-image: url(../assets/img/3daytrial.webp);
  }
</style>