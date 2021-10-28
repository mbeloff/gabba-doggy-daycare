<template>
  <div class="bg-gray-900">
    <div class="container mx-auto">
      <div class="container max-w-screen-lg  mx-auto p-0 relative">
        <div class="grid grid-cols-3 lg:grid-cols-6 swiper">
          <div class="bg-green-500" v-for="(slide, i) in slideList" :key="i">
            <img :src="imagePrefix + slide" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Slider",
    title: "Slider",
    data() {
      return {
        imagePrefix:"https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_256,w_256/f_auto,q_auto/v1/gddc",
        slides: [
         "/photos/02.jpg",
         "/photos/03.jpg",
         "/photos/04.jpg",
         "/photos/11.jpg",
         "/photos/15.jpg",
         "/photos/16.jpg",
         "/photos/17.jpg",
         "/photos/18.jpg",
         "/photos/206.jpg",
         "/photos/21.jpg",
         "/photos/23.jpg",
         "/photos/24.jpg",
         "/photos/306.jpg",
         "/photos/309.jpg",
         "/photos/311.jpg",
         "/photos/314.jpg",
         "/photos/316.jpg",
         "/photos/401.jpg",
         "/photos/402.jpg",
         "/photos/403.jpg",
         "/photos/404.jpg",
         "/photos/405.jpg",
         "/photos/502.jpg",
         "/photos/610.jpg",
         "/photos/613.jpg",
         "/photos/618.jpg",
         "/photos/701.jpg",
         "/photos/702.jpg",
         "/photos/705.jpg",
         "/photos/706.jpg",
         "/photos/710.jpg",
         "/photos/712.jpg",
         "/photos/713.jpg",
         "/photos/715.jpg",
         "/photos/716.jpg",
         "/photos/718.jpg",
         "/photos/801.jpg",
         "/photos/810.jpg",
         "/photos/811.jpg",
         "/photos/813.jpg",
         "/photos/816.jpg",
         "/photos/818.jpg",
         "/photos/821.jpg",
         "/photos/824.jpg",
         "/photos/827.jpg",
         "/photos/829.jpg",
         "/photos/830.jpg",
         "/photos/831.jpg",
         "/photos/833.jpg",
         "/photos/2021_August/1.jpg",
         "/photos/2021_August/2.jpg",
         "/photos/2021_August/3.jpg",
         "/photos//2021_August/4.jpg",
         "/photos//2021_August/5.jpg",
         "/photos//2021_August/6.jpg",
         "/photos//2021_August/7.jpg",          
         "/photos/more/01.jpg",
         "/photos/more/02.jpg",
         "/photos/more/03.jpg",
         "/photos/more/04.jpg",
         "/photos/more/07.jpg",
         "/photos/more/08.jpg",
         "/photos/more/09.jpg",
         "/photos/more/10.jpg",
         "/photos/more/11.jpg",
         "/photos/more/12.jpg",
         "/photos/more/13.jpg",
         "/photos/2021_March/1.jpg",
         "/photos/2021_March/3.jpg",
         "/photos/2021_March/4.jpg",
         "/photos/2021_March/5.jpg",
         "/photos/2021_March/6b.jpg",
         "/photos/2021_May/3.jpg",
         "/photos/2021_May/4.jpg",
         "/photos/2021_May/1.jpg",
         "/photos/2021_August/50c.jpg",
         "/photos/2021_August_part2/1.jpg",
         "/photos/2021_August_part2/2.jpg",
         "/photos/2021_August_part2/3.jpg",
         "/photos/2021_August_part2/5.jpg",
         "/photos/2021_August_part2/7.jpg",
         "/photos/2021_August_part2/8.jpg",
         "/photos/2021_August_part2/9.jpg",
         "/photos/2021_August_part2/10.jpg",
         "/photos/2021_August_part2/11.jpg",
         "/photos/2021_August_part2/12.jpg",
         "/photos/2021_August_part2/14.jpg",
         "/photos/2021_August_part2/15.jpg",
         "/photos/2021_August_part2/16.jpg",
         "/promo/gddc_44.jpg",
         "/promo/gddc_4_e.jpg",
         "/promo/gddc_38.jpg",
         "/promo/gddc_28.jpg",
         "/promo/gddc_12.jpg",
         "/promo/gddc_10.jpg",
         "/promo/gddc_2.jpg",
         "/promo/gddc_1.jpg",
         "/promo/gddc_14.jpg", 
         "/photos/October_21/1.jpg",       
         "/photos/October_21/2.jpg",       
         "/photos/October_21/3.jpg",       
         "/photos/October_21/4.jpg",       
         "/photos/October_21/5.jpg",       
         "/photos/October_21/6.jpg",       
         "/photos/October_21/7.jpg",       
         "/photos/October_21/8.jpg",       
         "/photos/October_21/9.jpg",       
         "/photos/October_21/10.jpg",       
         "/photos/October_21/11.jpg",       
         "/photos/October_21/12.jpg",       
         "/photos/October_21/13.jpg",       
         "/photos/October_21/14.jpg",       
         "/photos/October_21/15.jpg",       
         "/photos/October_21/16.jpg",       
         "/photos/October_21/17.jpg",       
         "/photos/October_21/18.jpg",       
         "/photos/October_21/19.jpg",       
         "/photos/October_21/20.jpg",       
         "/photos/October_21/21.jpg",       
         "/photos/October_21/22.jpg",              
        ]
      };
    },
    computed: {
      slideList: function () {
        let arr = this.slides
        let n = 12
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .swiper {
    transition: opacity 1s ease-in-out
  }


</style>