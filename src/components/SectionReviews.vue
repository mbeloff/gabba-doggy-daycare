<template>
  <div class="flex flex-col py-5">
    <a class="inline-block mx-auto " :href="this.$store.state[getRegion()].contact.reviewLink">
      <img class="w-40 mx-auto rounded-xl border" src="../assets/img/reviewUs.svg" alt="">
    </a>
    <div class="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
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
    }

    ,
    data() {
      return {
        reviews: [{
            name: 'Hannah Roberts',
            review: 'Wonderful place! Our lab and golden retriever have been coming weekly and always have the best time. The staff are lovely and it\'s a fun environment. Couldn\'t recommend more',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Catherine Lever',
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
            name: 'Kaitlyn Fogarty',
            review: '',
            stars: 5,
            icon: 'fa-google'
          },
          {
            name: 'Josephine Potts',
            review: 'My Pippa had her first and great day at Gabba Doggy Daycare on Friday 26 February 2021. The girls looked after her and being PIPPA’s first day, they kept me up to date with how she was enjoying herself. Pippa came home exhausted and will be ready to enjoy her next visit. Thank you to everyone and the Pet Taxi was so helpful in carrying Pippa to and from. 💜🐶💜',
            icon: 'fa-facebook-f'
          },
          {
            name: 'Meika Ruby',
            review: 'My doggy had a great time. I loved the photos they sent and could tell he was entertained all day. The staff were lovely and I could tell Billy was comfortable with them 💙',
            icon: 'fa-facebook-f'
          }
        ]
      }
    }
  }
</script>
<style lang="scss"></style>