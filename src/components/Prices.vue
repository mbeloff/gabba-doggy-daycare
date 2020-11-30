<template>
  <div class="container px-2 py-20 mx-auto section" id="prices">
      <Title class="text-center">
          <template v-slot:small>Price List</template>
          <template v-slot:big>Day Care <br><span class="text-base tracking-normal">Open from 6:30am - 6:30pm</span></template>
      </Title>

      <div class="grid grid-cols-1 pt-5 gap-x-10">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
          <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
            <div v-if="service.highlight">
              <div  class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
            <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>
            
            <div class="flex-grow px-2">{{service.name}}<span class="text-pink-500">{{ service.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{service.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{service.desc}}</div> -->
        </div>       
      </div>
      <Title class="text-center">
        <template v-slot:big>Extras</template>
      </Title>
      <div class="grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-10 opacity-50">
        <div v-for="(extra, i) in prices.extras" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-100 rounded-lg">
            <div class="flex-grow px-2">{{extra.name}} <span class="text-pink-500">{{ extra.soon }}</span></div>
            <div class="px-2"><span class="text-pink-500">{{extra.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{extra.desc}}</div> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
data() {
      return {
        prices: {
          daycare: {
            // HalfDay: {
            //   name: "Half Day",
            //   desc: "Up to 4 Hours of Day Care",
            //   price: "$40"
            // },
            FullDay: {
              name: 'Full Day',
              desc: "More than 4 hour of Day Care during regular opening hours.",
              price: "$50"
            },
            // HalfDayPack: {
            //   name: "Half Day 10-pack",
            //   desc: "Save $50 when you buy a half day package",
            //   soon: " - valid for 3 months",
            //   price: "$300"
            // },
            FullDayPack: {
              name: "Full Day 10-pack",
              // desc: "Save $100 when you buy a full day package",
              soon: " - valid for 3 months",
              price: "$400"
            },
            // HalfDayWeek: {
            //   name: "Half Day Full Week",
            //   // desc: "Save $50 when you buy a half day package",
            //   soon: " - mon-fri",
            //   price: "$??",
            //   highlight: true,
            // },
            FullDayWeek: {
              name: "Full Day Full Week",
              // desc: "Save $50 when you buy a half day package",
              soon: " - every day mon-fri",
              price: "$150",
              highlight: true,
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
              name: "Group Excursion",
              desc: "A 2-hour group adventure to the park, river or bay for a walk and some fresh air",
              soon: "- available soon",
              price: "$20"
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
</style>