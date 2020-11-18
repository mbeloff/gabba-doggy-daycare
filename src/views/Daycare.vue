<template>
  <div class="bg-white">
    <div class="section bg-gray-200">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 lg:px-20">
        <div class="col y-5 md:my-20">
          <Title>
            <template v-slot:small>Check out what's available</template>
            <template v-slot:big>Play, Relax, Socialise</template>
          </Title>
          <p class="mb-4">Gabba Doggy Day Care offers specialised care for your dog while you're away - whether that's for a couple of hours or a whole day. We take care to place each of our guests with others of a similar size and temperament, and we even have a puppy creche so the little ones get the care and attention that they need. Everyone has a place at Gabba Doggy Day Care.</p>
          <p>See below for more information about our day care prices, and additional services to make your pup's day a little bit special.</p>

        </div>
        <div class="col toy-pup bg-cover rounded-sm">
        </div>
      </div>
    </div>
    <div class="section">

    </div>
    <div class="section px-2 container mx-auto py-10">
      <p class="font-bold text-blue-700 mb-10 text-center">Price List</p>
      <h2 class="font-bold tracking-tight leading-tight text-5xl my-10 text-center">Day Care <br><span class="text-base tracking-normal">Open from 7am - 6pm</span></h2>


      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 pt-5">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white">
          <div class="flex rounded-lg bg-gray-200">
            <div class="px-2 flex-grow">{{service.name}}</div>
            <div class="px-2"><span class="text-pink-500">{{service.price}}</span></div>
          </div>
          <!-- <div class="w-10/12 pt-3 text-sm text-gray-600 p-2 z-10">{{service.desc}}</div> -->
        </div>
        
      </div>
      <p class="text-center mt-2 text-blue-600">more pricing options available soon</p>
      <h2 class="font-bold tracking-tight leading-tight text-5xl my-10 text-center">Extras</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 pt-5">
        <div v-for="(extra, i) in prices.extras" :key="i" class="mb-2 bg-white">
          <div class="flex rounded-lg bg-gray-200">
            <div class="px-2 flex-grow">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
          </div>
          <!-- <div class="w-10/12 pt-3 text-sm text-gray-600 p-2 z-10">{{extra.desc}}</div> -->
        </div>
      </div>
    </div>
    <div class="section bg-gray-200">
      <div class="container mx-auto py-10">
        <div class="text-center">
          <Title>
            <template v-slot:small>Ready to join us?</template>
            <template v-slot:big>Before You Enroll</template>
          </Title>
        </div>
        <div class="px-4 grid grid-cols-1 md:grid-cols-6 gap-20 lg:px-20">

          <div class="text-left md:col-span-4">
            <p class="mb-3"><span class="font-bold">We can't wait to meet you</span>, but there are a few things to get out of the way first. In order to make sure everyone is safe and has a great time at Gabba Doggy Day Care, we ask that all of our canine guests are:</p>
            <ul class="list-inside list-disc mb-3">
              <ListItem>Up to date with all of their vaccinations (Distemper, Hepatitis, Leptospirosis, Parvovirus and Parainfluenza) and Canine Cough (Bordetella)</ListItem>
              <ListItem>Have adequate protection against fleas, worms and ticks</ListItem>
              <ListItem>Desexed (if over than 6 months)</ListItem>
              <ListItem>Friendly with people and other dogs</ListItem>
            </ul>
            <p class="mb-3">If that sounds good to you, please <a href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" target="_blank" class="text-pink-500 hover:underline">click here</a> to register an account with us. This will allow you to enter your (and your dog's) information, purchase day care packages and schedule day care sessions at Gabba Doggy Day Care.</p>
            <p class="">If have any questions or concerns regarding the above criteria, you can view our <router-link class="text-pink-500 hover:underline" to="vaccinations">vaccination policy</router-link>, or shoot us a quick email at <a class="text-pink-500 hover:underline" href="mailto:woof@gabbadoggydaycare.com">woof@gabbadoggydaycare.com</a> to discuss.</p>



          </div>
          <div class="md:col-span-2 bg-cover flower-pup">
          </div>
        </div>
        <div class="my-10 grid grid-cols-1 sm:grid-cols-2 gap-5 divide-x divide-pink-500">
          <div class="text-center sm:text-right col"><a target="_blank" rel="noopener" href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" class="inline-block px-5 py-2 rounded text-xl bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue text-center">Create an Account</a></div>
          <div class="text-left col flex items-center"><button @click="showLogin" class="text-pink-500 align-center text-center sm:text-left hover:underline mx-auto sm:ml-5">I already have an account</button></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
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