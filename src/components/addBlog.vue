<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form>
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
                <button class="preview" v-on:click="previewBlogFun($event)">Preview Blog</button>
                <button v-on:click="submitBlogFun">Submit Blog</button>
                <button class="clear" v-on:click="clear">Cancel</button>
            </div>
        </form>
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
            }

        }
    }, methods: {
        previewBlogFun(event) {
            event.preventDefault();
            this.previewBlog.title = this.blog.title;
            this.previewBlog.content = this.blog.content;
            this.previewBlog.categories = this.blog.categories;
        },
        submitBlogFun() {
            console.log(this.blog);
        }, clear() {
            this.blog.title = '';
            this.blog.content = '';
            this.previewBlog.title = '';
            this.previewBlog.content = '';
        }
    }

}
</script>
  
<style scoped>
* {
    box-sizing: border-box;
    color: #444;
}

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
  