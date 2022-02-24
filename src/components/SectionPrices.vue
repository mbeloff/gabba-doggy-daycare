<template>
  <div class="px-2 py-20 mx-auto max-w-screen-lg" id="prices">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div class="md:order-2">
        <title-block class="text-center">
          <template #small>Gabba Doggy Daycare</template>
          <template #big>Price List <br></template>
        </title-block>
        <p class="font-bold text-center mt-5">Casual Day Care</p>
        <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
          <div v-for="(service, i) in prices[region].daycare" :key="i" class="mb-1 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2 ' : service.highlight}">
              <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
              <div class="flex-grow px-2">{{service.name}}<span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="font-bold text-center mt-5">Weekly Packages</p>
        <p class="text-sm pt-5">We've made it more affordable to come to day care more often. Weekly packs are available to purchase via your account or in-store and must be used within 7 days.</p>
        <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
          <div v-for="(service, i) in prices[region].weekly" :key="i" class="mb-1 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2 ' : service.highlight}">
              <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
              <div class="flex-grow px-2 items-center flex"><span>{{service.name}}</span><span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative flex flex-col"><span class="line-through font-normal text-gray-400">{{service.original}}</span><span class="text-pink-500">{{service.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-sm mt-4">* 6-day, 8-day and 10-day weekly packs can be used if you have two dogs. These still expire after 7 days.</p>
        <div id="extras-pricing" v-if="prices[region].extras">
          <p class="font-bold text-center mt-5">Extras</p>
          <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm ">
            <div v-for="(extra, i) in prices[region].extras" :key="i" class="mb-2 bg-white">
              <div @click="showTaxi" class="flex bg-gray-100 rounded-lg" :class="{ 'taxi cursor-pointer' : extra.selector == 'taxi' }">
                <div class="flex-grow px-2" :class="{ 'opacity-50' : extra.soon == '- available soon'}">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
                <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-lg shadow-xl md:order-1 bg-cover bg-center aspect-w-3 aspect-h-4 my-20" style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,w_600,h_800/f_auto,q_auto/v1631854044/gddc/promo/gddc_16.jpg)">
      </div>
    </div>
    <div class="mt-10 px-5 text-sm gap-2 flex flex-col">
      <p class="font-bold">Package Terms and Conditions: </p>
      <p>
        All packages are available to purchase online or in-store but must be purchased on or before the day of your appointment. If no package has been purchased by this time, the full casual rate will apply. To purchase online, simply <open-login class="link-pink">log in</open-login> to your account and select <em>Purchase a Package</em>.
      </p>
      <p>
        Weekly packs are valid for 7 days from the date of purchase, 10-day packages are valid for 3 months. Unused days may not be refunded - please contact us if you're unable to use your package and we may extend it for you.
      </p>
      <p>
        If you plan on coming to daycare regularly, ask us about setting up automatic recurring payments so you don't have to worry about purchasing packages each week. If you would like to cancel, pause, or adjust automatic payments at any time, we're happy to accommodate<i class="fal fa-smile"></i> 
      </p>
      <p>
        If we are fully booked, customers on recurring billing will be given priority placement. 
      </p>       
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      region() {
        return this.$store.state.region
      },
      contact() {
        return this.$store.state[this.region].contact
      }
    },
    methods: {
      showTaxi(e) {
      if (e.target.matches('.taxi, .taxi *')) {
        this.$modal.show('taxi-modal')
      }
    },
    
    },
    data() {
      return {
        prices: {
          brisbane: {
            daycare: [
              {
                name: 'Half Day',
                soon: " - up to 5 hours",
                price: "$40",
              },
              {
                name: 'Full Day',
                soon: " - over 5 hours",
                price: "$50",
              },
              {
                name: "Half Day 10-pack",
                soon: " - valid for 3 months",
                price: "$300",
              },
              {
                name: "Full Day 10-pack",
                soon: " - valid for 3 months",
                price: "$400",
              },
              // YearlyPack: {
              //   name: "Unlimited Daycare",
              //   soon: " - valid for 12 months",
              //   price: "$5000",
              // },
            ],
            weekly: [
              {
                name: "Two Days a Week",
                price: "$92 ($46/day)",
              },
              {
                name: "Three Days a Week",
                price: "$132 ($44/day)",
              },
              {
                name: "Four Days a Week",
                price: "$160 ($40/day)",
              },
              {
                name: "Five Days a Week",
                price: "$175 ($35/day)",
                highlight: true,
              },
              {
                name: "Six Days a Week *",
                price: "$210 ($35/day)",
              },
              {
                name: "Eight Days a Week *",
                price: "$280 ($35/day)",
              },
              {
                name: "Ten Days a Week *",
                price: "$350 ($35/day)",
              },
            ],
            extras: {
              Lunch: {
                name: "Lunch (Owner Provided)",
                // desc: "",
                price: "$5",
                order: '2'
              },
              PetTaxi: {
                selector: 'taxi',
                name: "Pet Taxi (Local Pickup or Dropoff)",
                // desc: "Local pickup & dropoff in our Pet Taxi (within 5km)",
                soon: "- more info",
                price: "$10-15",
                order: '3'
              },
            }
          },
        },
      }
    }
  }
</script>

<style lang="scss">
</style>
