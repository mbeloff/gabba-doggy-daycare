<template>
    <div>
        <div class="tile" id="about">
            <div class="grid max-w-screen-xl gap-20 px-2 mx-auto">
                <div class="py-10">
                    <h1 class="mb-5 text-4xl font-bold">
                        GDDC Grooming Services
                    </h1>

                    <div class="flex flex-col gap-3">
                        <p>
                            Brisbane's best dog daycare also offers dog grooming
                            service to make sure your furry pals look and feel
                            amazing after their big day! Our grooming services
                            are all about keeping your dog happy and healthy,
                            with a touch of style.
                        </p>
                        <p>
                            We offer standard grooming services throughout the
                            week, including bathing, brushing, nail trimming,
                            ear cleaning, and coat conditioning. Our experienced
                            groomers use top-notch products and techniques to
                            keep your pup's coat shiny and mat-free. Regular
                            grooming not only makes your dog look fabulous but
                            also keeps their skin in tip-top shape.
                        </p>

                        <p>
                            GDDC also welcomes Floofy & Co., professional
                            groomers who are experts in breed-specific cuts and
                            styles and offer premium grooming services. Whether
                            it's a poodle's perfect trim or a schnauzer's
                            signature look, our pros can give your dog a
                            makeover that'll turn heads.
                        </p>
                        <p>
                            While your pup is enjoying their day of fun at
                            daycare, why not have them pampered and returning
                            home looking as good as ever.
                        </p>
                        <p>
                            Book a grooming session with your pup's next visit
                            to Gabba Doggy Daycare. We can't wait to make your
                            four-legged friend look and feel their absolute
                            best!
                        </p>
                    </div>
                    <div class="text-center">
                        <router-link
                            class="inline-block mt-10 btn-blue"
                            to="/contact"
                            >Book Now</router-link
                        >
                    </div>

                    <div
                        class="grid max-w-screen-md grid-cols-2 gap-2 p-2 mx-auto mt-10 text-center bg-white rounded-lg"
                    >
                        <div>
                            <img
                                src="https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_600,h_700/v1/gddc/groom/gddc-before.jpg"
                                alt=""
                                class="object-cover object-center rounded"
                            />
                            <p>Before</p>
                        </div>

                        <div>
                            <img
                                src="https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_600,h_700/v1/gddc/groom/gddc-after.jpg"
                                alt=""
                                class="object-cover object-center rounded"
                            />
                            <p>After</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid max-w-screen-lg px-2 py-10 mx-auto text-sm leading-4">
            <h1 class="mb-10 text-5xl font-bold">Grooming Menu</h1>
            <div class="flex flex-col gap-10 sm:flex-row">
                <div id="sizes" class="order-last sm:order-first">
                    <div
                        class="grid grid-cols-4 my-4 sm:my-0 sm:w-28 sm:grid-cols-1"
                    >
                        <div
                            v-for="size in sizes"
                            :key="size"
                            class="flex flex-col text-center aspect-square"
                        >
                            <img :src="size.img" alt="" />
                            <div class="leading-4">
                                <p>{{ size.size }}</p>
                                <p>{{ size.weight }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu" class="grid pl-2 border-gray-500 sm:border-l">
                    <h2
                        class="mb-10 text-2xl font-bold text-gray-900 sm:text-4xl"
                    >
                        Standard Grooming - Daily
                    </h2>
                    <ul class="grid gap-x-20 sm:grid-cols-2">
                        <div class="flex flex-col">
                            <li
                                v-for="std in standard.slice(0, 3)"
                                :key="std"
                                class="max-w-sm"
                            >
                                <p class="text-xl font-bold text-gray-800">
                                    {{ std.title }}
                                </p>
                                <div class="flex mt-1 mb-2 divide-x-2">
                                    <span
                                        class="px-1"
                                        v-for="price in std.prices"
                                        :key="price"
                                        >{{
                                            `${price.size} ${price.price}`
                                        }}</span
                                    >
                                </div>
                                <p class="mb-5 text-justify">{{ std.text }}</p>
                            </li>
                        </div>
                        <div class="flex flex-col">
                            <li
                                v-for="std in standard.slice(3)"
                                :key="std"
                                class="max-w-sm"
                            >
                                <p class="text-xl font-bold text-gray-800">
                                    {{ std.title }}
                                </p>
                                <div class="flex mt-1 mb-2 divide-x-2">
                                    <span
                                        class="px-1"
                                        v-for="price in std.prices"
                                        :key="price"
                                        >{{
                                            `${price.size} ${price.price}`
                                        }}</span
                                    >
                                </div>
                                <p class="mb-5 text-justify">{{ std.text }}</p>
                            </li>
                            <li class="font-bold text-gray-800 text-md">
                                Ear Clean - $10
                            </li>
                            <li class="font-bold text-gray-800 text-md">
                                Nail Clip - $10
                            </li>
                            <li class="font-bold text-gray-800 text-md">
                                Nail Clip & File - $15
                            </li>
                            <li class="font-bold text-gray-800 text-md">
                                Difficulty Charge - $5 -$10
                            </li>
                        </div>
                    </ul>
                    <p class="mt-2 italic">
                        * Please note that larger or fluffier dogs may incur a
                        difficulty surcharge.
                    </p>
                    <h2
                        class="mt-10 mb-10 text-2xl font-bold text-gray-900 sm:text-4xl"
                    >
                        Professional Grooming
                    </h2>
                    <FloofyGrooming></FloofyGrooming>
                    <div class="my-10 text-center">
                        <a
                            class="inline-block mt-10 btn-blue"
                            href="https://www.floofyncogrooming.com.au/"
                            >Book with Floofy & Co</a
                        >
                    </div>
                    <!-- <div class="grid gap-x-20">
                        <ul class="grid sm:grid-cols-2 gap-x-20">
                            <li
                                v-for="pro in professional"
                                :key="pro"
                                class="max-w-sm"
                            >
                                <p class="text-xl font-bold text-gray-800">
                                    {{ pro.title }}
                                </p>
                                <div class="flex mt-1 mb-2 divide-x-2">
                                    <span
                                        class="px-1"
                                        v-for="price in pro.prices"
                                        :key="price"
                                        >{{
                                            `${price.size} ${price.price}`
                                        }}</span
                                    >
                                </div>
                                <p class="mb-5">{{ pro.text }}</p>
                                <ul class="mb-10 leading-4">
                                    <p class="font-bold">Inclusions:</p>
                                    <li
                                        v-for="inclusion in pro.inclusions"
                                        :key="inclusion"
                                    >
                                        {{ inclusion }}
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p
                                    class="col-start-1 text-xl font-bold text-gray-800"
                                >
                                    Extras
                                </p>
                            </li>
                        </ul>
                    </div> -->
                    <!-- <h2
                        class="mt-10 mb-10 text-2xl font-bold text-gray-900 sm:text-4xl"
                    >
                        Grooming & Training
                    </h2>
                    <div class="grid gap-x-20">
                        <ul class="grid sm:grid-cols-2 gap-x-20">
                            <li
                                v-for="item in training"
                                :key="item"
                                class="max-w-sm"
                            >
                                <p class="text-xl font-bold text-gray-800">
                                    {{ item.title }}
                                </p>

                                <p class="px-1 mt-1 mb-2">
                                    {{ item.price }}
                                </p>

                                <p v-html="item.text"></p>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import FloofyGrooming from '@/components/FloofyGrooming.vue'
const sizes = [
    {
        img: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/v1/gddc/groom/Dog_silhouette-01.png',
        size: 'Small',
        weight: 'up to 10kg',
    },
    {
        img: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/v1/gddc/groom/Dog_silhouette-02.png',
        size: 'Medium',
        weight: '11kg - 20kg',
    },
    {
        img: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/v1/gddc/groom/Dog_silhouette-03.png',
        size: 'Large',
        weight: '21kg - 30kg',
    },
    {
        img: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/v1/gddc/groom/Dog_silhouette-04.png',
        size: 'X-Large',
        weight: '31kg+',
    },
]
const standard = [
    {
        title: 'Quick Rinse',
        text: "Quick rinse in a hot tub and a towel dry after a dirty day's daycare",
        prices: [
            {
                size: 'S',
                price: '$10',
            },
            {
                size: 'M',
                price: '$10',
            },
            {
                size: 'L',
                price: '$15',
            },
            {
                size: 'XL',
                price: '$15',
            },
        ],
    },
    {
        title: 'Freshen Up',
        text: 'A warm bath with a genrle shampoo, condition and soft towel dry to freshen up your best friend before they head home from a fun day at daycare!',
        prices: [
            {
                size: 'S',
                price: '$15',
            },
            {
                size: 'M',
                price: '$20',
            },
            {
                size: 'L',
                price: '$25',
            },
            {
                size: 'XL',
                price: '$30',
            },
        ],
    },
    {
        title: 'Freshen Up & Fluff',
        text: 'A gentle shampoo and condition in a warm bath then blow dry to leave your pup feeling clean and looking fluffy after daycare.',
        prices: [
            {
                size: 'S',
                price: '$25',
            },
            {
                size: 'M',
                price: '$30',
            },
            {
                size: 'L',
                price: '$35',
            },
            {
                size: 'XL',
                price: '$40',
            },
        ],
    },
    {
        title: 'Pamper Pack',
        text: 'A gentle shampoo and condition in a warm bath then blow dry. Complete with a nail clip and ear clean to make your pup feel and look good',
        prices: [
            {
                size: 'S',
                price: '$40',
            },
            {
                size: 'M',
                price: '$45',
            },
            {
                size: 'L',
                price: '$50',
            },
            {
                size: 'XL',
                price: '$55',
            },
        ],
    },
    {
        title: 'Spa Day',
        text: 'Starting with a warm bath, gentle shampoo & condition, followed by a blow dry and thorough brush out for that soft coat feeling. Your pup will leave feeling fresh and looking tidy after an action packed day of daycare!',
        prices: [
            {
                size: 'S',
                price: '$40',
            },
            {
                size: 'M',
                price: '$45',
            },
            {
                size: 'L',
                price: '$50',
            },
            {
                size: 'XL',
                price: '$55',
            },
        ],
    },
    {
        title: 'Parlour Treatment',
        text: 'The full treatment. A warm bath, shampoo and condition follow by a blow dry & brush, nail clip & ear clean. Your pup has never felt and looked this good after a day at their favourite daycare!',
        prices: [
            {
                size: 'S',
                price: '$60',
            },
            {
                size: 'M',
                price: '$65',
            },
            {
                size: 'L',
                price: '$70',
            },
            {
                size: 'XL',
                price: '$75',
            },
        ],
    },
]

const professional = [
    {
        title: 'Full Groom',
        text: 'A delicare full groom of your best friend including breed specific and Asian Fusion cuts.',
        inclusions: [
            'Warm Bath',
            'Shampoo & Condition',
            'Blow Dry',
            'Brush',
            'Body Groom',
            'Face Style',
            'Paw Pads',
            'Sanitary Areas',
            'Nail Clip & File',
            'Ear Clean & Pluck',
        ],
        prices: [
            {
                size: 'S',
                price: '$95',
            },
            {
                size: 'M',
                price: '$105',
            },
            {
                size: 'L',
                price: '$115',
            },
            {
                size: 'XL',
                price: '$155',
            },
        ],
    },
    {
        title: 'Hygiene Tidy',
        text: 'A neat and tidy hygiene groom to keep your pup looking and feeling fresh in between grooms. This is also for your double coated breeds needing a deshed and tidy up of their gorgeous floof',
        inclusions: [
            'Warm Bath',
            'Shampoo & Condition',
            'Blow Dry',
            'Brush of Deshed',
            'Paw Pads',
            'Sanitary Areas',
            'Nail Clip & File',
            'Ear Clean & Pluck',
        ],
        prices: [
            {
                size: 'S',
                price: '$75',
            },
            {
                size: 'M',
                price: '$85',
            },
            {
                size: 'L',
                price: '$95',
            },
            {
                size: 'XL',
                price: '$105',
            },
        ],
    },
]

// const training = [
//     {
//         title: 'Puppy Grooming Intro',
//         text: `One-on-one positive and gentle introduction to
// the grooming process and equipment. Our NDTF
// Qualified dog trainer will care for your puppy as
// while using positive reinforcement training to
// increase your pups confidence with handling &
// grooming equipment.<br><br>

// This service is highly recommended for puppies
// who will be getting groomed throughout their
// life such as Poodle breeds, Maltese, Cavaliers
// ect.<br><br>

// Please ask our friendly trainer for more
// information on this service`,
//         price: 'All Puppies - $40',
//     },
//     {
//         title: 'Grooming Desensitisation',
//         text: `Our NDTF Qualified dog trainer will work with
// your dog to desensitise them to the grooming
// process and equipment in order to reduce the
// stress on them during their regular grooms.<br><br>

// Your dogs stress and anxiety around grooming
// and handling can be reduced as well as the
// expression of behaviours such as mouthing,
// biting and wriggling.<br><br>

// Please ask our friendly trainer for more
// information on this service.
// `,
//         price: 'All Dogs - $40',
//     },
// ]
</script>

<style lang="scss">
.bath-pup {
    // min-height: 350px;
    background-position: 45% 50%;
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/gddc-grooming.jpg');

    @media only screen and (max-width: 767px) {
        background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/gddc-grooming.jpg');
    }
}

.form-wrapper {
    max-width: 600px;
}
</style>
