<template>
    <div id="blog-item">
        <h2 v-rand-color>{{ blog.title }}</h2>
        <p>{{ blog.body }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'viewBlogs',
    props:{
        blog: {
            type: Object,
            required: true
        }   
    }

}
</script>
  
<style scoped>
#blog-item {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
  