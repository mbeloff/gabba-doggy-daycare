<template>
<div class="">
  <div class="hero-grid grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 bg-gray-200">
    <div class="grid p-10 lg:py-40 sm:px-40 2xl:px-60 order-2 lg:order-1 col-span-2">
      <div class="place-self-center">
        <img class="mb-2" src="https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_600/q_auto,f_auto/v1/gddc/3daytrial.png" alt="">
        <span class="text-sm tracking-tight inline-block mb-2">Free trial for dogs over 6 months only</span>
       <router-link :to="{name: 'Sign-up'}" class="btn-blue text-xl w-full inline-block text-center">Sign me up!</router-link>
      </div>
    </div>
    <div class="order-1 lg:order-2 col hero-pup bg-cover bg-center md:bg-top col-span-2">
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
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_1024/f_auto,q_auto/v1609904265/gddc/301c.jpg);
  @media only screen and (max-width: 1023px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_840/f_auto,q_auto/v1609904265/gddc/301c.jpg);
    height: 350px;  
    max-height: 350px;
  }
  @media only screen and (max-width: 550px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_640/f_auto,q_auto/v1609904265/gddc/301c.jpg);
    height: 250px;  
    max-height: 250px;
  }
}
</style>