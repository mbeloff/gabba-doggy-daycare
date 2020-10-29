<template>
  <button href="javascript:void(0);" @click="show()"
    ><nobr><slot></slot></nobr
  ></button>
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
