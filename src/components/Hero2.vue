<template>
<div class="">
  <div class="hero-grid grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 bg-gray-200">
    <div class="grid p-10 lg:py-40 sm:px-40 2xl:px-60 order-2 lg:order-1 col-span-2">
      <div class="place-self-center space-y-3">
        <p class="mb-5 text-xl md:text-2xl"><span class="font-bold text-yellow-500">OPENING SOON!</span> Register your details early for a <nobr>3-day</nobr> trial at Gabba Doggy Day Care. We'll let you know when we're ready to take bookings.</p>
        <open-modal class="w-full btn-blue text-xl">Let me know!</open-modal>
      </div>
    </div>
    <div class="order-1 lg:order-2 col hero-pup bg-cover bg-center col-span-2">

    </div>
  </div>
</div>
  

</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.hero-grid {
  grid-template-rows: auto auto
};

  .hero-pup {
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1/gddc/hero-pup-full.jpg);
    @media only screen and (max-width: 1023px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
      height: 250px;  
      max-height: 250px;
    }
  }
</style>