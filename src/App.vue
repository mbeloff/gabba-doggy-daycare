<template>
  <div id="app">
    <div class="nav-wrapper fixed w-full" style="z-index: 100">
      <Nav />
    </div>
    <div class="content-wrapper pt-19" style="margin-top: 78px">
      <router-view />
      <!-- <HelloWorld msg="A little holiday for your pupper"/> -->
    </div>
    <div class="footer-wrapper bg-gray-800 py-6 text-gray-500">
      <p>footer content</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
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
</style>