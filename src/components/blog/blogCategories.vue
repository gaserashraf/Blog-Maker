<template>
    <div>
        <ul>
            <li v-for="category in categories" v-bind:key="category">{{ category }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'blogCategories',
    props: {
        categories: {
            type: Array,
            required: true
        }
    }

}
</script>
  
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

li {
    list-style: none;
    background-color: #444;
    color: white;
    margin-right: 5px;
    padding: 5px;
    border-radius: 3px;
}
</style>
  