<template>
  <div class="container px-2 py-20 mx-auto section max-w-screen-lg">
     <title-block class="text-center">
          <template #small>Price List</template>
          <template #big>Grooming <br><span class="text-base tracking-normal">Open from 7:30am - 2pm</span></template>
        </title-block>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
      <div class="">
        <div class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm">
          <p class="font-bold mb-4">Basic grooming services available to be booked online.</p>
          <div v-for="service in prices.daycare" :key="service.name" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
              <!-- <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left- 1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div> -->
              <div class="flex-grow px-2">{{service.name}} <br> <span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative"><span class="text-pink-500">{{service.price}}</span>
              </div>
            </div>
          </div>
           <!-- <p class="font-bold mt-4 mb-4">Wednesdays only</p>
           <p class="mb-4">Professional grooming services are available on location for GDDC customers every Wednesday. For bookings or enquiries, call Chloe on <a class="link-pink" href="tel:0320938707">0420 938 707</a>.</p>
          <div v-for="service in prices.wednesday" :key="service.name" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
              <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>

              <div class="flex-grow px-2">{{service.name}} <br> <span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative text-gray-400"  v-for="(price, i) in service.price" :key="i">
                <span class="text-pink-500" v-if="service.price.length == 1">{{ price }}</span>
                <template v-else>
                  <span v-if="i == 0">sm: </span>
                  <span v-if="i == 1">md: </span>
                  <span v-if="i == 2">lg: </span>
                  <span class="text-pink-500">{{price}}</span>
                </template>
                
              </div>
            </div>
            <div class="flex-grow text-right mt-1" v-if="service.extra"><span class="px-2 relative text-gray-400">
               {{service.extra}}
            </span></div>             
          </div> -->
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
          daycare: [
            {
              name: 'Ear Clean',
              price: "$10"
            },
            {
              name: 'Nail Clip',
              price: "$10"
            },
            {
              name: 'Bath & Towel Dry',
              price: "$10"
            },          
          ],
          wednesday: [
           { 
              name: 'Hygiene Groom',
              price: ['$60'],
            },           
            {
              name: 'Full Groom',
              price: ['$95','$100','$105']
            },
            { 
              name: 'De-shed',
              extra: '(De-shed long coat add +$10)',
              price: ['$50','$60','$70'],
            },
          ] 
        },        
      }
    }
  }
</script>

<style lang="scss">
</style>