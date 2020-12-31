<template>
<div class="">
  <div class="hero-grid grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 bg-gray-200">
    <div class="grid p-10 lg:py-40 sm:px-40 2xl:px-60 order-2 lg:order-1 col-span-2">
      <div class="place-self-center space-y-3">
        <p class="text-xl md:text-2xl"><span class="font-bold text-yellow-500 uppercase">3 Days Free</span> All new accounts get their first 3 days of daycare completely free.</p><span class="text-sm tracking-tight leading-">Free trial for dogs over 6 months only</span>
       <router-link to="Sign-up" class="btn-blue text-xl w-full block text-center"> Sign me up!</router-link>
       <p class="text-gray-500">Please note: We are closed from <span class="font-bold"><nobr>Dec 24 - Jan 5</nobr></span></p>
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
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_1520/f_auto,q_auto/v1/gddc/hero-pup-full.jpg);
  @media only screen and (max-width: 1023px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_1220/f_auto,q_auto/v1/gddc/hero-pup-full.jpg);
    height: 250px;  
    max-height: 250px;
  }
  @media only screen and (max-width: 575px) {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_900/f_auto,q_auto/v1/gddc/hero-pup-full.jpg);
  }
  @media only screen and (max-width: 400px) {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_700/f_auto,q_auto/v1/gddc/hero-pup-full.jpg);
  }
}
</style>

