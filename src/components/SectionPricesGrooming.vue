<template>
    <div class="container px-2 py-20 mx-auto section max-w-screen-lg">
        <title-block class="text-center">
            <template #small>Grooming</template>
            <template #big>Prices</template>
        </title-block>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
            <div class="">
                <div
                    class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm"
                >
                    <p class="font-bold mb-4">
                        Professional Grooming (Available Mondays only)
                    </p>
                    <div
                        v-for="service in prices.professional"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="px-2 relative">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm"
                >
                    <p class="font-bold mb-4">Bath, blow dry and nails</p>
                    <div
                        v-for="service in prices.basic"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="px-2 relative">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm"
                >
                    <p class="font-bold mb-4">
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
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
                            :class="{ 'ring-2': service.highlight }"
                        >
                            <div class="flex-grow px-2">
                                {{ service.name }} <br />
                                <span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="px-2 relative">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 max-w-screen-sm mx-auto pt-5 gap-x-5 text-sm"
                >
                    <p class="font-bold mb-4">Extras</p>
                    <div
                        v-for="service in prices.extras"
                        :key="service.name"
                        class="mb-2 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
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
                            <div class="px-2 relative">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-cover bg-center bg-groom rounded-lg shadow-xl md:order-1 aspect-w-3 aspect-h-4"
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
                        price: '$85'
                    },
                    {
                        name: 'Medium (11 - 20kg)',
                        price: '$95'
                    },
                    {
                        name: 'Large (21 - 30kg)',
                        price: '$105'
                    },
                    {
                        name: 'Extra Large (31kg +)',
                        price: '$145'
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
                        price: '$65'
                    },
                    {
                        name: 'Medium (11 - 20kg)',
                        price: '$75'
                    },
                    {
                        name: 'Large (21 - 30kg)',
                        price: '$85'
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
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_550/f_auto,q_auto/v1/gddc/photos/12_21/31.jpg');
}
</style>
