<template>
  <div class="relative">
    <i class=" fas fa-2x opacity-0 fa-circle"></i>
    <i class="fal fa-2x z-20 absolute  left-0 top-0 text-blue-600" :class="'fa-' + icon" :style="{transform: 'rotateZ(' + ranNum() + 'deg)' }"></i>
    <i class="fas fa-2x absolute left-1 top-1 z-10 transform scale-105 text-yellow-100" :class="'fa-' + icon" :style="{ transform : 'rotateZ(' + ranNum() + 'deg)' }"></i>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'fa-circle'
      },
    },
    methods: {
      ranNum() {
        let x = Math.random() * (30) - 15
        return x
      }
    },
  }
</script>

<style>

</style>