<template>
  <div>
    <p class="mb-5 font-bold text-blue-500">
      <slot name="small"></slot>
    </p>
    <p class="mb-10 text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
      <slot name="big"></slot>
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>