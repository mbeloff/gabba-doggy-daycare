<template>
  <div class="container py-20 md:px-2 mx-auto">
    <title-block>
      <template #big>Frequently Asked Questions</template>
      <template #small>Need Answers?</template>
    </title-block>
    <p class="mb-10">If you don't find the answer to your questions here, please don't hesitate to get in touch. <a class="link-pink" href="tel:0423487302">Give us a call</a> during business hours, or  <open-modal class="link-pink">send us a message</open-modal> and we'll get back to you as soon as we can.</p>
    <section-faq></section-faq>
  </div>
</template>

<script>
import SectionFaq from '@/components/SectionFaq.vue'
export default {
 components: {SectionFaq}
}
</script>

<style>

</style>