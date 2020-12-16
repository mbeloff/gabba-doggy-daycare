<template>
  <div class="bg-blue-900">
    <div class="container mx-auto" style="overflow: hidden; max-width: 100vw">
      <div class=" mx-auto p-0 relative">
        <swiper ref="mySwiperRef" class="swiper" :options="swiperOption" :class="{ 'opacity-0' : !this.pageLoaded }">
          <swiper-slide class="w-auto" v-for="(slide, i) in slides" :key="i">
            <img :src="slide" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div tabindex="0" @keypress.enter="prev()" role="button" aria-label="previous slide" class="swiper-button-prev" slot="button-prev" @click="prev()"></div>
          <div tabindex="0" @keypress.enter="next()" role="button" aria-label="next slide" class="swiper-button-next" slot="button-next" @click="next()"></div>
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
        slides: ["https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/01.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/02.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/03.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/04.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/206.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/08.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/10.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/11.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/15.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/16.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/17.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/18.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/19.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/20.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/21.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/22.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/205.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/23.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/24.jpg",
          "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_320/v1/gddc/photos/25.jpg"
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
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {         
          this.$refs.mySwiperRef.$swiper.slideTo(5, 0, false);
          this.$refs.mySwiperRef.$swiper.autoplay.start();
          this.pageLoaded = true;
        }
      }

    },
  };
</script>

<style lang="scss" scoped>
  .swiper {
    min-height: 280px;
    transition: opacity 1s ease-in-out
  }

  .swiper-container {
    min-height: 280px;
    padding: 10px 0
  }
</style>