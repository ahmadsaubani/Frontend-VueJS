import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      components: {
        header: Header,
        default: Index,
        footer: Footer
      }
    }
  ]
});
