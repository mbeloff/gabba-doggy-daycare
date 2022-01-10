<template>
  <div>
    <div class="tile min-h-screen">
      <div class="container grid grid-cols-1 gap-x-20 gap-y-10 px-2 py-20 mx-auto max-w-screen-lg">
        <div class="col y-5">
          <title-block>
            <template #small>Character Sketches and</template>
            <template #big>Pet Portraits</template>
          </title-block>
          <p class="mb-4">
            Coming soon for for GDDC customers - Take home an original character sketch or <em>paw</em>trait of your best friend by artist Maaret Webb. <br>
            Stay tuned for more details.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="bg-cover bg-pic bg-center rounded-xl col bg-portrait-1 shadow-xl aspect-w-4 aspect-h-5">
          </div>
          <div class="bg-cover bg-pic bg-center rounded-xl col bg-sketch-1 shadow-xl aspect-w-4 aspect-h-5">
          </div>
          <div class="bg-cover bg-pic bg-center rounded-xl col bg-portrait-2 shadow-xl aspect-w-4 aspect-h-5">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bg-portrait-1 {
  background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/v1635821959/gddc/portraits/GDDC_portrait_1.jpg')
}
.bg-portrait-2 {
  background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/v1635821959/gddc/portraits/GDDC_portrait_2.jpg')
}
.bg-sketch-1 {
  background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/v1635821959/gddc/portraits/GDDC_sketch_1.jpg')
}
</style>