<template>
  <div class="bg-gray-100 rounded-lg shadow-xl" @keydown.esc="hide">
    <div class="flex justify-between p-3 bg-blue-600 rounded-t-lg">
      <h1 class="text-2xl font-bold tracking-tight text-blue-100">
        <i class="mr-2 fas fa-paw"></i>
        <slot name="title">
          Default Title
        </slot>
      </h1>
      <button class="float-right focus:outline-white" @click="hide()"><i class="mx-3 text-blue-200 fa fa-times fa-2x hover:text-blue-900"></i>
      </button>
    </div>
    <slot name="body"></slot>
  </div>
</template>
<script>
  export default {
    methods: {
      hide() {
        this.$modal.hide('contact-modal');
        this.$modal.hide('login-modal');
        this.$modal.hide('grooming-modal')
      },
    }
  }
</script>

<style lang="scss">
  .bg-pug {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/v1604466493/gddc/pug-sm.png);
    background-size: 60% auto;
  }


</style>