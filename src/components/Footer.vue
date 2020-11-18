<template>
  <div class="bg-gray-900 py-6 text-gray-600 ">
    <div class="container mx-auto px-3">
      <div class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">

        <div class="flex-grow bg-contain bg-no-repeat bg-center sm:bg-left logo " alt="">
        </div>



        <ul class="flex-grow list-none sm:text-left text-center">
          <p class="text-lg text-gray-400">Quick Links</p>
          <li>
            <router-link :to="{ name: 'Home' }" class="focus:outline-white hover:text-white">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Daycare' }" class="focus:outline-white hover:text-white">Daycare</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Sign-up' }" class="focus:outline-white hover:text-white">Create Account</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" class="focus:outline-white hover:text-white">Contact Us</router-link>
          </li>
        </ul>
        <ul class="flex-grow list-none sm:text-left text-center">
          <p class="text-lg text-gray-400">Info</p>
          <li>
            <router-link :to="{ name: 'Vaccinations' }" class="focus:outline-white hover:text-white">Vaccinations</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Privacy' }" class="focus:outline-white hover:text-white">Privacy Policy</router-link>
          </li>
          <p class="text-lg text-gray-400">Agreements</p>
          <li>
            <a href="/docs/GDDC-general-agreement.pdf" class="focus:outline-white hover:text-white">Daycare Contract</a>
          </li>
          <li>
            <a href="/docs/GDDC-medical-agreement.pdf" class="focus:outline-white hover:text-white">Medical Release</a>
          </li>
        
        </ul>

        <div class="text-center sm:text-left">
          <div class="">
            <p class="text-xl text-gray-400 font-bold">Get in touch</p>
            <p class="text-gray-500">
              <a class="text-gray-300 hover:taxt-gray-100 focus:outline-white hover:underline" href="mailto:woof@gabbadoggydaycare.com">woof@gabbadoggydaycare.com</a><br>
              46 Deshon st,<br>Woolloongabba 4102</p>
          </div>
          <div class="flex flex-row mt-2">
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