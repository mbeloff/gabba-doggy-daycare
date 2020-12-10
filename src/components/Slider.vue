<template>
  <div class="bg-gray-200 py-4 mt-5">
    <div class="container lg:px-40 mx-auto" style="overflow: hidden; max-width: 100vw">
      <div class=" mx-auto p-0">
        <swiper ref="mySwiperRef" class="swiper" :options="swiperOption">
          <swiper-slide
            class="w-auto"
            v-for="slide in slides"
            :key="slide"
          >
          <img class="rounded shadow-lg" :src="slide.url" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div
            tabindex="0"
            @keypress.enter="prev()"
            role="button"
            class="swiper-button-prev"
            slot="button-prev"
            @click="prev()"
          ></div>
          <div
            tabindex="0"
            @keypress.enter="next()"
            role="button"
            class="swiper-button-next"
            slot="button-next"
            @click="next()"
          ></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/swiper-bundle.css";

export default {
  name: "Slider",
  title: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: true,
        autoplay: true,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 40
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 30
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slides: [
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/01.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/02.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/03.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/04.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/08.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/10.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/11.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/15.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/16.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/17.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/18.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/19.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/20.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/21.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/22.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/23.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/24.jpg"
        },
        {
          url: "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_280/v1/gddc/photos/25.jpg"
        }
      ]
    };
  },
  methods: {
    next() {
      this.$refs.mySwiperRef.$swiper.slideNext();
    },
    prev() {
      this.$refs.mySwiperRef.$swiper.slidePrev();
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  min-height: 280px;
  // width: 100%;
}

 .swiper-slide {
    // width: 100%;
    height: 230px;
  }
</style>
