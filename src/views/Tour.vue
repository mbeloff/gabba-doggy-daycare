<template>
  <div class='h-full'>
    <div v-if="this.regionAreas">
      <div class="py-8 mx-auto">
      <title-block class="text-center px-2">
        <template #small>welcome</template>
        <template #big> <span>Check out our place</span></template>
      </title-block>
    </div>
    <div :class="{'bg-gradient-to-tr from-gray-100 to-gray-200': (i+1) % 2 }" class="py-5 border-b" v-for="(area, i) in regionAreas" :key="i">
      <div  class="grid grid-cols-1 md:grid-cols-2 px-2 max-w-screen-lg gap-x-10 gap-y-5 mx-auto">
      <div class="flex flex-col justify-center">
        <div class="flex auto-cols-max gap-3">
          <icon-stack class="ml-0" :icon="area.icon"></icon-stack>  <p class="text-lg font-bold text-blue-700 self-center">{{area.heading}}</p>
        </div>        
        <p class="ml-11">{{area.desc}}</p>
      </div>
      <div class="grid grid-cols-2 gap-2 md:order-1">
        <square-image v-for="(img, i) in area.img" :key="i" :img="img"></square-image>
      </div>
    </div>
    </div>
    <router-link :to="{name: 'Sign-up'}" ><button class="btn-blue my-20 mx-auto block"><i class="fal fa-thumbs-up"></i> Join Us Today!</button></router-link>    
    </div>
    <not-available v-else></not-available>    
  </div>
</template>

<script>
export default {
  components: {
    
    },
  computed: {
    regionAreas() {
      return this.areas[this.getRegion()]
    }
  },
  metaInfo: {
      title: 'Explore',
      meta: [{
        name: 'description',
        content: "Find out what makes GDDC such a fun place for your dog to play and make new friends.",
        vmid: 'description'
      }]
    },
data() {
  return {
    areas: {
      brisbane: [
      {
        heading: 'Huge indoor & outdoor daycare',
        desc: "We've created a massive, off-leash dog daycare centre, with multiple spacious play areas and heaps of things to do. Gabba Doggy Daycare is your dog's home away from home.",
        img: [
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1635388814/gddc/photos/10_21/13.jpg', 
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1628570195/gddc/photos/2021_August/4.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119540/gddc/areas/thing.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1635388809/gddc/photos/10_21/2.jpg',
        ],
        icon: 'home-heart'
      },
      {
        heading: 'Toys and Balls',
        desc: 'Chew toys, balls pits, rope, pools to cool off in; GDDC has everything your pup needs to have fun and stay engaged throughout the day.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118678/gddc/areas/balls2.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1635388813/gddc/photos/10_21/12.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls4.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls.jpg',
        ],
        icon: 'tennis-ball'
      },
      {
        heading: 'Grass, Sand and Pools',
        desc: 'Fresh air and sunshine are essential. Dogs love to enjoy some exercise in our large, outdoor grass and sand areas, and have a splash when they want to cool off.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/c_scale,w_300/c_crop,h_300,w_300/v1638764722/gddc/photos/12_21/16.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/c_scale,w_300/c_crop,h_300,w_300/v1636592913/gddc/photos/11_21/7.jpg',    
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/c_scale,w_300/c_crop,h_300,w_300/v1638764725/gddc/photos/12_21/24.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/c_scale,w_300/c_crop,h_300,w_300/v1/gddc/promo/gddc_1.jpg'
        ],
        icon: 'sunglasses'
      },
      {
        heading: 'Room to Relax',
        desc: "Dedicated quiet areas for lunchtime naps, as well as comfy lounges, beds and other cozy corners to curl up in.",
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1/gddc/photos/01_22/14.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1636592913/gddc/photos/11_21/12.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill4.jpg',
        ],
        icon: 'snooze'
      }
    ]
    }
    
  }
}
}
</script>

<style scoped lang="scss">
.explore-map {
  @media only screen and (max-width: 425px) {
    max-width: 320px;
  }  
  @media only screen and (min-width: 425px) {
    width: 425px
  }
  @media only screen and (min-width: 640px) {
    width: 640px
  }
}
// .bg-tour {
//   background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_scale,w_1024/v1636592911/gddc/photos/11_21/5.jpg);
//   @media only screen and (min-width: 1024px) {
//     background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_crop,h_290,ar_5/v1636592911/gddc/photos/11_21/5.jpg);
//   }
// }
</style>