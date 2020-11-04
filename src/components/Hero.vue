<template>
  <div class="hero bg-fixed hero-pup h-screen bg-cover bg-center text-white relative">
    <div class="container p-4 flex flex-col justify-center h-full mx-auto">
      <div class="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <p class="text-6xl font-bold leading-tight tracking-tight mb-3">A great day out for your pup</p>
        <p class="mb-5 tracking-wider text-lg"><span class="font-bold text-orange-500">OPENING SOON!</span> Register your details early for <nobr>3-days</nobr> free at Gabba Doggy Day Care.</p>
        <open-modal class="border text-lg rounded-full px-5 py-2 hover:bg-white hover:text-black focus:outline-white"><i class="far fa-comment-alt-lines fa-fw mr-2"></i>Register</open-modal>
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'Hero',
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .hero {    
    height: calc(100vh - 91px);
    min-height: 700px;
  }

  .hero-pup {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604466493/gddc/hero-pup-sm.jpg);
    @media only screen and (min-width: 768px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604466493/gddc/hero-pup-full.jpg);
    }
  }

</style>