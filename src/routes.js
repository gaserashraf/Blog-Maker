import viewBlogs from "./components/blog/viewBlogs.vue";
import addBlog from "./components/blog/addBlog.vue";
import singleBlog from "./components/blog/singleBlog.vue";
import NotFound from "./components/partials/notFound.vue";

export default [
  {
    path: "/",
    component: viewBlogs,
  },
  {
    path: "/add",
    component: addBlog,
  },
  {
    path: "/add/:id",
    component: addBlog,
  },
  {
    path: "/blog/:id",
    component: singleBlog,
  },
  {
    path: "*",
    component: NotFound,
  },
];
