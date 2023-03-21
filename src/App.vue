<template>
  <div id="app">
    <navbarApp />
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

.container {
  max-width: 800px;
  margin: 0px auto;
}

.btn {
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  color: azure;
  margin-right: 10px;
  font-weight: bold;
  border-radius: 2px;
  padding: 10px 20px;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-primary {
  background-color: #4CAF50;
}

.btn-danger {
  background-color: #f44336;
}

.btn-warning {
  background-color: #ff9800;
}

.text-blod {
  font-weight: bold;
}
</style>
