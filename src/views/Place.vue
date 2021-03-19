<template>
  <div class="pt-20">
    <div class="container max-w-screen-lg mx-auto">
      <title-block class="text-left px-2">
      <template #small>welcome</template>
      <template #big>Check out our Place</template>
    </title-block>
    <img class="mb-10 md:max-w-screen-md mx-auto" src="https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_600/v1616118682/gddc/areas/map.jpg" alt="">
    </div>
    
    <div :class="{'tile': (i+1) % 2 }" class="py-2 border-b" v-for="(area, i) in areas" :key="i">
      <div  class="grid grid-cols-1 md:grid-cols-2 px-2 max-w-screen-lg gap-x-10 gap-y-5 mx-auto">
      <div :class="{'md:order-2' : i % 2}" class="flex flex-col justify-center">
        <p class="text-lg font-bold">{{area.heading}}</p>
        <p>{{area.desc}}</p>
      </div>
      <div class="grid grid-cols-2 gap-2 md:order-1">
        <square-image v-for="(img, i) in area.img" :key="i" :img="img"></square-image>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
data() {
  return {
    areas: [
      {
        heading: 'Huge, indoor daycare',
        desc: "We've created a massive, off-leash dog daycare centre, with multiple spacious play areas and heaps of things to do.",
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119001/gddc/areas/big.jpg', 
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119540/gddc/areas/big2.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616119540/gddc/areas/thing.jpg',
        'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1/gddc/areas/lounge.jpg',
        ]
      },
      {
        heading: 'Agility course.',
        desc: 'Build your dogs confidence with steps, ramps, obstacles and more! Run through, jump over and play upon a wonderful set-up built for fun!',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility.jpg',
           'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility2.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility3.jpg',
           'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/agility4.jpg'
           ]
      },
      {
        heading: 'Toys and Balls',
        desc: 'It\'s like doggy heaven here with all the balls and toys a pup can handle. Ball pits, chew toys and friends to play with - there\'s never a dull day at GDDC.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118678/gddc/areas/balls2.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls4.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118677/gddc/areas/balls.jpg',
          ]
      },
      {
        heading: 'Grass and Sand',
        desc: 'Dogs love to get some sunshine and play in our large sand pit and grass areas.',
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616128729/gddc/areas/grass5.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/grass4.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118681/gddc/areas/sand2.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/sand.jpg'
          ]
      },
      {
        heading: 'Room to Relax',
        desc: "Dedicated quiet areas for lunchtime naps, as well as comfy lounges, beds and other cozy corners to curl up in.",
        img: [
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1/gddc/areas/chill3.jpg', 
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill2.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill.jpg',
          'https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_fit,w_300/v1616118680/gddc/areas/chill4.jpg',
          ]
      }
    ]
  }
}
}
</script>

<style>

</style>