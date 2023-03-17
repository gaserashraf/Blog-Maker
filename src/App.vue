<template>
  <div id="app">
    <addBlog/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
export default {
  name: 'App',
  components: {
    addBlog
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
