<template>
  <div class="shadow-xl bg-gray-200 rounded-lg">
    <div class="flex justify-between p-3 bg-blue-600 rounded-t-lg">
      <h1 class="text-3xl tracking-tight font-bold text-blue-100"><i class="fal fa-paw mr-2"></i>
        <slot name="title">
          Default Title
        </slot>
      </h1>
      <button class="float-right focus:outline-blue" @click="hide()"><i class="fa fa-times fa-2x text-blue-200 mx-3 hover:text-blue-900"></i>
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
        this.$modal.hide('login-modal')
      },
    }
  }
</script>

<style lang="scss">
  .bg-pug {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604466493/gddc/pug-sm.png);
    background-size: 60% auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .grow-enter-active,
  .grow-leave-active {
    transition: max-height 0.5s, opacity 0.5s;
    max-height: 100px;
  }

  .grow-enter,
  .grow-leave-to {
    opacity: 0;
    max-height: 0px;
  }
</style>