<template>
  <div class="section grid content-center sm:content-start">
    <div class="container py-20 mx-auto px-2 text-center">
      <title-block class="text-center">
        <template #small>Love Working With Dogs?</template>
        <template #big>Job Opportunities</template>
      </title-block>
      <p class="jobs-outter"><span class="jobs">Sorry, we have no vacant positions at the moment.</span></p>
      <p class="text-sm">Still want to spend time with lots of dogs? <link-email class="link-pink">Email Us</link-email> to enquire about a volunteer position.</p>
    </div>    
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
.section {
  height: calc(100vh - 76px)
}
.jobs-outter {
  margin: 3rem 0;
}
.jobs {
  display: inline-block;
  position: relative;
  &:before, &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgb(253, 156, 172), transparent);
  }
  &:before {
    top: -.75rem;
    left: 0;
  }
  &:after {
    bottom: -.75rem;
    left: 0;
  }
}
</style>