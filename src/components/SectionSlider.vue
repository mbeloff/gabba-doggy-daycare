<template>
    <div class="bg-gray-900">
        <div class="container mx-auto">
            <div class="container relative max-w-screen-xl p-0 mx-auto">
                <div class="grid grid-cols-3 lg:grid-cols-6 swiper" id="swiper">
                    <div v-for="(slide, i) in list" :key="i">
                        <img
                            :src="imagePrefix + slide"
                            alt=""
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="grid bg-gray-100">
            <button
                id="get-images"
                title="show more photos"
                class="py-1 m-1 text-center justify-self-center link-pink"
                @click="slideList()"
            >
                <i class="mr-2 fal fa-redo-alt"></i>show me more GDDC superstars
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    title: 'Slider',
    data() {
        return {
            num: 1,
            imagePrefix:
                'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_256,w_256/f_auto,q_auto/v1/gddc',
            slides: [
                '/photos/update/0001.jpg',
                '/photos/update/0002.jpg',
                '/photos/update/0003.jpg',
                '/photos/update/0004.jpg',
                '/photos/update/0005.jpg',
                '/photos/update/0006.jpg',
                '/photos/update/0007.jpg',
                '/photos/update/0008.jpg',
                '/photos/update/0009.jpg',
                '/photos/update/0010.jpg',
                '/photos/update/0011.jpg',
                '/photos/update/0012.jpg',
                '/photos/update/0013.jpg',
                '/photos/update/0014.jpg',
                '/photos/update/0015.jpg',
                '/photos/update/0016.jpg',
                '/photos/update/0017.jpg',
                '/photos/update/0018.jpg',
                '/photos/update/0019.jpg',
                '/photos/update/0020.jpg',
                '/photos/update/0021.jpg',
                '/photos/update/0022.jpg',
                '/photos/update/0023.jpg',
                '/photos/update/0024.jpg',
                '/photos/update/0025.jpg',
                '/photos/update/0026.jpg',
                '/photos/update/0027.jpg',
                '/photos/update/0028.jpg',
                '/photos/update/0029.jpg',
                '/photos/update/0030.jpg',
                '/photos/update/0031.jpg',
                '/photos/update/0032.jpg',
                '/photos/update/0033.jpg',
                '/photos/update/0034.jpg',
                '/photos/update/0035.jpg',
                '/photos/update/0036.jpg',
                '/photos/update/0037.jpg',
                '/photos/update/0038.jpg',
                '/photos/update/0039.jpg',
                '/photos/update/0040.jpg',
                '/photos/update/0041.jpg',
                '/photos/update/0042.jpg',
                '/photos/update/0043.jpg',
                '/photos/update/0044.jpg',
                '/photos/update/0045.jpg',
                '/photos/update/0046.jpg',
                '/photos/update/0047.jpg',
                '/photos/update/0048.jpg',
                '/photos/update/0049.jpg',
                '/photos/update/0050.jpg',
                '/photos/update/0051.jpg',
                '/photos/update/0052.jpg',
                '/photos/update/0053.jpg',
                '/photos/update/0054.jpg',
                '/photos/update/0055.jpg',
                '/photos/update/0056.jpg',
                '/photos/update/0057.jpg',
                '/photos/update/0058.jpg',
                '/photos/update/0059.jpg',
                '/photos/update/0060.jpg',
                '/photos/update/0061.jpg',
                '/photos/update/0062.jpg',
                '/photos/update/0063.jpg',
                '/photos/update/0064.jpg',
                '/photos/update/0065.jpg',
                '/photos/update/0066.jpg',
                '/photos/update/0067.jpg',
                '/photos/update/0068.jpg',
                '/photos/update/0069.jpg',
                '/photos/update/0070.jpg',
                '/photos/update/0071.jpg',
                '/photos/update/0072.jpg',
                '/photos/update/0073.jpg',
                '/photos/update/0074.jpg',
                '/photos/update/0075.jpg',
                '/photos/update/0076.jpg',
                '/photos/update/0077.jpg',
                '/photos/update/0078.jpg',
                '/photos/update/0079.jpg',
                '/photos/update/0080.jpg',
                '/photos/update/0081.jpg',
                '/photos/update/0082.jpg',
                '/photos/update/0083.jpg',
                '/photos/update/0084.jpg',
                '/photos/update/0085.jpg',
                '/photos/update/0086.jpg',
                '/photos/update/0087.jpg',
                '/photos/update/0088.jpg',
                '/photos/update/0089.jpg',
                '/photos/update/0090.jpg',
                '/photos/update/0091.jpg',
                '/photos/update/0092.jpg',
                '/photos/update/0093.jpg',
                '/photos/update/0094.jpg',
                '/photos/update/0095.jpg',
                '/photos/update/0096.jpg',
                '/photos/update/0097.jpg',
                '/photos/update/0098.jpg',
                '/photos/update/0099.jpg',
                '/photos/update/0100.jpg',
                '/photos/update/0101.jpg',
                '/photos/update/0102.jpg',
                '/photos/update/0103.jpg',
                '/photos/update/0104.jpg',
                '/photos/update/0105.jpg',
                '/photos/update/0106.jpg',
                '/photos/update/0107.jpg',
                '/photos/update/0108.jpg',
                '/photos/update/0109.jpg',
                '/photos/update/0110.jpg',
                '/photos/update/0111.jpg',
                '/photos/update/0112.jpg',
                '/photos/update/0113.jpg',
                '/photos/update/0114.jpg',
                '/photos/update/0115.jpg',
                '/photos/update/0116.jpg',
                '/photos/update/0117.jpg',
                '/photos/update/0118.jpg',
                '/photos/update/0119.jpg',
                '/photos/update/0120.jpg',
                '/photos/update/0121.jpg',
                '/photos/update/0122.jpg',
                '/photos/update/0123.jpg',
                '/photos/update/0124.jpg',
                '/photos/update/0125.jpg',
                '/photos/update/0126.jpg',
            ],
            list: [],
        }
    },
    methods: {
        slideList() {
            var element = document.getElementById('swiper')
            element.style.opacity = '0'
            // wait for fade out before getting new slides
            setTimeout(() => {
                let arr = this.slides
                let n = 12
                var result = new Array(n),
                    len = arr.length,
                    taken = new Array(len)
                if (n > len)
                    throw new RangeError(
                        'getRandom: more elements taken than available'
                    )
                while (n--) {
                    var x = Math.floor(Math.random() * len)
                    result[n] = arr[x in taken ? taken[x] : x]
                    taken[x] = --len in taken ? taken[len] : len
                }
                this.list = result
            }, 500)
            // wait for new slides before fading in
            setTimeout(() => {
                element.style.opacity = '100'
            }, 1000)
        },
    },
    mounted() {
        this.slideList()
    },
}
</script>

<style lang="scss" scoped>
.swiper {
    transition: opacity 0.5s ease-in-out;
}
</style>
