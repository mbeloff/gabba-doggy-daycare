<template>
    <div
        class="relative inline-block align-middle"
        style="width: 2.25em; height: 2.25em"
    >
        <app-icon
            :name="pair.fill"
            size="2em"
            class="absolute left-1 top-1 z-10 text-yellow-100"
            :style="{ transform: 'rotate(' + tilt + 'deg) scale(1.05)' }"
        />
        <app-icon
            :name="pair.outline"
            size="2em"
            class="absolute left-0 top-0 z-20 text-blue-600"
            :style="{ transform: 'rotate(' + tilt + 'deg)' }"
        />
    </div>
</template>

<script>
const pairs = {
    'calendar-day': ['calendar', 'calendar-fill'],
    paw: ['paw-print', 'paw-print-fill'],
    sunglasses: ['sunglasses', 'sunglasses-fill'],
    taxi: ['taxi', 'taxi-fill'],
    bath: ['bathtub', 'bathtub-fill'],
    'home-heart': ['house', 'house-fill'],
    'tennis-ball': ['tennis-ball', 'tennis-ball-fill'],
    snooze: ['moon', 'moon-fill'],
    viruses: ['virus', 'virus-fill'],
    debug: ['bug', 'bug-fill'],
    'venus-mars': ['gender-intersex', 'gender-intersex-fill'],
    'smile-plus': ['smiley', 'smiley-fill'],
    'phone-rotary': ['phone', 'phone-fill'],
    'paper-plane': ['paper-plane-tilt', 'paper-plane-tilt-fill'],
    'comment-alt-smile': ['chat-circle', 'chat-circle-fill'],
    heart: ['heart', 'heart-fill'],
}

export default {
    props: {
        icon: {
            type: String,
            default: 'paw',
        },
    },
    data() {
        return {
            tilt: Math.random() * 30 - 15,
        }
    },
    computed: {
        pair() {
            const names = pairs[this.icon] || pairs.paw
            return { outline: names[0], fill: names[1] }
        },
    },
}
</script>
