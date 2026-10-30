<template>
    <div class="tile">
        <div class="container py-32 px-2 max-w-screen-xl mx-auto text-center">
            <title-block>
                <template #small
                    >Your best friend's new favourite place</template
                >
                <template #big><h1>Gabba Doggy Daycare</h1></template>
            </title-block>
            <div class="flex flex-wrap text-left justify-around">
                <p class="px-5 mb-10 md:text-lg text-center">
                    Treat your dog to a fun day of play and socialising with new
                    friends at Gabba Doggy Daycare. GDDC is a massive off-leash
                    day care centre for dogs of all shapes and sizes. We have
                    indoor and outdoor play areas, and our friendly daycare team
                    provide all the care and attention your dogs need while
                    you're at work.
                </p>
                <div
                    v-for="(card, i) in cards"
                    :key="i"
                    class="flex-grow py-2 sm:px-2 md:p-3 w-1/1 sm:flex-grow-0 sm:w-1/2 md:w-1/3 card-container order-1"
                    :class="{ 'md:order-1 order-last': card.type }"
                >
                    <div
                        class="h-full py-8 bg-white rounded-lg shadow-md card text-center"
                    >
                        <span
                            class="relative inline-flex items-center justify-center w-16 h-16"
                        >
                            <app-icon
                                name="circle-fill"
                                size="4rem"
                                class="absolute left-0 top-0 text-blue-100"
                            />
                            <img
                                :src="card.src"
                                alt=""
                                class="card-art relative z-10"
                                :class="card.art"
                            />
                        </span>
                        <p class="my-3 font-bold text-blue-700 py-2">
                            {{ card.heading }}
                        </p>
                        <p class="text-gray-700 text-left px-4">
                            {{ card.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    src: require('@/assets/img/icon-play.svg'),
                    art: 'play',
                    heading: 'Play',
                    desc: 'Everyone plays differently. We have play areas with dogs matched by size and energy level, from high energy areas to chilled out zones for puppies and old-timers :)',
                },
                {
                    src: require('@/assets/img/icon-friends.svg'),
                    art: 'friends',
                    heading: 'Socialise',
                    desc: 'Make new human and fur-friends in a safe and supervised environment. We love dogs, and we do our best to make sure everyone gets along and has fun at Gabba Doggy Daycare.',
                },
                {
                    src: require('@/assets/img/icon-exercise.svg'),
                    art: 'exercise',
                    heading: 'Exercise',
                    desc: 'Give your pets a chance to burn that excess energy during the day, with heaps of room to run around in sand and grass, pools, ball pits and more.',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    min-height: 200px;
}

.card-art {
    object-fit: contain;
}

.play {
    width: 3.6rem;
    height: 3.6rem;
    margin-top: -0.35rem;
    transform: rotate(3deg);
}

.friends {
    width: 3.5rem;
    height: 2.8rem;
}

.exercise {
    width: 3.4rem;
    height: 2.2rem;
    margin-top: 0.2rem;
}
</style>
