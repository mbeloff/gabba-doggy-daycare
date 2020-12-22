<template>
<div class="">
  <div class="hero-grid grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 bg-gray-200">
    <div class="grid p-10 lg:py-40 sm:px-40 2xl:px-60 order-2 lg:order-1 col-span-2">
      <div class="place-self-center space-y-3">
        <p class="mb-5 text-xl md:text-2xl"><span class="font-bold text-yellow-500 uppercase">Final week of free trial!</span> All new accounts get a <span class="font-bold">3 DAYS FREE</span> to be used this week. Create an account by clicking the button below.</p>
       <router-link to="Sign-up" class="btn-blue text-xl w-full block text-center"> Sign me up!</router-link>
       <p class="text-gray-500">Please note: We will be closed from <span class="font-bold">24 Dec until 5 Jan</span> <i class="fad fa-candy-cane text-red-500"></i><i class="fad fa-holly-berry text-green-500"></i></p>
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
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_1300/v1/gddc/hero-pup-full.jpg);
    @media only screen and (max-width: 1023px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); 
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_1023/v1/gddc/hero-pup-full.jpg);
      height: 250px;  
      max-height: 250px;
    }
    @media only screen and (max-width: 575px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_600/v1/gddc/hero-pup-full.jpg);
    }
    @media only screen and (max-width: 400px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_320/v1/gddc/hero-pup-full.jpg);
    }
  }
</style>

