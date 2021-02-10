<template>
  <button href="javascript:void(0);" @click="showGrooming()"
    ><slot></slot></button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showGrooming() {
      this.$modal.show('grooming-modal')
    }
  }
}
</script>

<style scoped>
</style>
