<template>
    <div class="container">
        <div id="blog-item">
            <Loader v-if="isLoading" />
            <h2>{{ blog?.title }}</h2>
            <p>{{ blog?.content }}</p>
        </div>
        <div class="buttons">
            <button v-bind:disabled='isLoading' class="btn btn-danger" v-on:click.prevent="deleteBlog">Delete Blog</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import loader from '../partials/loader.vue';
import apiBaseUrl from "../../config.json";
export default {
    name: 'singleBlog',
    components: {
        Loader: loader
    },
    data() {
        return {
            blog: null,
            id: this.$route.params.id,
            isLoading: true
        }
    },

    created() {
        this.isLoading = true;
        axios.get(`${apiBaseUrl.apiBaseUrl}/posts/${this.id}.json`)
            .then(data => {
                console.log(data.data);
                this.blog = data.data;
                this.isLoading = false;
            });
    },
    methods: {
        deleteBlog() {
            axios.delete(`${apiBaseUrl.apiBaseUrl}/posts/${this.id}.json`)
                .then(data => {
                    console.log(data.data);
                    this.$router.push('/');
                });
        }
    }

}
</script>
  
<style scoped>
#blog-item {
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background: #eee;
    min-height: 150px;
}
</style>
  