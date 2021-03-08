<template>
  <section v-if="this.visible" class="flex items-center justify-center mb-8 -mt-8">
    <div class="flex items-center bg-white shadow rounded-xl mt-6 px-2 border border-green-500">
      <div class="flex self-stretch mr-3 bg-green-500 rounded-l-xl px-4  text-center -ml-3">
        <h2 class="self-center text-white text-2xl font-bold mr-1">
          <slot name="left"></slot>
        </h2>
      </div>
      <div class="flex items-center">
        <p class="text-sm text-gray-700 my-1">
          <slot name="right"></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style>

</style>