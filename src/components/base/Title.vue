<template>
  <div>
    <p class="mb-10 font-bold text-blue-500">
      <slot name="small"></slot>
      </p>
      <h2 class="mb-10 text-5xl font-bold leading-tight tracking-tight"><slot name="big">Default Big</slot></h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>