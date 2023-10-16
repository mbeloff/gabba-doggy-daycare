<template>
    <div>
        <div class="grid grid-cols-3">
            <img
                class="object-center object-cover h-full"
                :src="require('@/assets/img/floofy/gddc-before.jpg')"
                alt=""
            />
            <img
                class="object-center object-cover h-full"
                :src="require('@/assets/img/floofy/floofy.png')"
                alt=""
            />
            <img
                class="object-center object-cover h-full"
                :src="require('@/assets/img/floofy/gddc-after.jpg')"
                alt=""
            />
        </div>
        <img :src="require('@/assets/img/floofy/price-table.png')" alt="" />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
