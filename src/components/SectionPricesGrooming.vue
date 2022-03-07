<template>
  <div class="container px-2 py-20 mx-auto section max-w-screen-lg">
    <title-block class="text-center">
      <template #small>Grooming</template>
      <template #big>Prices</template>
    </title-block>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
      <div class="">
        <div class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm">
          <p class="font-bold mb-4">Basic grooming services available to be booked online.</p>
          <div
            v-for="service in prices.daycare"
            :key="service.name"
            class="mb-2 bg-white"
            :class="{ 'font-bold' : service.highlight}"
          >
            <div
              class="flex bg-gray-100 rounded-lg relative ring-pink-200"
              :class="{ 'ring-2' : service.highlight}"
            >
              <!-- <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left- 1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div> -->
              <div class="flex-grow px-2">{{service.name}} <br> <span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="bg-cover bg-center bg-groom rounded-lg shadow-xl md:order-1 aspect-w-3 aspect-h-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: {
        daycare: [
          {
            name: 'Ear Clean',
            price: '$10',
          },
          {
            name: 'Nail Clip',
            price: '$10',
          },
          {
            name: 'Bath & Towel Dry',
            price: '$10',
          },
        ],
        wednesday: [
          {
            name: 'Hygiene Groom',
            price: ['$60'],
          },
          {
            name: 'Full Groom',
            price: ['$95', '$100', '$105'],
          },
          {
            name: 'De-shed',
            extra: '(De-shed long coat add +$10)',
            price: ['$50', '$60', '$70'],
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.bg-groom {
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_550/f_auto,q_auto/v1/gddc/photos/12_21/31.jpg);
}
</style>