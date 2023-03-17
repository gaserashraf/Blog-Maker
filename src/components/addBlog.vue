<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form v-if="!submitted">
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
                <button class="preview" v-on:click.prevent="previewBlogFun()">Preview Blog</button>
                <button v-on:click.prevent="submitBlogFun">Submit Blog</button>
                <button class="clear" v-on:click.prevent="clear">Cancel</button>
            </div>
        </form>
        <div v-if="submitted" class="success">
            <h3>Blog submitted successfully!</h3>
        </div>
        <div id="preview-section">
            <h3>Preview Blog</h3>
            <p>
                <span class="preview-section-title">Blog title:</span> {{ previewBlog.title }}
            </p>
            <p class="preview-section-title">Blog content:</p>
            <p>{{ previewBlog.content }}</p>
            <p><span class="preview-section-title">Blog categories:</span></p>
            <ul>
                <li v-for="category in previewBlog.categories" v-bind:key="category">{{ category }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    name: 'addBlog',
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
            submitted: false

        }
    }, methods: {
        previewBlogFun() {
            this.previewBlog.title = this.blog.title;
            this.previewBlog.content = this.blog.content;
            this.previewBlog.categories = this.blog.categories;
        },
        submitBlogFun() {
            
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: this.blog.title,
                body: this.blog.content,
                userId: "Axios!"
                })
                .then(data => {
                console.log(data);
                this.submitted = true;
                this.previewBlogFun();
            });
            //console.log(this.blog);
        }, clear() {
            this.blog.title = '';
            this.blog.content = '';
            this.blog.categories = [];
            this.previewBlog.title = '';
            this.previewBlog.content = '';
            this.previewBlog.categories = [];
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

button {
    padding: 8px;
    margin-bottom: 10px;
    background-color: #4CAF50;
    color: #111;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    font-weight: bold;
    border-radius: 2px;
}

.buttons {
    display: flex;
    justify-content: center;
}

button.preview {
    background-color: #f5f504;
}

button.clear {
    background-color: #f50404;
}

.success{
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
}
.success h3{
    margin: 0;
    color: #fff;
}
#preview-section {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

.preview-section-title {
    font-weight: bold;
}

#preview-section ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

#preview-section li {
    list-style: none;
    background-color: #ccc;
    margin-right: 5px;
    padding: 5px;
    border-radius: 3px;
}
</style>
  