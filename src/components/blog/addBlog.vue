<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <Loader v-if="isLoading" />
        <form v-if="!submitted && !isLoading">
            <input type="text" v-model="blog.title" required placeholder="Blog title">
            <textarea required v-model="blog.content" placeholder="Blog content"></textarea>
            <div id="blog-categories">
                <div class="blog-category">
                    <label>Food:</label>
                    <input type="checkbox" value="Food" v-model="blog.categories">
                </div>

                <div class="blog-category">
                    <label>Travel:</label>
                    <input type="checkbox" value="Travel" v-model="blog.categories">
                </div>

                <div class="blog-category">
                    <label>Sports:</label>
                    <input type="checkbox" value="Sports" v-model="blog.categories">
                </div>
                <div class="blog-category">
                    <label>Technology:</label>
                    <input type="checkbox" value="Technology" v-model="blog.categories">
                </div>
            </div>
            <div class="buttons">
                <button class="btn btn-warning" v-on:click.prevent="previewBlogFun()">Preview Blog</button>
                <button class="btn btn-primary" v-on:click.prevent="submitBlogFun">Submit Blog</button>
                <button class="btn btn-danger" v-on:click.prevent="clear">Cancel</button>
            </div>
        </form>
        <div v-if="submitted" class="success">
            <h3>Blog submitted successfully!</h3>
        </div>
        <div id="preview-section" v-if="!isLoading">
            <h3>Preview Blog</h3>
            <p>
                <span class="text-blod">Blog title:</span> {{ previewBlog.title }}
            </p>
            <p class="text-blod">Blog content:</p>
            <p>{{ previewBlog.content }}</p>
            <p><span class="text-blod">Blog categories:</span></p>
            <BlogCategories v-bind:categories="previewBlog.categories" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import apiBaseUrl from "../../config.json";
import blogCategories from './blogCategories.vue';
import loader from '../partials/loader.vue';
export default {
    name: 'addBlog',
    components: {
        BlogCategories: blogCategories,
        Loader: loader

    },
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: []
            },
            previewBlog: {
                title: '',
                content: '',
                categories: []
            },
            submitted: false,
            isLoading: true

        }
    }, methods: {
        previewBlogFun() {
            if (this.blog.title == '' || this.blog.content == '' || this.blog.categories.length == 0) {
                return;
            }
            this.previewBlog.title = this.blog.title;
            this.previewBlog.content = this.blog.content;
            this.previewBlog.categories = this.blog.categories;
        },
        submitBlogFun() {
            if (this.blog.title == '' || this.blog.content == '' || this.blog.categories.length == 0) {
                return;
            }
            axios.post(`${apiBaseUrl.apiBaseUrl}/posts.json`, this.blog)
                .then(data => {
                    console.log(data);
                    this.submitted = true;
                    this.previewBlogFun();
                });
        }, clear() {
            this.blog.title = '';
            this.blog.content = '';
            this.blog.categories = [];
            this.previewBlog.title = '';
            this.previewBlog.content = '';
            this.previewBlog.categories = [];
        }
    },
    created() {
        console.log("gaser");
        if (this.$route.params.id) {
            console.log("update Blog");
            this.isLoading = true;
            axios.get(`${apiBaseUrl.apiBaseUrl}/posts/${this.$route.params.id}.json`)
                .then(data => {
                    this.isLoading = false;
                    this.blog = data.data;
                });
        } else {
            console.log("add Blog");
            this.isLoading = false;
        }
    }

}
</script>
  
<style scoped>
#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

input,
textarea {
    display: block;
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

textarea {
    height: 150px;
}

#blog-categories {
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
}

.blog-category {
    display: flex;
    justify-content: start;
    margin-right: 10px;
}



.buttons {
    display: flex;
    justify-content: center;
}

.success {
    background-color: #4CAF50;
    padding: 10px;
    text-align: center;
}

.success h3 {
    margin: 0;
    color: #fff;
}

#preview-section {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
</style>
  