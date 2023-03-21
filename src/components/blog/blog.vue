<template>
    <router-link class="normal" v-bind:to="'/blog/' + blog.id">
        <div id="blog-item">
            <h2 v-rand-color>{{ blog.title | to - uppercase }}</h2>
            <p>{{ blog.content | snippet }}</p>


        </div>
    </router-link>
</template>
  
<script>
export default {
    name: 'viewBlogs',
    props: {
        blog: {
            type: Object,
            required: true
        }
    }, filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },

}
</script>
  
<style scoped>
#blog-item {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

/*remove link styling*/
.normal {
    text-decoration: none;
    color: inherit;

}
</style>
  