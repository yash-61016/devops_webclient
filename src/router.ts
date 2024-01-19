import * as VueRouter from "vue-router";
import ProductCategoryVue from "./views/ProductCategory.vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import ProfileVue from "./views/Profile.vue";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  {
    path: "/product-category/:id?",
    name: "product-category",
    component: ProductCategoryVue,
    props: (route: { params: { id: any } }) => ({ id: route.params.id || 1 }),
  },
  // { path: "/", component: Home },
  { path: "/callback", component: HelloWorldVue },
  { path: "/profile", component: ProfileVue, beforeEnter: authGuard },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
