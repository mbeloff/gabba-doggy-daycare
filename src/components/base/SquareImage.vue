<template>
  <div class="aspect-w-1 aspect-h-1 rounded-md shadow-lg bg-cover bg-center" :style="{backgroundImage: 'url(' + this.img + ')'}" alt=""></div>
</template>

<script>
export default {
  props: {
    img: String
  }
}
</script>

<style>

</style>