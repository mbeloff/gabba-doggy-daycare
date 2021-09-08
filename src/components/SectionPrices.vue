<template>
  <div class="px-2 py-20 mx-auto max-w-screen-lg" id="prices">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div class="md:order-2">
        <title-block class="text-center">
          <template #small><span class="capitalize">{{ getRegion() }}</span> Daycare</template>
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
        <p class="font-bold text-center mt-5">Automatic Weekly Payments</p>
        <p class="text-sm pt-5">Ask us about recurring billing to get a discount on your Day Care. One automatic payment each Sunday means all you have to worry about is dropping off and picking up your pup - and of course you can pause or adjust your payments if your schedule changes.</p>
        <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
          <div v-for="(service, i) in prices[region].directdebit" :key="i" class="mb-1 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2 ' : service.highlight}">
              <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-4 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left-1.5 top-4 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
              <div class="flex-grow px-2 items-center flex"><span>{{service.name}}</span><span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative flex flex-col"><span class="line-through font-normal">{{service.original}}</span><span class="text-pink-500">{{service.price}}</span>
              </div>
            </div>
          </div>
        </div>
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
      <div class="rounded-lg shadow-xl md:order-1 bg-cover bg-center aspect-w-3 aspect-h-4 my-20" style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_656/f_auto,q_auto/v1/gddc/photos/810.jpg)">
      </div>
    </div>
    <div class="mt-10 px-5 text-sm gap-2 flex flex-col">
      <p class="font-bold">Package Terms and Conditions: </p>
      <p>
        12-month unlimited package is only available to desexed dogs over 6 months, and may be subject to approval.</p> 
      <p>
        Unlimited daycare packages are valid for all days that we are open, which may not always be 5 days each week. Any days you opt not to use, or days we may be closed, including public holidays, may not be refunded or carried over to following weeks.
      </p>
      <p>
        If you would like to cancel, pause, or adjust your weekly payment to a different package, just let us know before your usual billing day and we'll be happy to accommodate <i class="fal fa-smile"></i> 
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
            daycare: {
              HalfDay: {
                name: 'Half Day',
                soon: " - up to 5 hours",
                price: "$40",
              },
              FullDay: {
                name: 'Full Day',
                soon: " - over 5 hours",
                price: "$50",
              },
              HalfDayPack: {
                name: "Half Day 10-pack",
                soon: " - valid for 3 months",
                price: "$300",
              },
              FullDayPack: {
                name: "Full Day 10-pack",
                soon: " - valid for 3 months",
                price: "$400",
              },
              YearlyPack: {
                name: "Unlimited Daycare",
                soon: " - valid for 12 months",
                price: "$5000",
              },
            },
            directdebit: {
              OneDay: {
                name: "One Day a Week",
                price: "$48",
              },
              TwoDays: {
                name: "Two Days a Week",
                price: "$92 ($46/day)",
              },
              ThreeDays: {
                name: "Three Days a Week",
                price: "$132 ($44/day)",
              },
              FourDays: {
                name: "Four Days a Week",
                price: "$168 ($42/day)",
              },
              FullDayWeek: {
                name: "Unlimited Weekly",
                original: "$175 ($35/day)",
                price: "$150 ($30/day)",
                highlight: true,
              },
            },
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
          adelaide: {
            daycare: {
              HalfDay: {
                name: 'Half Day',
                price: "$40",
              },
              FullDay: {
                name: 'Full Day',
                price: "$50",
              },
              HalfDayPack: {
                name: "Half Day 10-pack",
                soon: " - valid for 3 months",
                price: "$300",

              },
              FullDayPack: {
                name: "Full Day 10-pack",
                soon: " - valid for 3 months",
                price: "$400",
              },
              YearlyPack: {
                name: "Unlimited Daycare",
                soon: " - valid for 12 months",
                price: "$5000",
              },
            },
            directdebit: {
              OneDay: {
                name: "One Day a Week",
                price: "$50",
              },
              TwoDays: {
                name: "Two Days a Week",
                price: "$96 ($48/day)",
              },
              ThreeDays: {
                name: "Three Days a Week",
                price: "$138 ($46/day)",
              },
              FullDayWeek: {
                name: "Unlimited Daycare",
                price: "$150 (~$30/day)",
                highlight: true,
              },
            },
            extras: {
              Lunch: {
                name: "Lunch (Owner Provided)",
                // desc: "",
                price: "$5",
                order: '2'
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