<template>
  <div class="container px-2 py-20 mx-auto section max-w-screen-lg">
     <title-block class="text-center">
          <template #small>Price List</template>
          <template #big>Grooming <br><span class="text-base tracking-normal">Open from 7:30am - 2pm</span></template>
        </title-block>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
      <div class="">
       

        <div class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm">
          <p class="font-bold mb-4">Services available throughout the week</p>
          <div v-for="(service, i) in prices.daycare" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
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
           <p class="font-bold mt-4 mb-4">Services available Wednesday only</p>
          <div v-for="(service, i) in prices.wednesday" :key="i" class="mb-2 bg-white" :class="{ 'font-bold' : service.highlight}">
            <div class="flex bg-gray-100 rounded-lg relative ring-pink-200" :class="{ 'ring-2' : service.highlight}">
              <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>

              <div class="flex-grow px-2">{{service.name}} <br> <span class="text-pink-500">{{ service.soon }}</span></div>
              <div class="px-2 relative text-gray-400"  v-for="(price, i) in service.price" :key="i">
                <span v-if="i == 0">sm: </span>
                <span v-if="i == 1">md: </span>
                <span v-if="i == 2">lg: </span>
                <span class="text-pink-500">{{price}}</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div class=" bg-cover bg-center rounded-lg shadow-xl md:order-1 aspect-w-3 aspect-h-4" style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_550/f_auto,q_auto/v1/gddc/photos/more/12.jpg)"></div>
      <!-- <div class="mt-2">
        <div class="mb-4">
            <p class=""><span class="font-bold">Hygiene Tidy Groom</span> - What's included</p>
          <ul class="list-none list-inside text-sm pt-2 px-2">
            <li v-for="item in hygiene.included" :key="item"><i class="fas fa-check mr-2 text-blue-400 fa-fw"></i>{{item}}</li>
            <li class="mt-1"></li>
            <li v-for="item in hygiene.excluded" :key="item"><i class="fas fa-times mr-2 text-gray-500 fa-fw"></i>{{item}}</li>
          </ul>
        </div>
        <div>
            <p class=""><span class="font-bold">Stripout Groom</span> (for double coated dogs)</p>
          <ul class="list-none list-inside text-sm pt-2 px-2">
            <li v-for="item in stripout.included" :key="item"><i class="fas fa-check mr-2 text-blue-400 fa-fw"></i>{{item}}</li>
            <li class="mt-1"></li>
            <li v-for="item in stripout.excluded" :key="item"><i class="fas fa-times mr-2 text-gray-500 fa-fw"></i>{{item}}</li>
          </ul>
        </div>
        
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // hygiene: {
        //   included: ['Nails clipped', 'Ears and eyes cleaned', 'Feet & paw pads', 'Tail & hygiene areas', 'Face tidied up', 'Thorough brush', 'Bath & blow dry'],
        //   excluded: ['No clipping on body or legs', 'No major matting']
        //   },
        // stripout: {
        //   included: ['Nails clipped', 'Ears and eyes cleaned', 'Stripout undercoat', 'Bath & blow dry'],
        //   excluded: ['No clipping', 'No major matting'],
        // },
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
              price: "$20"
            },
            {
              name: 'Bath, Towel Dry, Nails & Ears',
              price: "$30",
              highlight: true
            },
            {
              name: '+ Blow Dry',
              price: "$10"
            },
            {
              name: '+ Brush Through',
              price: "$10"
            },            
          ],
          wednesday: [
           { 
              name: 'De-shed',
              price: ['$50','$60','$70'],
            },
            {
              name: 'Full Groom',
              price: ['$85','$90','$95']
            }
          ]
        },        
      }
    }
  }
</script>

<style lang="scss">
</style>