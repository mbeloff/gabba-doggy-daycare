<template>
  <div class="container px-2 py-20 mx-auto section" id="prices">
    <div id="daycare-pricing">
      <Title class="text-center">
        <template v-slot:small>Price List</template>
        <template v-slot:big>Day Care <br><span class="text-base tracking-normal">Open from 6:30am - 6:30pm <br> (Half Day - 5 hours)</span></template>
      </Title>

      <div class="grid grid-cols-1 pt-5 gap-x-10">
        <div v-for="(service, i) in prices[region].daycare" :key="i" class="mb-2 bg-white" :class="[{ 'font-bold' : service.highlight}, 'order-' + service.order]">
          <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2 mt-4' : service.highlight}">
            <div v-if="service.highlight">
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>

            <div class="flex-grow px-2">{{service.name}}<span class="text-pink-500">{{ service.soon }}</span></div>
            <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
            </div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{service.desc}}</div> -->
        </div>
      </div>
    </div>

    <div class=" mt-4">
      <p class="mb-2">To make a purchase, just <open-login class="link-pink">log in</open-login> to your account and click 'Purchase a Package'.</p>
      <p class="mb-8 text-sm">Please note: Buying a package does not book you in for any services - to make a booking, you will also need to login and click 'request daycare'.</p>
    </div>
    <div id="extras-pricing" v-if="Object.keys(prices[region].extras).length !== 0">
      <Title class="text-center">
        <template v-slot:big>Extras</template>
      </Title>
      <div class="grid grid-cols-1 pt-5 gap-x-10">
        <div v-for="(extra, i) in prices[region].extras" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-100 rounded-lg">
            <div class="flex-grow px-2" :class="{ 'opacity-50' : extra.soon == '- available soon'}">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{extra.desc}}</div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    // computed: {
    //   prices() {
    //     return this.data.prices[this.$store.state.global.region].prices
    //   }
    // },
    computed: {
      region() {
        return this.$store.state.global.region
      }
    },
    data() {
      return {
        prices: {
          brisbane: {
            daycare: {
              HalfDay: {
                name: 'Half Day',
                price: "$40",
                order: '1'
              },
              HalfDayPack: {
                name: "Half Day 10-pack",
                // soon: " - valid for 3 months",
                price: "$300",
                order: '3'
              },
              FullDay: {
                name: 'Full Day',
                price: "$50",
                order: '2'
              },
              FullDayPack: {
                name: "Full Day 10-pack",
                // soon: " - valid for 3 months",
                price: "$400",
                order: '4'
              },
              FullDayWeek: {
                name: "Daycare Monday to Friday",
                soon: " - unlimited daycare for one week",
                price: "$150",
                highlight: true,
                order: '5'
              },
            },
            extras: {
              Pictures: {
                name: "Photo Updates",
                desc: "Wondering how much fun your dog is having while they're away? Get photo updates sent to you",
                soon: "- available soon",
                price: "$10",
                order: '1'
              },
              Excursion: {
                name: "Group Excursion",
                desc: "A 2-hour group adventure to the park, river or bay for a walk and some fresh air",
                soon: "- available soon",
                price: "$20",
                order: '2'
              },
              PetTaxi: {
                name: "Pet Taxi (Local Pickup and Dropoff)",
                desc: "Local pickup & dropoff in our Pet Taxi (within 5km)",
                soon: "- limited availability",
                price: "$40",
                order: '3'
              },
            }
          },
          adelaide: {
            daycare: {
              HalfDay: {
                name: 'Half Day',
                price: "$40",
                order: '1'
              },
              HalfDayPack: {
                name: "Half Day 10-pack",
                // soon: " - valid for 3 months",
                price: "$300",
                order: '3'
              },
              FullDay: {
                name: 'Full Day',
                price: "$50",
                order: '2'
              },
              FullDayPack: {
                name: "Full Day 10-pack",
                // soon: " - valid for 3 months",
                price: "$400",
                order: '4'
              },
              FullDayWeek: {
                name: "Daycare Monday to Friday",
                soon: " - unlimited daycare for one week",
                price: "$150",
                highlight: true,
                order: '5'
              },
            },
            extras: {}
          },
        },

      }
    }
  }
</script>

<style lang="scss">
</style>