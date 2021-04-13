<template>
  <div class='h-full'>
    <div  v-if="this.regionAreas">
      <div class="pt-20 container max-w-screen-lg mx-auto">
      <title-block class="text-center px-2">
      <template #small>welcome</template>
      <template #big>Check out our place</template>
    </title-block>
    <img class="mb-10 mx-auto explore-map" src="https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_600/v1616118682/gddc/areas/map.jpg" alt="">
    </div>    
    <div :class="{'bg-gradient-to-tr from-gray-100 to-gray-200': (i+1) % 2 }" class="py-5 border-b" v-for="(area, i) in regionAreas" :key="i">
      <div  class="grid grid-cols-1 md:grid-cols-2 px-2 max-w-screen-lg gap-x-10 gap-y-5 mx-auto">
      <div class="flex flex-col justify-center">
        <div class="grid grid-flow-col auto-cols-max gap-3">
          <icon-stack class="ml-0" :icon="area.icon"></icon-stack>  <p class="text-lg font-bold text-blue-700 self-center">{{area.heading}}</p>
        </div>        
        <p class="ml-11">{{area.desc}}</p>
      </div>
      <div class="grid grid-cols-2 gap-2 md:order-1">
        <square-image v-for="(img, i) in area.img" :key="i" :img="img"></square-image>
      </div>
    </div>
    </div>
    <router-link :to="{name: 'Sign-up'}" ><button class="btn-blue my-20 mx-auto block"><i class="fal fa-thumbs-up"></i> Sign me up</button></router-link>    
    </div>

      <not-available v-else></not-available>

    
  </div>
</template>

<script>
export default {
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
        heading: 'Huge, indoor daycare',
        desc: "We've created a massive, off-leash dog daycare centre, with multiple spacious play areas and heaps of things to do. Gabba Doggy Daycare is a dog's home away from home.",
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119001/gddc/areas/big.jpg', 
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119540/gddc/areas/big2.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119540/gddc/areas/thing.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1/gddc/areas/lounge.jpg',
        ],
        icon: 'home-heart'
      },
      {
        heading: 'Agility course.',
        desc: 'Build your dogs confidence with steps, ramps, obstacles and more! Run through, jump over and play upon a wonderful set-up built for fun!',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility.jpg',
           'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility2.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility3.jpg',
           'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility4.jpg'
        ],
        icon: 'stopwatch'
      },
      {
        heading: 'Toys and Balls',
        desc: 'It\'s like doggy heaven here with all the balls and toys a pup can handle. Ball pits, chew toys and friends to play with - there\'s never a dull day at GDDC.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118678/gddc/areas/balls2.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls4.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls.jpg',
        ],
        icon: 'tennis-ball'
      },
      {
        heading: 'Grass and Sand',
        desc: 'Dogs love to get some sunshine and play in our large sand pit and grass areas.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616128729/gddc/areas/grass5.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/grass4.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118681/gddc/areas/sand2.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/sand.jpg'
        ],
        icon: 'sunglasses'
      },
      {
        heading: 'Room to Relax',
        desc: "Dedicated quiet areas for lunchtime naps, as well as comfy lounges, beds and other cozy corners to curl up in.",
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1/gddc/areas/chill3.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill2.jpg',
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
</style>