<template>
    <a
        target="_blank"
        rel="noopener"
        :href="this[site].link"
        class="flex text-blue-500 hover:text-yellow-400 focus:outline-blue"
        :aria-label="this[site].alt"
        :title="this[site].alt"
    >
        <span
            class="social-icon relative my-auto inline-flex items-center justify-center w-8 h-8"
        >
            <app-icon
                name="circle-fill"
                size="2rem"
                class="absolute left-0 top-0"
            />
            <app-icon
                :name="this[site].icon"
                size="1.05rem"
                class="brand-glyph relative z-10 text-blue-100"
            />
        </span>
        <span class="font-normal place-self-center"><slot></slot></span>
    </a>
</template>

<script>
export default {
    props: {
        site: String,
    },
    data() {
        return {
            facebook: {
                link: 'https://www.facebook.com/gabbadoggydaycare',
                alt: 'Find us on Facebook',
                icon: 'facebook-logo-fill',
            },
            instagram: {
                link: 'https://www.instagram.com/gabbadoggydaycare/',
                alt: 'Find us on Instagram',
                icon: 'instagram-logo-fill',
            },
            tiktok: {
                link: 'https://www.tiktok.com/@gabbadoggydaycare',
                alt: 'Find us on Tiktok',
                icon: 'tiktok-logo-fill',
            },
        }
    },
}
</script>
