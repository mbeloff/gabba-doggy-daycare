<template>
  <div class="hero-grid grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 bg-gray-200">
    <div class="grid p-10 sm:p-20 order-2 lg:order-1 xl:p-20 col-span-2 2xl:col-span-1 2xl:col-start-2">
      <div class="place-self-center space-y-3">
        <p class="mb-5 text-xl"><span class="font-bold text-yellow-400">OPENING SOON!</span> Register your details early for <nobr>3-day</nobr> trial at Gabba Doggy Day Care. We'll let you know when we're ready to take bookings.</p>
        <open-modal class="w-full btn-blue">Let me know!</open-modal>
      </div>
    </div>
    <div class="order-1 lg:order-2 col hero-pup bg-cover bg-center col-span-2">

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
    @media only screen and (max-width: 1024px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
      height: 250px;  
      max-height: 250px;
    }
  }
</style>