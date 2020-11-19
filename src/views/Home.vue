<template>
  <div class="text-lg">
    <Hero></Hero>
    <Cards></Cards>
    <div class="section">
      <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col y-5 md:my-20">
          <p class="mb-10 font-bold text-blue-700">Brisbane Dogs Love it Here</p>
          <h2 class="mb-10 text-5xl font-bold leading-tight tracking-tight">More than just a day care</h2>
          <p class="mb-10 leading-8">Gabba Doggy Day Care offers a range of additional services to make each day a little better. For you AND your furry pal.</p>
          <ul class="font-bold text-left list-none list-inside">
            
            <ListItem>Easy Online Bookings <br>
            <span class="text-sm text-gray-700">Signup online to conveniently manage your own bookings, update your information or purchase daycare packages</span>
            </ListItem>
            <ListItem>Large facility <br>
            <span class="text-sm text-gray-700">Multiple big, open play areas with access to grass.</span>
            </ListItem>
            <ListItem>Pet Taxi Service <br>
            <span class="text-sm text-gray-700">local pickup and dropoff within 3km</span>
            </ListItem>
            <ListItem>Daily Walks <br>
            <span class="text-sm text-gray-700">Fresh air and exercise with a dog park close by</span>
            </ListItem>
            <ListItem>Trips to the bay, or along the river <br>
            <span class="text-sm text-gray-700">Give your dog a little bit of an adventure. Small group outings to take in the scenery.</span>
            </ListItem>
            <ListItem>Grooming <br>
             <span class="text-sm text-gray-700">Warm hydrobath and grooming services available</span>
             </ListItem>
          </ul>
          <div class="mt-10 text-center">
            <router-link :to="{ name: 'Daycare' }" class="inline-block px-5 py-2 text-xl text-white bg-blue-600 rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500 focus:outline-blue">Find Out More</router-link>
          </div>
        </div>
        <div class="bg-cover rounded-sm col champ-pup">
        </div>
      </div>
    </div>

    <!-- <div class="bg-blue-700 section">
      <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="bg-cover rounded-sm col sad-pup">
        </div>
        <div class="p-6 text-white bg-blue-500 bg-opacity-25 rounded shadow-xl col md:my-20">
          <h2 class="mb-10 text-5xl font-bold leading-tight tracking-tight">Bored at home?</h2>
          <p class="mb-10">Does your dog get into mischief while you're at work? Give them a day out to play and meet new friends instead of getting restless at home.</p>
          <div class="grid w-full place-items-center"><i class="fas fa-bone"></i></div>         
        </div>
      </div>
    </div> -->

    
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import Cards from "@/components/Cards.vue"
  export default {
    components: {
      Hero,
      Cards
    },
    metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          "Your best friends' new favourite place. Don't leave your dogs home alone, bring them to Gabba Doggy Day Care for a great day out.",
        vmid: 'description'
      }
    ]
  },
  mounted() {
    if (this.$route.name === "Register") {
      this.$modal.show("contact-modal");
    }
  }
  }
</script>

<style>
  .champ-pup {
    background-image: url(../assets/img/champ.jpg);
    min-height: 300px;
    background-position: 45% 80%;
  }

  .sad-pup {
    background-image: url(../assets/img/sadpup.jpg);
    min-height: 300px;
    background-position: 50% 80%;
  }

  .flower-pup {
    background-image: url(../assets/img/flower-pup.jpg);
    min-height: 300px;
    background-position: 50% 30%
  }
</style>