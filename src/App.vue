<template>
  <div id="app">
    <div class="nav-wrapper fixed w-full" >
      <Nav class="mb-6 flex-1" />
    </div>
    <div class="content pt-20 p-6 bg-gray-100">
      <HelloWorld msg="HelloWorld Component MSG" class="text-center text-lg p-6"/>
      <p>content</p>
    </div>
    <div class="footer bg-gray-800 p-6 text-gray-500">
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