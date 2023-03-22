<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 bg-gray-200">
            <!-- <div class="grid p-10 lg:py-40 sm:px-40 2xl:px-60 order-2 lg:order-1 col-span-1"> -->
            <div class="grid order-2 lg:order-1 col-span-1">
                <div
                    class="place-self-center w-64 xl:w-80 m-5 lg:m-20 xl:my-32 2xl:my-30"
                >
                    <!-- <div v-if=" getRegion() == 'adelaide'" class="border-b-2 border-blue-500 mb-3"><p class="text-center text-blue-500 text-lg font-bold uppercase">Coming Soon</p></div> -->

                    <div class="aspect-w-2 aspect-h-1">
                        <img
                            class="mb-2 w-64 xl:w-80 "
                            :src="
                                'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_600/q_auto,f_auto/v2/gddc/' +
                                    this.$store.state[getRegion()].trialDays +
                                    'daytrial.png'
                            "
                            alt=""
                        />
                    </div>

                    <router-link
                        :to="{ name: 'Sign-up' }"
                        class="btn-blue text-xl w-full inline-block text-center"
                        >Sign up!</router-link
                    >
                </div>
                <div
                    class="bg-yellow-300 p-2 lg:-mx-6 lg:px-6 cursor-pointer"
                    @click="show = !show"
                >
                    <p class="text-yellow-900 text-center">
                        <span class="text-base"
                            ><i class="fal fa-smile-plus"></i
                        ></span>
                        refer a friend for more free days*
                    </p>
                    <transition name="open">
                        <div class="more-info" v-if="show">
                            <p class="text-center text-yellow-900 text-xs px-2">
                                Let us know when you refer a friend and we'll
                                give you another free day after their first paid
                                visit.
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
            <div
                class="order-1 lg:order-2 col hero-pup bg-cover bg-top col-span-1"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
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
