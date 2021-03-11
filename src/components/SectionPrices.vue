<template>
  <div class="px-2 py-20 mx-auto max-w-screen-sm" id="prices">
    <div id="daycare-pricing">
      <title-block class="text-center">
        <template #small><span class="capitalize">{{ getRegion() }}</span> Price List</template>
        <template #big>Day Care <br><span class="text-base tracking-normal font-normal">Open from {{ contact.openTime }} - {{ contact.closeTime }} <br> (Half Day - 5 hours)</span></template>
      </title-block>

      <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
        <div v-for="(service, i) in prices[region].daycare" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
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
    </div>

    <div class=" mt-4">
      <p class="mb-2">To make a purchase, just <open-login class="link-pink">log in</open-login> to your account and click 'Purchase a Package'.</p>
    </div>
    <div id="extras-pricing" v-if="Object.keys(prices[region].extras).length !== 0">
      <title-block class="text-center">
        <template #big>Extras</template>
      </title-block>
      <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
        <div v-for="(extra, i) in prices[region].extras" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-100 rounded-lg">
            <div class="flex-grow px-2" :class="{ 'opacity-50' : extra.soon == '- available soon'}">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TitleBlock from './base/TitleBlock.vue'
  export default {
  components: { TitleBlock },
    computed: {
      region() {
        return this.$store.state.region
      },
      contact() {
        return this.$store.state[this.$store.state.region].contact
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
              FullDayWeek: {
                name: "Daycare Monday to Friday",
                soon: " - unlimited daycare for one week",
                price: "$150",
                highlight: true,
                
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
                desc: "A group adventure to the park, river or bay for a walk and some fresh air",
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
              FullDayWeek: {
                name: "Daycare Monday to Friday",
                soon: " - unlimited daycare for one week",
                price: "$150",
                highlight: true,
                
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