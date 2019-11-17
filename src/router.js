import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import ListPosts from "./views/ListPosts.vue";
import CreatePost from "./views/CreatePost.vue";
import PostDetail from "./views/PostDetail.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/posts",
      alias: "/",
      name: "posts",
      components: {
        header: AppHeader,
        default: ListPosts,
        footer: AppFooter
      }
    },
    {
      path: "/post",
      name: "post",
      components: {
        header: AppHeader,
        default: CreatePost,
        footer: AppFooter
      }
    },
    {
      path: "/post/:id",
      name: "post-details",
      components: {
        header: AppHeader,
        default: PostDetail,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
