<template>
  <div class="container px-2 py-20 mx-auto section lg:px-20 xl:px-40" id="prices">
    <div id="daycare-pricing">
      <Title class="text-center">
        <template v-slot:small>Price List</template>
        <template v-slot:big>Grooming <br><span class="text-base tracking-normal">Open from 7:30am - 2pm</span></template>
      </Title>

      <div class="grid grid-cols-1 pt-5 gap-x-10">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
          <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
            <div v-if="service.highlight">
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>

            <div class="flex-grow px-2">{{service.name}}<span class="text-pink-500">{{ service.soon }}</span></div>
            <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
            </div>
          </div>
          <div class="z-10 w-10/12 text-sm text-gray-600">{{service.desc}}</div>
        </div>
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
            // BathDaycare: {
            //   name: "Bath & Towel Dry",
            //   soon: " - half price with a daycare booking (Not valid during Free Trial)",
            //   price: "$10",
            //   highlight: true
            // },
            Ears: {
              name: 'Ear Clean',
              price: "$10"
            },
            Nails: {
              name: 'Nail Clip',
              price: "$10"
            },
            Bath: {
              name: 'Bath & Towel Dry',
              price: "$20"
            },          
            BathNailsEars: {
              name: 'Bath, Towel Dry, Nails & Ears',
              price: "$30"
            },
            HygieneTidyGroom: {
              name: "Hygiene Tidy Groom",
              soon: " - price varies by size/breed",
              price: "$60 - 90"
            },
          },
        }
      }
    }
  }
</script>

<style lang="scss">
</style>