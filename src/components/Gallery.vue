<template>
  <div class="bg-gray-900 text-center">
    <div class="container grid grid-cols-5 mx-auto">


<div v-for="(image, i) in slideList" :key="i">
<GalleryImg :img="image" class="h-64 w-full bg-cover" />
</div>
    </div>
    <button @click="refresh++" class="btn-blue my-2">show me more dogs <i class="fas fa-heart wiggle"></i></button>
  </div>
</template>

<script>
  import GalleryImg from '@/components/GalleryImg.vue'
  export default {
    name: "Gallery",
    title: "Gallery",
    components: {
      GalleryImg
    },
    computed: {
      slideList: function () {
        let loopy = this.refresh
        let arr = this.slides
        let n = 10
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        console.log(loopy)
        return result;
      }
    },
    data() {
      return {
        refresh: 0,
        slides: [
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/01.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/02.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/03.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/04.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/08.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/11.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/15.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/16.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/17.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/18.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/20.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/206.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/21.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/23.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/24.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/303b.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/306.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/309.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/311.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/314.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/316.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/401.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/402.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/403.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/404.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/405.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/501.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/502.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/503.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/603.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/605.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/610.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/612.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/613.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/618.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/619.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/701.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/702.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/705.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/706.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/710.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/712.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/713.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/715.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/716.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/718.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/719.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/801.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/805.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/809.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/810.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/811.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/813.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/816.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/818.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/821.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/822.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/824.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/827.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/829.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/830.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/831.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/832.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/833.jpg",
        ]
      };
    },
  };
</script>

<style lang="scss" scoped>
  .fadeIn {
    animation: imageFade 3s;
  }

  @keyframes imageFade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>