<template>
  <button href="javascript:void(0);" @click="showLogin()"
    ><slot></slot></button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showLogin() {
      this.$modal.show('login-modal')
    }
  }
}
</script>

<style scoped>
</style>
