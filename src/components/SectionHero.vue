<template>
  <div>
    <div class="grid grid-cols-1 bg-gray-200 lg:grid-cols-2 lg:grid-rows-1">
      <!-- <div class="grid order-2 col-span-1 p-10 lg:py-40 sm:px-40 2xl:px-60 lg:order-1"> -->
      <div class="grid order-2 col-span-1 lg:order-1">
        <div
          class="w-64 m-5 place-self-center xl:w-96 lg:m-32 xl:my-32 2xl:my-32"
        >
          <!-- <div v-if=" getRegion() == 'adelaide'" class="mb-3 border-b-2 border-blue-500"><p class="text-lg font-bold text-center text-blue-500 uppercase">Coming Soon</p></div> -->

          <div class="aspect-w-2 aspect-h-1">
            <img
              class="w-64 mb-2 xl:w-96"
              src="https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_600/q_auto,f_auto/v2/gddc/trial-day.png"
              alt=""
            />
          </div>

          <router-link
            :to="{ name: 'Sign-up' }"
            class="inline-block w-full text-xl text-center btn-blue"
            >Sign up!</router-link
          >
        </div>
        <!-- <div
          class="p-2 bg-yellow-300 cursor-pointer lg:-mx-6 lg:px-6"
          @click="show = !show"
        >
          <p class="text-center text-yellow-900">
            <span class="text-base"><i class="fal fa-smile-plus"></i></span>
            refer a friend for more free days*
          </p>
          <transition name="open">
            <div class="more-info" v-if="show">
              <p class="px-2 text-xs text-center text-yellow-900">
                Let us know when you refer a friend and we'll give you another
                free day after their first paid visit.
              </p>
            </div>
          </transition>
        </div> -->
      </div>
      <div
        class="order-1 col-span-1 bg-top bg-cover lg:order-2 col hero-pup"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss">
.hero-pup {
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_scale,w_1000/v1631854051/gddc/promo/gddc_45.jpg');
  @media only screen and (max-width: 1023px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_scale,w_800/v1631854051/gddc/promo/gddc_45.jpg');
    height: 350px;
    max-height: 350px;
  }
  @media only screen and (max-width: 550px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/q_auto,f_auto/c_scale,w_600/v1631854051/gddc/promo/gddc_45.jpg');
    height: 250px;
    max-height: 250px;
  }
}

.more-info {
  height: 64px;
  display: grid;
  place-items: center;
}
.open-enter-active,
.open-leave-active {
  transition: height 0.5s, opacity 0.5s;
  height: 64px;
}
.open-enter,
.open-leave-to {
  opacity: 0;
  height: 0;
}
</style>
