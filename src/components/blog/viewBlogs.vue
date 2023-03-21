<template>
    <div class="container">
        <h2>All Blogs</h2>
        <div id="search-filter">
            <input type="text" v-model="search" placeholder="Search blogs">
        </div>
        <Loader v-if="isLoading" />
        <Blog v-for="blog in filteredBlogs" v-bind:key="blog.id" v-bind:blog="blog" />
        <div v-if="!isLoading && filteredBlogs.length == 0">
            <h3>No blogs found!</h3>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import blog from './blog.vue';
import loader from '../partials/loader.vue';
import apiBaseUrl from "../../config.json";

export default {
    name: 'viewBlogs',
    components: {
        Blog: blog,
        Loader: loader
    },
    data() {
        return {
            blogs: [],
            search: '',
            isLoading: true
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
        this.isLoading = true;
        axios.get(`${apiBaseUrl.apiBaseUrl}/posts.json`)
            .then(data => {
                //console.log(data.data);
                const blogsArr = [];
                for (let key in data.data) {
                    blogsArr.push({ ...data.data[key], id: key });
                }
                console.log(blogsArr);
                this.blogs = blogsArr;
                this.isLoading = false;
            });
    }

}
</script>
  
<style scoped>
#search-filter {
    margin: 20px 0;
}

#search-filter input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>
  