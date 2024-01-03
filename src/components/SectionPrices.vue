<template>
    <div class="max-w-screen-lg px-2 py-20 mx-auto" id="prices">
        <div class="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div class="md:order-2">
                <title-block class="text-center">
                    <template #small>Gabba Doggy Daycare</template>
                    <template #big>Price List <br /></template>
                </title-block>
                <p class="text-xs text-center">(as of 01/09/22)</p>
                <p class="mt-5 font-bold text-center">Casual Day Care</p>
                <div class="grid grid-cols-1 pt-5 text-sm gap-x-10">
                    <div
                        v-for="(service, i) in prices[region].daycare"
                        :key="i"
                        class="mb-1 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
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
                                {{ service.name }}
                                <span
                                    v-if="service.soon"
                                    class="text-pink-500"
                                    >{{ service.soon }}</span
                                >
                                <span
                                    v-if="service.highlight"
                                    class="text-pink-500"
                                    >most popular</span
                                >
                            </div>
                            <div class="relative px-2">
                                <span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <p class="mt-5 font-bold text-center">Weekly Packages</p>
                <p class="pt-5 text-sm">
                    We've made it more affordable to come to day care more
                    often. Weekly packs must be used within 7 days.
                </p>
                <div class="grid grid-cols-1 pt-5 text-sm gap-x-10">
                    <div
                        v-for="(service, i) in prices[region].weekly"
                        :key="i"
                        class="mb-1 bg-white"
                        :class="{ 'font-bold': service.highlight }"
                    >
                        <div
                            class="relative flex bg-gray-100 rounded-lg ring-pink-200"
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
                            <div class="flex items-center flex-grow px-2">
                                <span>{{ service.name }}</span
                                ><span class="text-pink-500">{{
                                    service.soon
                                }}</span>
                            </div>
                            <div class="relative flex flex-col px-2">
                                <span
                                    class="font-normal text-gray-400 line-through"
                                    >{{ service.original }}</span
                                ><span class="text-pink-500">{{
                                    service.price
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div id="extras-pricing" v-if="prices[region].extras">
                    <p class="mt-5 font-bold text-center">Extras</p>
                    <div class="grid grid-cols-1 pt-5 text-sm gap-x-10">
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
                                        extra.selector == 'taxi',
                                }"
                            >
                                <div
                                    class="flex-grow px-2"
                                    :class="{
                                        'opacity-50':
                                            extra.soon == '- available soon',
                                    }"
                                >
                                    {{ extra.name }}
                                    <span
                                        v-if="extra.soon"
                                        class="text-pink-500"
                                        >{{ extra.soon }}</span
                                    >
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
                class="my-20 bg-center bg-cover rounded-lg shadow-xl md:order-1 aspect-w-3 aspect-h-4"
                style="
                    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_scale,w_400/f_auto,q_auto/v1631854044/gddc/photos/update/0003.jpg');
                "
            ></div>
        </div>
        <div class="flex flex-col gap-2 px-5 mt-10 text-sm">
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
                Weekly packs are valid for 7 days from the date of purchase.
                Unused days may not be refunded after this period - please
                contact us if you're unable to use your weekly package and we
                may extend it for you.
            </p>
            <p>
                If you plan on bringing your dog to daycare regularly, ask us
                about setting up automatic recurring payments so you don't have
                to worry about purchasing packages each week. If you would like
                to cancel, pause, or adjust automatic payments at any time,
                we're happy to accommodate <i class="fal fa-smile"></i>
            </p>
            <p>
                Please note that customers on recurring billing, or
                pre-purchased packages will be given priority placement over
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
        },
    },
    methods: {
        showTaxi(e) {
            if (e.target.matches('.taxi, .taxi *')) {
                this.$modal.show('taxi-modal')
            }
        },
    },
    data() {
        return {
            prices: {
                brisbane: {
                    daycare: [
                        {
                            name: 'Half Day',
                            soon: ' - up to 5 hours',
                            price: '$48',
                        },
                        {
                            name: 'Full Day',
                            soon: ' - over 5 hours',
                            price: '$65',
                        },
                        {
                            name: 'Full Day 2-Pack',
                            price: '$110 ($55/day)',
                        },
                        {
                            name: 'Full Day 5-pack',
                            price: '$260 ($52/day)',
                            highlight: true,
                        },
                        {
                            name: 'Half Day 10-pack',
                            price: '$400 ($40/day))',
                        },
                        {
                            name: 'Full Day 10-pack',
                            price: '$480 ($48/day)',
                        },
                        {
                            name: 'Full Day 20-pack',
                            price: '$840 ($42/day)',
                        },
                        {
                            name: 'Full Day 30-pack',
                            price: '$1200 ($40/day)',
                        },
                    ],
                    weekly: [],
                    extras: {
                        Lunch: {
                            name: 'Lunch (Owner Provided)',
                            price: '$5',
                            order: '2',
                        },
                        PetTaxi: {
                            selector: 'taxi',
                            name: 'Pet Taxi (Local Pickup or Dropoff)',
                            soon: '- more info',
                            price: '$10-15',
                            order: '3',
                        },
                    },
                },
            },
        }
    },
}
</script>

<style lang="scss"></style>
