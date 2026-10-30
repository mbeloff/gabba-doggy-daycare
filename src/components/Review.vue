<template>
  <div class="flex flex-col justify-between">
    <div class="m-2 px-4 py-3 bg-white rounded-lg shadow-lg border-gray-100 border" @click="expanded = !expanded">
      <div class="flex justify-between">
        <p class="font-bold text-sm text-blue-900">{{reviewData.name}}</p><span><app-icon :name="reviewData.icon" class="text-blue-500" /></span>  
      </div>

      <p ref="reviewBox" class="text-sm relative review-text" :class="{'truncate': !expanded}">{{reviewData.review}}  </p>
      <p v-if="reviewData.stars" class="text-xs text-right text-yellow-400 mt-2">
      <app-icon name="star-fill" v-for="star in Math.floor(reviewData.stars)" :key="star" />
      <app-icon name="star-half-fill" v-if="reviewData.stars % 1" />
      </p>
        <p v-if="reviewData.icon == 'facebook-logo-fill'" class="text-xs text-right text-blue-400 mt-2">
        recommended
      </p>
    </div>    
  </div>
</template>

<script>
  export default {
    props: {
      reviewData: Object
    },
    data() {
      return {
        expanded: false,
      }
    },
  }
</script>

<style lang="scss">
.review-text.truncate {
    position: relative;
    &:after {
      width: 100%;
      height: 1rem;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to top, rgba(255, 255, 255, 0.753), transparent);
    }
  }
</style>