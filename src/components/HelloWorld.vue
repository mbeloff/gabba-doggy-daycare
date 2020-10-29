<template>
  <div class="hero hero-pup h-screen bg-cover bg-center text-white relative">
    <div class="container p-4 flex flex-col justify-center h-full mx-auto">
      <div class="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <p class="text-6xl font-bold leading-tight mb-3">A great day out for your pupper</p>
        <p class="mb-5 tracking-wider"><span class="font-bold text-orange-500">OPENING SOON!</span> Register your details for 3-days free at Gabba Doggy Day Care.</p>
        <button @click="$refs.modalName.openModal()" class="border text-lg rounded-full px-5 py-2 hover:bg-white  hover:text-black focus:outline-white">Register</button>
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
  .hero {    
    height: calc(100vh - 91px);
    min-height: 700px;
  }

  .hero-pup {
    background-image: url(../assets/img/pouncingpup.jpg);
  }
</style>