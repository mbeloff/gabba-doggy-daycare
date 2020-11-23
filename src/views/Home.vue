<template>
  <div>
    <Hero2></Hero2>
    <!-- <Hero></Hero> -->
    <Cards></Cards>
    <div class="section">
      <div class="container grid grid-cols-1 gap-20 lg:gap-40 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col">
          <Title><template v-slot:small>Brisbane Dogs Love it Here</template>
          <template v-slot:big>More than just a day care</template></Title>
          <p class="mb-10 leading-8"></p>
          <ul class="text-left list-none list-inside">   
            <li class="grid w-full mb-5 shadow-xl" v-for="(item, i) in features" :key="i">
              <div class="bg-gradient-to-r from-blue-100 via-blue-100 to-indigo-200 text-blue-800 f rounded-t-lg px-4 py-1">
                <p><i class="fas fa-paw mr-2 opacity-50"></i>{{item.title}}</p>
              </div>
              <div class="flex-grow rounded-b-lg text-base px-4 py-1 font-medium text-gray-500">
                <p>{{item.desc}}</p>
              </div>
            </li>         
          </ul>
          <div class="mt-10 text-center">
            <router-link :to="{ name: 'Daycare' }" class="inline-block btn-blue">Find Out More</router-link>
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
  // import Hero from "@/components/Hero.vue"
  import Hero2 from "@/components/Hero2.vue"
  import Cards from "@/components/Cards.vue"
  export default {
    components: {
      // Hero,
      Hero2,
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
  data() {
    return {
      features: [
        {
          title: "Easy Online Bookings",
          desc: "Signup online to conveniently manage your own bookings, update your information or purchase daycare packages"
        },
        {
          title: "Large Facility",
          desc: "Spacious play areas with access to grass."
        },
        {
          title: "Pet Taxi Service",
          desc: "local pickup and dropoff within 3km"
        },
        {
          title: "Daily Walks",
          desc: "Fresh air and exercise with a dog park close by"
        },
        {
          title: "Trip to the bay or river",
          desc: "Give your dog a little bit of an adventure. Small group outings to take in the scenery."
        },
        {
          title: "Grooming",
          desc: "Warm hydrobath and grooming services available"
        },
      ]
    }
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