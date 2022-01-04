<template>
  <div class="flex flex-col py-5">
    <a class="inline-block mx-auto" title="review us on Google" :href="this.$store.state[getRegion()].contact.reviewLink">
        <img class="mx-auto rounded-xl border w-36 h-36" src="../assets/img/reviewUs.svg" alt="">
    </a>
    <div class="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pb-2">
      <div class="w-full" v-for="(review, i) in reviews" :key="i">
        <review :reviewData="review"></review>
      </div>
    </div>
  </div>
</template>
<script>
  import Review from '@/components/Review.vue'

  export default {
    components: {
      Review
    },
    data() {
      return {
        reviews: [{
            name: 'Hannah R',
            review: 'Wonderful place! Our lab and golden retriever have been coming weekly and always have the best time. The staff are lovely and it\'s a fun environment. Couldn\'t recommend more',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Catherine L',
            review: 'Lexi loves her day here, awesome staff and always adding new additions for the dogs to play',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Jennie S',
            review: 'I took advantage of the new business promotion on the 3 free days to see whether the doggy daycare would be a fit for my 2 small dogs. \nThey had to much fun on the days they were there and we will definitely be booking in again. \nThe ladies there were very professional and were very quick to answer any questions that i had.',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Ellen R',
            review: 'y dog Hamish has been coming to daycare since it opened and he\'s always had such a great time. With lots of grassy space, play areas and fur friends, he never wants to leave when it\'s time to go home! The staff are really lovely and easy to deal with and I always appreciate the updates they post on Instagram throughout the day.',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Elizabeth B',
            review: 'Great daycare! It\'s always daunting leaving your fur baby somewhere, but having the 3 days free really helps you get comfortable and make sure it\'s the right fit!! It definitely is, our little man loves coming here and he starts getting so excited when we open the door. Best thing is you get updates throughout the day too 😊',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Vanessa M',
            review: "We take our boy Dudley to Gabba Doggie Day Care about once a week and have done so for around 9 months now. He absolutely loves it! He knows when he is going and cries and carries on all the way in the car until he gets there. Then, it's straight up to the gate and he cannot wait to get inside and play. The staff are always friendly and nice to deal with and seem to genuinely love dogs. We particularly like that they have a huge outdoor grassed area now so that the dogs don't spend all day indoors. He comes home utterly exhausted and is asleep in the car before we get out of the driveway some afternoons.",
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Josephine P',
            review: 'Love, love, love!! I am over the moon with the love and play our beautiful fur babies receive from the GDDC Owner, the Manager and the beautiful girls who take such great care with our precious cargo. I still can\'t believe I found wonderful GDDC, a great day\'s play with always something new to see here at 46 Deshon Street Woolloongabba. 💓💓 When my Pippa joined GDDC, I took advantage of an offer of a free trial and we haven\'t looked back since. If you would like to make sure your fur baby is in capable and kind hands, take advantage of the current free trial offer. GDDC also have a Pet Taxi Service, one could not ask for anything more. 🌹🐶',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Keith P',
            review: 'The team here are lovely and our dog enjoys the visits',
            stars: 4,
            icon: 'fa-google'
          },
          {
            name: 'Meika R',
            review: 'My doggy had a great time. I loved the photos they sent and could tell he was entertained all day. The staff were lovely and I could tell Billy was comfortable with them 💙',
            icon: 'fa-facebook-f'
          },
          
          {
            name: 'Leezett W',
            review: 'Reynold started 2 weeks ago. I love the pictures we get. Great value for money!! The staff are so lovely and caring to Reynold. He has such fun and we know he is well looked after and love with cuddles.',
            icon: 'fa-facebook-f'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
</style>

