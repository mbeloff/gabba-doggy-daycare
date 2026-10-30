<template>
    <Icon
        :icon="data"
        :width="size"
        :height="size"
        class="inline-block align-middle"
    />
</template>

<script>
import { Icon } from '@iconify/vue2'
import { icons } from '@/icons/phosphor'

export default {
    components: { Icon },
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: [String, Number],
            default: '1em',
        },
    },
    computed: {
        data() {
            return icons[this.name] || icons['circle-fill']
        },
    },
}
</script>
