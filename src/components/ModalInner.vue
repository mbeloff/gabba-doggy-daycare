<template>
  <div class="p-3 bg-light">
    <button class="float-right focus:outline-blue" @click="hide()"><i class="fa fa-times fa-3x text-blue-300 mx-3 hover:text-blue-600 "></i>
    </button>
    <h1 class="text-4xl tracking-tight text-blue-600">
      Register your interest
    </h1>
    <p class="font-bold">We'll let you know when we're opening, so you can start your free trial with us.</p>
    <br />
    <form action=""></form>
  </div>
</template>
<script>
export default {
  methods: {
    hide() {
      this.$modal.hide('contact-modal')
    }
  }
}
</script>

<style lang="scss">
</style>
