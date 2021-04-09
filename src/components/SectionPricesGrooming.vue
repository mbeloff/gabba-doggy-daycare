<template>
  <div class="container px-2 py-20 mx-auto section max-w-screen-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div class="md:order-2">
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
        </div>
      </div>
      <div class=" bg-cover bg-center rounded-lg shadow-xl md:order-1 aspect-w-3 aspect-h-4" style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_550/f_auto,q_auto/v1/gddc/photos/more/12.jpg)"></div>
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