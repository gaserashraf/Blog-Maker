<template>
  <div id="app">
    <navbarApp/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarApp from './components/navbar/navbar.vue';

export default {
  name: 'App',
  components: {
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
