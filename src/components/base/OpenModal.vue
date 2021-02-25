<template>
  <button href="javascript:void(0);" @click="show()"
    ><slot/></button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    show() {
      this.$modal.show('contact-modal')
    }
  }
}
</script>

<style scoped>
</style>
