import viewBlogs from './components/viewBlogs.vue';
import addBlog from './components/addBlog.vue';
import NotFound from './components/notFound.vue'

export default [

    {
        path: '/',
        component: viewBlogs,
    },
    {
        path: '/add',
        component: addBlog,
    },
    {
        path: '*',
        component: NotFound,
    }
]