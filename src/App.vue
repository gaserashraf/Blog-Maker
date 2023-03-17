<template>
  <div id="app">
    <addBlog v-if="false"/>
    <viewBlogs/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import viewBlogs from './components/viewBlogs.vue';
export default {
  name: 'App',
  components: {
    addBlog,
    viewBlogs
  }

}
</script>

<style>
#app {
  font-family: 'Trebuchet MS';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
    box-sizing: border-box;
    color: #333;
}
</style>
