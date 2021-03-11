<template>
  <div class="container px-2 py-20 mx-auto section lg:px-20 xl:px-40" id="prices">
    <div id="daycare-pricing">
      <title-block class="text-center">
        <template #small>Price List</template>
        <template #big>Grooming <br><span class="text-base tracking-normal">Open from 7:30am - 2pm</span></template>
      </title-block>

      <div class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-10 text-sm">
        <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
          <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
            <div v-if="service.highlight">
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
              <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>

            <div class="flex-grow px-2">{{service.name}} <br> <span class="text-pink-500">{{ service.soon }}</span></div>
            <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
            </div>
          </div>
        </div>
        <p class="text-center">All grooming half price if you're booked in for daycare on the same day <i class='fas fa-heart text-xs opacity-50'></i></p>
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