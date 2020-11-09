<template>
  <div class="bg-gray-900 py-6 text-gray-600 ">
    <div class="container mx-auto px-3">
      <!-- <div class="w-full py-10 text-gray-400">
      </div> -->
      <div class="flex flex-col sm:flex-row">


            <div class="flex-1 bg-contain bg-no-repeat bg-center sm:bg-left logo my-10 sm:my-0" alt=""></div>

          <ul class="list-none mr-10 pr-10">
            <p class="text-lg text-gray-400">Quick Links</p>
        <li><router-link to="Home" class="focus:outline-white">Home</router-link></li>
        <li><router-link to="Privacy" class="focus:outline-white">Privacy Policy</router-link></li>
        </ul>

        
        <div class="ml-0 sm:ml-auto text-center sm:text-left">
          <div class="mb-3">
            <p class="text-xl text-gray-400 font-bold">Get in touch</p>
          <p class="text-gray-500">
            <a class="text-gray-300 hover:taxt-gray-100 focus:outline-white" href="mailto:woof@gabbadoggydaycare.com">woof@gabbadoggydaycare.com</a><br>
            46 Deshon st,<br>Woolloongabba 4102</p>
          </div>
          <div class="">
            <SocialIcon site="facebook"></SocialIcon>
            <SocialIcon site="instagram"></SocialIcon>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.logo {
  background-image: url(../assets/img/gddc-logo.svg);
  min-height: 150px;
}

.social-icon:hover {
  .fa-stack-1x {
    color: white;
  }
}
</style>