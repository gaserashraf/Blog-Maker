<template>
  <div id="app">
   
    <navbarApp/>
    <router-view></router-view>
    <!-- <addBlog v-if="false"/>
    <viewBlogs/> -->
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
// import viewBlogs from './components/viewBlogs.vue';
import navbarApp from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    // addBlog,
    // viewBlogs,
    navbarApp
    
}

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
 }
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
