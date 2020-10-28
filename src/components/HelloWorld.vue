<template>
  <div class="hello h-screen bg-cover bg-center text-white">
    <div class="container p-4 flex flex-col justify-center h-full mx-auto">
      <div class="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 class="text-6xl font-bold leading-tight mb-3">{{ msg }}</h1>
        <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, provident expedita ab quibusdam inventore ad?</p>
        <button class="border text-lg rounded-full px-5 py-2 hover:bg-white  hover:text-black focus:outline-white">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello {
    background-image: url(../assets/img/pouncingpup.jpg)
  }
</style>