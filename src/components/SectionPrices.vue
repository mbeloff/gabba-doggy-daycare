<template>
    <div class="px-2 py-20 mx-auto max-w-screen-lg" id="prices">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div class="md:order-2">
                <title-block class="text-center">
                    <template #small>Gabba Doggy Daycare</template>
                    <template #big>Price List <br /></template>
                </title-block>
                <p class="text-xs text-center">(as of 01/09/22)</p>
                <p class="font-bold text-center mt-5">Casual Day Care</p>
                <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
                    <div
                        v-for="(service, i) in prices[region].daycare"
                        :key="i"
                        class="mb-1 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
                            :class="{ 'ring-2 ': service.highlight }"
                        >
                            <div v-if="service.highlight">
                                <div
                                    class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"
                                ></div>
                                <div
                                    class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"
                                ></div>
                            </div>
                            <div class="flex-grow px-2">
                                {{ service.name
                                }}<span class="text-pink-500">{{
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
                <p class="font-bold text-center mt-5">Weekly Packages</p>
                <p class="text-sm pt-5">
                    We've made it more affordable to come to day care more
                    often. Weekly packs must be used within 7 days.
                </p>
                <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm">
                    <div
                        v-for="(service, i) in prices[region].weekly"
                        :key="i"
                        class="mb-1 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="flex bg-gray-100 rounded-lg relative ring-pink-200"
                            :class="{ 'ring-2 ': service.highlight }"
                        >
                            <div v-if="service.highlight">
                                <div
                                    class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full animate-ping-slow"
                                ></div>
                                <div
                                    class="absolute -left-1.5 top-2 w-2 h-2 bg-pink-500 rounded-full"
                                ></div>
                            </div>
                            <div class="flex-grow px-2 items-center flex">
                                <span>{{ service.name }}</span
                                ><span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="px-2 relative flex flex-col">
                                <span
                                    class="line-through font-normal text-gray-400"
                                    >{{ service.original }}</span
                                ><span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="extras-pricing" v-if="prices[region].extras">
                    <p class="font-bold text-center mt-5">Extras</p>
                    <div class="grid grid-cols-1 pt-5 gap-x-10 text-sm ">
                        <div
                            v-for="(extra, i) in prices[region].extras"
                            :key="i"
                            class="mb-2 bg-white"
                        >
                            <div
                                @click="showTaxi"
                                class="flex bg-gray-100 rounded-lg"
                                :class="{
                                    'taxi cursor-pointer':
                                        extra.selector == 'taxi'
                                }"
                            >
                                <div
                                    class="flex-grow px-2"
                                    :class="{
                                        'opacity-50':
                                            extra.soon == '- available soon'
                                    }"
                                >
                                    {{ extra.name }}
                                    <span class="text-pink-500">{{
                                        extra.soon
                                    }}</span>
                                </div>
                                <div class="px-2">
                                    <span class="text-pink-500">{{
                                        extra.price
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="rounded-lg shadow-xl md:order-1 bg-cover bg-center aspect-w-3 aspect-h-4 my-20"
                style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_scale,w_400/f_auto,q_auto/v1631854044/gddc/photos/03_22/4.jpg)"
            ></div>
        </div>
        <div class="mt-10 px-5 text-sm gap-2 flex flex-col">
            <p class="font-bold">Package Terms and Conditions:</p>
            <p>
                All packages are available to purchase online or in-store but
                must be purchased on or before the day of your appointment. If
                no package has been purchased by this time, the full casual rate
                will apply. To purchase online, simply
                <open-login class="link-pink">log in</open-login> to your
                account and select <em>Purchase a Package</em>.
            </p>
            <p>
                Weekly packs are valid for 7 days from the date of purchase. Unused days may not be
                refunded after this period - please contact us if you're unable to use your weekly
                package and we may extend it for you.
            </p>
            <p>
                If you plan on bringing your dog to daycare regularly, ask us about setting
                up automatic recurring payments so you don't have to worry about
                purchasing packages each week. If you would like to cancel,
                pause, or adjust automatic payments at any time, we're happy to
                accommodate <i class="fal fa-smile"></i>
            </p>
            <p>
                Please note that customers on recurring billing,
                or pre-purchased packages will be given priority placement over
                casual bookings.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        region() {
            return this.$store.state.region
        },
        contact() {
            return this.$store.state[this.region].contact
        }
    },
    methods: {
        showTaxi(e) {
            if (e.target.matches('.taxi, .taxi *')) {
                this.$modal.show('taxi-modal')
            }
        }
    },
    data() {
        return {
            prices: {
                brisbane: {
                    daycare: [
                        {
                            name: 'Half Day',
                            soon: ' - up to 5 hours',
                            price: '$45'
                        },
                        {
                            name: 'Full Day',
                            soon: ' - over 5 hours',
                            price: '$60'
                        },
                        {
                            name: 'Half Day 10-pack',
                            price: '$380'
                        },
                        {
                            name: 'Full Day 10-pack',
                            price: '$500'
                        },
                        {
                            name: 'Full Day 20-pack',
                            price: '$850'
                        },
                        {
                            name: 'Full Day 30-pack',
                            price: '$1200'
                        }
                    ],
                    weekly: [
                        {
                            name: 'Two Days a Week',
                            price: '$100 ($50/day)'
                        },
                        {
                            name: 'Three Days a Week',
                            price: '$140 (~$46/day)'
                        },
                        {
                            name: 'Five Days a Week',
                            price: '$200 ($40/day)',
                            highlight: true
                        },
                    ],
                    extras: {
                        Lunch: {
                            name: 'Lunch (Owner Provided)',
                            price: '$5',
                            order: '2'
                        },
                        PetTaxi: {
                            selector: 'taxi',
                            name: 'Pet Taxi (Local Pickup or Dropoff)',
                            soon: '- more info',
                            price: '$10-15',
                            order: '3'
                        }
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss"></style>
