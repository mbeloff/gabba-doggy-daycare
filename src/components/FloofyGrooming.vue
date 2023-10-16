<template>
    <div>
        <div class="grid grid-cols-3">
            <img
                class="object-cover object-center h-full"
                :src="require('@/assets/img/floofy/gddc-before.jpg')"
                alt=""
            />
            <img
                class="object-cover object-center h-full"
                :src="require('@/assets/img/floofy/floofy.png')"
                alt=""
            />
            <img
                class="object-cover object-center h-full"
                :src="require('@/assets/img/floofy/gddc-after.jpg')"
                alt=""
            />
        </div>
        <div class="grid grid-items-center">
            <a href="" class="btn-blue">BOOK NOW</a>
        </div>
        <img :src="require('@/assets/img/floofy/price-table.png')" alt="" />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
