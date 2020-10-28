<template>
  <div id="app">
    <div class="nav-wrapper fixed w-full" >
      <Nav />
    </div>
    <div class="content pt-20 py-6 bg-gray-100">
      <HelloWorld msg="A little holiday for your pupper"/>
      <p>rest of content</p>
    </div>
    <div class="footer bg-gray-800 py-6 text-gray-500">
      <p>footer content</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>