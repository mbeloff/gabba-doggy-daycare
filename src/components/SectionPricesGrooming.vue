<template>
    <div class="container max-w-screen-lg px-2 py-20 mx-auto section">
        <title-block class="text-center">
            <template #small>Grooming</template>
            <template #big>Prices</template>
        </title-block>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
            <div class="">
                <div
                    class="grid max-w-screen-sm grid-cols-1 pt-5 mx-auto text-sm gap-x-5"
                >
                    <p class="mb-4 font-bold">
                        Professional Grooming (Available Mondays only)
                    </p>
                    <div
                        v-for="service in prices.professional"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="relative px-2">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid max-w-screen-sm grid-cols-1 pt-5 mx-auto text-sm gap-x-5"
                >
                    <p class="mb-4 font-bold">Bath, blow dry and nails</p>
                    <div
                        v-for="service in prices.basic"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="relative px-2">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid max-w-screen-sm grid-cols-1 pt-5 mx-auto text-sm gap-x-5"
                >
                    <p class="mb-4 font-bold">
                        Hygiene tidy (face, feet/paw pads and sanitary) and
                        double coated brush outs
                    </p>
                    <div
                        v-for="service in prices.hygiene"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="relative px-2">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid max-w-screen-sm grid-cols-1 pt-5 mx-auto text-sm gap-x-5"
                >
                    <p class="mb-4 font-bold">Extras</p>
                    <div
                        v-for="service in prices.extras"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <!-- <div v-if="service.highlight">
                <div class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"></div>
                <div class="absolute -left- 1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div> -->
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="relative px-2">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-center bg-cover rounded-lg shadow-xl bg-groom md:order-1 aspect-w-3 aspect-h-4"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            prices: {
                professional: [
                    {
                        name: 'Small (up to 10kg)',
                        price: '$95'
                    },
                    {
                        name: 'Medium (11 - 20kg)',
                        price: '$105'
                    },
                    {
                        name: 'Large (21 - 30kg)',
                        price: '$115'
                    },
                    {
                        name: 'Extra Large (31kg +)',
                        price: '$155'
                    }
                ],
                basic: [
                    {
                        name: 'Small (up to 10kg)',
                        price: '$30'
                    },
                    {
                        name: 'Medium (11 - 20kg)',
                        price: '$40'
                    },
                    {
                        name: 'Large (21 - 30kg)',
                        price: '$50'
                    }
                ],
                hygiene: [
                    {
                        name: 'Small (up to 10kg)',
                        price: '$75'
                    },
                    {
                        name: 'Medium (11 - 20kg)',
                        price: '$85'
                    },
                    {
                        name: 'Large (21 - 30kg)',
                        price: '$95'
                    }
                ],
                extras: [
                    {
                        name: 'Bath and Towel Dry',
                        price: '$10'
                    },
                    {
                        name: 'Nail Clip',
                        price: '$10'
                    },
                    {
                        name: 'Nail filing',
                        price: '$15'
                    },
                    {
                        name: 'Anal glands',
                        price: '$15'
                    },
                    {
                        name: 'Ear plucking',
                        price: '$15'
                    }
                ]
            }
        }
    }
}
</script>

<style>
.bg-groom {
    background-position: 45% 50%;
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg');

    @media only screen and (max-width: 767px) {
        background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg');
    }
}
</style>
