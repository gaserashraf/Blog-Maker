<template>
    <div>
      <spinner :color="'#3B8070'" :size="'medium'"></spinner>
    </div>
  </template>
  
  <script>
  import Spinner from 'vue-spinner/src/ScaleLoader.vue';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'loader',
    components: { Spinner }
  }
  </script>
  