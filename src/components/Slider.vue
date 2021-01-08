<template>
  <div class="bg-gray-900">
    <div class="container mx-auto" style="overflow: hidden; max-width: 100vw">
      <div class="container mx-auto p-0 relative">
        <swiper ref="mySwiperRef" class="swiper" :options="swiperOption" :class="{ 'opacity-0' : !this.pageLoaded }">
          <swiper-slide class="w-auto" v-for="(slide, i) in this.slideList" :key="i">
            <img :src="slide" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div tabindex="0" @keypress.enter="prev()" role="button" aria-label="previous slide" class="swiper-button-prev text-yellow-400" slot="button-prev" @click="prev()"></div>
          <div tabindex="0" @keypress.enter="next()" role="button" aria-label="next slide" class="swiper-button-next text-yellow-400" slot="button-next" @click="next()"></div>
        </swiper>
        <div v-if="!pageLoaded" class="absolute top-0 left-0 grid w-full h-full">
          <i class="text-white fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Swiper as SwiperClass,
    Autoplay
  } from 'swiper/swiper.esm'
  import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
  SwiperClass.use([Autoplay])
  const {
    Swiper,
    SwiperSlide
  } = getAwesomeSwiper(SwiperClass)
  import 'swiper/swiper-bundle.css'
  export default {
    name: "Slider",
    title: "Slider",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        pageLoaded: false,
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesPerGroup: 1,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
          },
          speed: 2000,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
        },
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
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos613.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/618.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_250/f_auto,q_auto/v1/gddc/photos/619.jpg",
        ]
      };
    },
    methods: {
      next() {
        this.$refs.mySwiperRef.$swiper.slideNext();
      },
      prev() {
        this.$refs.mySwiperRef.$swiper.slidePrev();
      },
    },
    computed: {
      slideList: function () {
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
        return result;
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          this.$refs.mySwiperRef.$swiper.slideTo(4, 0, false);
          this.$refs.mySwiperRef.$swiper.autoplay.start();
          this.pageLoaded = true;
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  .swiper {
    min-height: 250px;
    transition: opacity 1s ease-in-out
  }

  .swiper-container {
    min-height: 250px;
    padding: 10px 0
  }
</style>