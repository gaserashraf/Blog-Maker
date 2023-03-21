<template>
    <div id="blogs">
        <h2>All Blogs</h2>
        <div id="search-filter">
            <input type="text" v-model="search" placeholder="Search blogs">
        </div>
        <Loader v-if="isLoading" />
        <Blog v-for="blog in filteredBlogs" v-bind:key="blog.id" v-bind:blog="blog" />
    </div>
</template>
  
<script>
import axios from 'axios'
import blog from './blog.vue';
import loader from '../partials/loader.vue';
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
        axios.get("https://blog-maker-d7bba-default-rtdb.firebaseio.com/posts.json")
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
#blogs {
    max-width: 800px;
    margin: 0px auto;
}

#search-filter {
    margin: 20px 0;
}

#search-filter input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>
  