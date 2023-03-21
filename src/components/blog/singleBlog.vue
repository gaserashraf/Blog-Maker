<template>
    <div id="blog-item">
        <Loader v-if="isLoading"/>
        <h2>{{ blog?.title }}</h2>
        <p>{{ blog?.content }}</p>
        
    </div>
</template>
  
<script>
import axios from 'axios'
import loader from '../partials/loader.vue';
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
        axios.get(`https://blog-maker-d7bba-default-rtdb.firebaseio.com/posts/${this.id}.json`)
            .then(data => {
                console.log(data.data);
                this.blog = data.data;
                this.isLoading = false;
            });
    }

}
</script>
  
<style scoped>
#blog-item {
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background: #eee;
    width: 50%;
}
</style>
  