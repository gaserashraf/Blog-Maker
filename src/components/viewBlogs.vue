<template>
    <div id="blogs">
        <h2>All Blogs</h2>
        <div id="search-filter">
            <input type="text" v-model="search" placeholder="Search blogs">
        </div>
        <Blog v-for="blog in filteredBlogs" v-bind:key="blog.id" v-bind:blog="blog"/>
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
            blogs: [],
            search: ''
        }
    },
    computed: {
        filteredBlogs() {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
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
#search-filter{
    margin: 20px 0;
}
#search-filter input{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>
  