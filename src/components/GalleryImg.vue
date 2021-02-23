<template>
  <img :src="imgUrl" alt="">
</template>

<script>
export default {
  props: {
    img: String
  },
  computed: {
    imgUrl() {
      // return 'url(' + this.img + ')'
      return this.img
    }
  }
}
</script>

<style>

</style>