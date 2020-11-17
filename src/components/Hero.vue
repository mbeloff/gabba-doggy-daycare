<template>
  <div class="hero hero-pup bg-cover text-white relative">
    <div class="absolute top-0 h-full w-full z-10 hero-pattern"></div>
    <div class="container xs:p-0 flex flex-col justify-center h-full mx-auto z-50">
      <div class="sm:w-2/3 md:w-1/2 lg:w-1/3 absolute z-50 p-4 text-center md:text-left bg-black bg-opacity-25 rounded-xl my-4 mx-4">
      <div class="w-40 md:w-56 mx-auto my-5">
        <img class="w-full" src="../assets/img/gddc-logo.svg" alt="">
      </div>     
        <p class="text-5xl font-bold leading-tight tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-br from-teal-300 to-yellow-300">A great day out for your pup</p>
        <p class="mb-5 tracking-wider text-lg"><span class="font-bold text-orange-400">OPENING SOON!</span> Register your details early for <nobr>3-day</nobr> trial at Gabba Doggy Day Care. We'll let you know when we're ready to take bookings.</p>
        <open-modal class="w-full text-lg px-5 py-2 rounded bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue">Let me know!</open-modal>
        <p class="text-sm mt-4 text-gray-400 text-center">Website under construction. Some information may change :)</p>
      </div>
    </div> 
     
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    metaInfo: {
      title: 'Home'
  },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hero {    
  height: calc(100vh - 68px);
  min-height: 700px;
}

.hero-pup {
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604466493/gddc/hero-pup-sm.jpg);
  background-attachment: scroll;
  background-position: 65% 50%;
  @media only screen and (min-width: 768px) {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604466493/gddc/hero-pup-full.jpg);
    background-position: center;
  }
}

.hero-pattern {
  background-color: #00000000;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='black' fill-opacity='.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>