<template>
    <div id="blogs">
        <h2>All Blogs</h2>
        <Blog v-for="blog in blogs" v-bind:key="blog.id" v-bind:blog="blog"/>
    </div>
</template>
  
<script>
import axios from 'axios'
import blog from './blog.vue';
export default {
    name: 'viewBlogs',
    components: {
        Blog:blog
    },
    data() {
        return {
            blogs: []
        }
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => {
                this.blogs = data.data.slice(0, 10);
                console.log(data);
            });
    }

}
</script>
  
<style scoped>
#blogs{
    max-width: 800px;
    margin: 0px auto;
}
</style>
  