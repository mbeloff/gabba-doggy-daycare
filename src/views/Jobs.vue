<template>
  <div class="section grid content-center sm:content-start">
    <div class="container py-20 mx-auto px-2 text-center">
      <Title class="text-center">
        <template v-slot:small>Love Working With Dogs?</template>
        <template v-slot:big>Job Opportunities</template>
      </Title>
      <p class="jobs-outter"><span class="jobs">Sorry, we have no vacant positions at the moment.</span></p>
      <p class="text-sm">Still want to spend time with lots of dogs? <Email>Email Us</Email> to enquire about a volunteer position.</p>
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
  margin: 4rem 0;
}
.jobs {
  display: inline-block;
  position: relative;
  &:before, &:after {
    position: absolute;
    content: "";
    width: 95%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgb(253, 156, 172), transparent);
  }
  &:before {
    top: -1rem
  }
  &:after {
    bottom: -1rem;
    left: 0;
  }
}
</style>