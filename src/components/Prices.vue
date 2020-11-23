<template>
  <div class="container px-2 py-20 mx-auto section" id="prices">
      <Title class="text-center">
          <template v-slot:small>Price List</template>
          <template v-slot:big>Day Care <br><span class="text-base tracking-normal">Open from 7am - 6pm</span></template>
      </Title>

      <div class="grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-10">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white">
          <div class="flex bg-gray-100 rounded-lg">
            <div class="flex-grow px-2">{{service.name}}</div>
            <div class="px-2"><span class="text-pink-500">{{service.price}}</span></div>
          </div>
          <!-- <div class="z-10 w-10/12 p-2 pt-3 text-sm text-gray-600">{{service.desc}}</div> -->
        </div>
        
      </div>
      <p class="mt-2 text-center text-blue-500">more pricing options available soon</p>
      <Title class="text-center">
        <template v-slot:big>Extras</template>
      </Title>
      <div class="grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-10">
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
              name: "Group Excursion & Walk",
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

<style>

</style>