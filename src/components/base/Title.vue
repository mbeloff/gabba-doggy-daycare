<template>
  <div>
    <p class="font-bold text-blue-700 mb-10">
      <slot name="small">Default Small</slot>
      </p>
      <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10"><slot name="big">Default Big</slot></h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>