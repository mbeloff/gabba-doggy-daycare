<template>
  <a target="_blank" :href="this[site].link" class="my-auto fa-stack text-xl text-blue-500 hover:text-yellow-500 social-icon">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fa-stack-1x text-blue-100 " :class="this[site].icon"></i>
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
      link:"https://www.facebook.com/Gabba-Doggy-Daycare-109069914279965/",
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