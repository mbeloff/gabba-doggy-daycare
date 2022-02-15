<template>
  <div class="text-gray-500 bg-gray-900 ">
    <div class="container max-w-screen-xl px-3 mx-auto py-4">
      <div class="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">

        <!-- <div class="mx-auto bg-center bg-no-repeat bg-contain sm:bg-left logo sm:hidden lg:block" alt="gabba doggy daycare logo" style="height: 150px; width: 150px">
        </div> -->
        
        
        <div class="flex-grow text-center sm:text-left font-bold">
          <img class="ml-auto mr-auto md:ml-0" src="../assets/img/gddc-text.svg" alt="Gabba Doggy Daycare">
          <!-- <p class="text-lg text-gray-400 mt-5">Extra Info</p> -->
          <ul class="gap-4 md:gap-1 list-none text-sm grid grid-cols-2 text-left w-full max-w-lg mt-2">
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
              <router-link :to="{ name: 'Jobs', params: {region: getRegion()} }" class="focus:outline-white hover:text-white">Jobs / Volunteer</router-link>
            </li>
            <li class="">
              <router-link :to="{ name: 'Contact', params: {region: getRegion()} }" class="focus:outline-white hover:text-white">Contact Us</router-link>
            </li>
            <li class="">
              <router-link :to="{ name: 'Faq' }" class="focus:outline-white hover:text-white">Help</router-link>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <div class="text-sm">
              <ul class="space-y-4 md:space-y-1 list-none text-sm">
                <li v-if="getRegion() == 'brisbane'">
                   <a class="focus:outline-white text-gray-400 hover:text-yellow-300 text-lg font-bold" :href="`tel:` + contact.phone.replaceAll(' ', '')"><i class="fad fa-mobile-alt mr-2"></i>{{contact.phone}}</a>
                   <p>call between 6:30am - 6:30pm</p>
                </li>
                <li>
                  <a class="text-gray-400 focus:outline-white hover:text-yellow-300 break-all" :href="`mailto:` + contact.email">{{contact.email}}</a>
                </li>
                <li>
                  {{contact.street}}, {{contact.suburb}}, {{contact.postcode}}
                </li>
              </ul>
          </div>
          <div class="flex flex-row space-x-3 mt-4 justify-center sm:justify-start">
            <social-icon site="facebook"></social-icon>
            <social-icon site="instagram"></social-icon>
            <social-icon site="tiktok"></social-icon>
          </div>         
        </div>
      </div>
    </div>
    <div class="col text-center bg-super-dark">
      <p class="text-xs tracking-wide">© <router-link :to="{ name: 'New Home', params: {region: getRegion()} }">gabbadoggydaycare.com</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      contact() {
        return this.$store.state[this.$store.state.region].contact         
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