<template>
  <div id="app">
    <div class="nav-wrapper fixed w-full" style="z-index: 100">
      <Nav />
    </div>
    <div class="content-wrapper pt-19" style="margin-top: 91px">
      <router-view />
    </div>
    <div class="footer-wrapper">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav, Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  color: #353640;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 78px);
}
.overflow-hidden {
  overflow: hidden;
}
</style>