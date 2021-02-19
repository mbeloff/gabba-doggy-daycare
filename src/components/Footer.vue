<template>
  <div class="text-gray-500 bg-gray-900 ">
    <div class="container px-3 mx-auto py-4">
      <div class="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">

        <div class="mx-auto bg-center bg-no-repeat bg-contain sm:bg-left logo sm:hidden lg:block" alt="gabba doggy daycare logo" style="height: 150px; width: 150px">
        </div>
        <!-- <div class="flex-grow text-center sm:text-left">
          <p class="text-lg text-gray-400">Quick Links</p>
          <ul class="space-y-2 md:space-y-1 list-none text-sm">

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
              <router-link :to="{ name: 'Grooming' }" class="focus:outline-white hover:text-white">Grooming</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }" class="focus:outline-white hover:text-white">Contact Us</router-link>
            </li>
          </ul>
        </div> -->

        <div class="flex-grow text-center sm:text-left">
          <p class="text-lg text-gray-400 mb-1">Info</p>
          <ul class="gap-1 list-none text-sm grid">
            <li class="">
              <router-link :to="{ name: 'Vaccinations' }" class="focus:outline-white hover:text-white">Vaccinations</router-link>
            </li>
            <li class="">
              <router-link :to="{ name: 'Privacy' }" class="focus:outline-white hover:text-white">Privacy Policy</router-link>
            </li>
            <li class="">
              <a href="/docs/GDDC-general-agreement.pdf" download class="focus:outline-white hover:text-white">Daycare Contract</a>
            </li>
            <li class="">
              <a href="/docs/GDDC-medical-agreement.pdf" download class="focus:outline-white hover:text-white">Medical Release</a>
            </li>
            <li class="">
              <router-link :to="{ name: 'Jobs' }" class="focus:outline-white hover:text-white">Jobs / Volunteer</router-link>
            </li>
          </ul>
        </div>


        <div class="text-center sm:text-left">
          <div class="text-sm">

              <ul class="space-y-2 md:space-y-1 list-none text-sm">
                <li v-if="data.phone">
                   <a class="focus:outline-white hover:underline text-yellow-300 text-3xl" :href="`tel:` + data.phone"><i class="fas fa-phone-rotary mr-2"></i>{{data.phone}}</a>
                </li>
             <li>
               <a class="text-gray-300 hover:text-gray-100 focus:outline-white hover:underline break-all" :href="`mailto:` + data.email">{{data.email}}</a>
             </li>
              <li>
                {{data.street}}, {{data.suburb}}, {{data.postcode}}
              </li>
              
              </ul>
          </div>
          <div class="flex flex-row mt-2 space-x-3 mt-4 justify-center sm:justify-start">
            <SocialIcon site="facebook"></SocialIcon>
            <SocialIcon site="instagram"></SocialIcon>
          </div>
        </div>
      </div>
    </div>
    <div class="col text-center bg-super-dark">
      <p class="text-xs tracking-wide">© <router-link :to="{ name: 'New Home', params: {region: this.$store.state.global.region} }">gabbadoggydaycare.com</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state[this.$store.state.global.region].contact         
      }
    },
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

  .bg-super-dark {
    background: rgb(12, 18, 26)
  }
</style>