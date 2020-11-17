<template>
<a target="_blank" rel="noopener" :href="this[site].link" class="flex text-blue-600 hover:text-yellow-500">
  <div class="my-auto fa-stack text-xl  social-icon">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fa-stack-1x text-blue-100" :class="this[site].icon"></i>
            </div>
  <span class="place-self-center font-normal"><slot></slot></span>
</a>
  
</template>

<script>
export default {
props: {
  site: String
},
data() {
  return{
    facebook: {
      link:"https://www.facebook.com/gabbadoggydaycare",
      icon:"fab fa-facebook-square",
    },
    instagram: {
      link: "https://www.instagram.com/gabbadoggydaycare/",
      icon: "fab fa-instagram"
    }
  }
}
}
</script>

<style>
.fa-stack-1x {
  margin: auto auto
}
</style>