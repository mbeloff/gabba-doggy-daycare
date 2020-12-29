<template>
  <div class="text-gray-500 bg-gray-900 ">
    <div class="container px-3 mx-auto py-4">
      <div class="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">

        <div class="mx-auto bg-center bg-no-repeat bg-contain sm:bg-left logo sm:hidden lg:block" alt="gabba doggy daycare logo" style="height: 150px; width: 150px">
        </div>
        <div class="flex-grow text-center sm:text-left">
          <p class="text-lg text-gray-400">Quick Links</p>
          <ul class="space-y-2 md:space-y-0 list-none">

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
              <a href="https://www.gabbadoggydaycareshop.com" class="focus:outline-white hover:text-white">Daycare Shop</a>
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }" class="focus:outline-white hover:text-white">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <div class="flex-grow text-center sm:text-left">
          <p class="text-lg text-gray-400">Info</p>
          <ul class="space-y-2 md:space-y-0 list-none">
            <li>
              <router-link :to="{ name: 'Vaccinations' }" class="focus:outline-white hover:text-white">Vaccinations</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Privacy' }" class="focus:outline-white hover:text-white">Privacy Policy</router-link>
            </li>
            <li>
              <a href="/docs/GDDC-general-agreement.pdf" download class="focus:outline-white hover:text-white">Daycare Contract</a>
            </li>
            <li>
              <a href="/docs/GDDC-medical-agreement.pdf" download class="focus:outline-white hover:text-white">Medical Release</a>
            </li>
          </ul>
        </div>


        <div class="text-center sm:text-left">
          <div class="">
            <p class="text-xl font-bold text-gray-400">Get in touch</p>
            <p class="text-gray-500">
              <a class="focus:outline-white hover:underline font-semibold text-yellow-300" href="tel:0423487302"><i class="fas fa-phone-rotary mr-2"></i>0423 487 302</a><br>
              <a class="text-gray-300 hover:text-gray-100 focus:outline-white hover:underline" href="mailto:woof@gabbadoggydaycare.com">woof@gabbadoggydaycare.com</a><br>
              46 Deshon st, Woolloongabba, QLD Australia 4102</p>
          </div>
          <div class="flex flex-row mt-2 justify-center sm:justify-start">
            <SocialIcon site="facebook"></SocialIcon>
            <SocialIcon site="instagram"></SocialIcon>
          </div>
        </div>
      </div>
    </div>
    <div class="col text-center bg-black">
      <p>© <a href="https://www.gabbadoggydaycare.com">gabbadoggydaycare.com</a></p>
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