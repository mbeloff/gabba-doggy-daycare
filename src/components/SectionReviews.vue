<template>
  <div class="flex flex-col py-5">
    <a class="inline-block mx-auto rounded-xl border " :href="this.$store.state[getRegion()].contact.reviewLink">
      <img class="w-40 mx-auto rounded-xl" src="../assets/img/reviewUs.svg" alt="">
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
            stars: 5
          }

          ,
          {
            name: 'Catherine Lever',
            review: 'Lexi loves her day here, awesome staff and always adding new additions for the dogs to play',
            stars: 5,
          }

          ,
          {
            name: 'Jennie S',
            review: 'I took advantage of the new business promotion on the 3 free days to see whether the doggy daycare would be a fit for my 2 small dogs. \nThey had to much fun on the days they were there and we will definitely be booking in again. \nThe ladies there were very professional and were very quick to answer any questions that i had.',
            stars: 5,
          }

          ,
          {
            name: 'Kaitlyn Fogarty',
            review: '',
            stars: 5,
          }

          ,
        ]
      }
    }
  }
</script>
<style lang="scss"></style>