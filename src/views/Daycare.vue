<template>
  <div class="bg-white">
    <div class="bg-gray-200 section" id="about">
      <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col y-5 md:my-20">
          <Title>
            <template v-slot:small>Check out what's available</template>
            <template v-slot:big>Play, Relax, Socialise</template>
          </Title>
          <p class="mb-4">Gabba Doggy Day Care offers special care for your dog while you're not able to - whether that's for a couple of hours or a whole day. We take care to place each of our guests with others of a similar size and/or temperament, and we have a puppy creche so the little ones get the extra care and attention that they need. Everyone has a place at Gabba Doggy Day Care.</p>
          <p>See below for more information about our day care prices, and additional services to make your pup's day a little bit special.</p>
        </div>
        <div class="bg-cover rounded-sm col toy-pup">
        </div>
      </div>
    </div>
    <div class="section">

    </div>
    <div class="container px-2 py-20 mx-auto section" id="prices">
      <p class="mb-10 font-bold text-center text-blue-700" >Price List</p>
      <h2 class="my-10 text-5xl font-bold leading-tight tracking-tight text-center">Day Care <br><span class="text-base tracking-normal">Open from 7am - 6pm</span></h2>


      <div class="grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-10">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-200 rounded-lg">
            <div class="flex-grow px-2">{{service.name}}</div>
            <div class="px-2"><span class="text-pink-500">{{service.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{service.desc}}</div> -->
        </div>
        
      </div>
      <p class="mt-2 text-center text-blue-600">more pricing options available soon</p>
      <h2 class="my-10 text-5xl font-bold leading-tight tracking-tight text-center">Extras</h2>
      <div class="grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-10">
        <div v-for="(extra, i) in prices.extras" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-200 rounded-lg">
            <div class="flex-grow px-2">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{extra.desc}}</div> -->
        </div>
      </div>
    </div>
    <div class="bg-gray-200 section"  id="enrol">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <Title>
            <template v-slot:small>Ready to join us?</template>
            <template v-slot:big>Before You Enroll</template>
          </Title>
        </div>
        <div class="grid grid-cols-1 gap-20 px-4 md:grid-cols-3 lg:px-20">
          <div class="text-left md:col-span-2">
            <sign-up-info></sign-up-info>
          </div>
          <div class="bg-cover md:col-span-1 flower-pup">
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 my-10 divide-pink-500 sm:grid-cols-2 sm:divide-x">
          <div class="text-center sm:text-right col"><a target="_blank" rel="noopener" href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" class="inline-block btn-blue">Create an Account</a></div>
          <div class="flex items-center text-left col"><button @click="showLogin" class="mx-auto text-center text-pink-500 align-center sm:text-left hover:underline sm:ml-5">I already have an account</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpInfo from '@/components/SignUpInfo.vue'
  export default {
    components: {
      SignUpInfo
    },
    methods: {
      showLogin() {
        this.$modal.show('login-modal')
      }
    },
    data() {
      return {
        prices: {
          daycare: {
            HalfDay: {
              name: "Half Day",
              desc: "Up to 4 Hours of Day Care",
              price: "$35"
            },
            FullDay: {
              name: 'Full Day',
              desc: "More than 4 hour of Day Care during regular opening hours.",
              price: "$50"
            },
            PuppyCrecheHalf: {
              name: "Puppy Creche - Half Day",
              desc: "Up to 4 hours of extra care for your little one",
              price: "$35"
            },
            PuppyCrecheFull: {
              name: "Puppy Creche - Full Day",
              desc: "Full Day of extra care for your little one",
              price: "$50"
            },
            HalfDayPack: {
              name: "Half Day 10-pack",
              desc: "Save $50 when you buy a half day package",
              price: "$300"
            },
            FullDayPack: {
              name: "Full Day 10-pack",
              desc: "Save $100 when you buy a full day package",
              price: "$400"
            },
          },
          extras: {
            Hydrobath: {
              name: "Hydrobath",
              desc: "Warm hydrobath followed by a towel dry to keep your pooch fresh and clean",
              soon: "- available soon",
              price: "$20"
            },
            Pictures: {
              name: "Photo Updates",
              desc: "Wondering how much fun your dog is having while they're away? Get photo updates sent to you",
              soon: "- available soon",
              price: "$10"
            },
            PetTaxi: {
              name: "Pet Taxi",
              desc: "Local pickup & dropoff in our Pet Taxi (within 3km)",
              soon: "- available soon",
              price: "$20"
            },
            Excursion: {
              name: "A Little Outing",
              desc: "A 2-hour group adventure to the park, river or bay for a walk and some fresh air",
              soon: "- available soon",
              price: "$20"
            },
            Lunch: {
              name: "Lunch Supplied",
              desc: "",
              price: "$5"
            },
            PigsEar: {
              name: "Pig's Ear",
              desc: "",
              price: "$5"
            },
            Cake: {
              name: "Peanut Butter Birthday Cake",
              desc: "A special treat on your pooch's special day",
              price: "$60"
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .toy-pup {
    background-image: url(../assets/img/toypup.jpg);
    min-height: 300px;
    background-position: 45% 50%;
  }
</style>