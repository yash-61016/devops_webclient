import * as VueRouter from 'vue-router';
import ProductCategoryVue from './views/ProductCategory.vue';
import HelloWorldVue from './components/HelloWorld.vue';
import ProfileVue from './views/Profile.vue';
import { authGuard } from '@auth0/auth0-vue';

const Home = ProductCategoryVue;

const routes = [
  { path: '/', component: Home },
  { path: '/callback', component: HelloWorldVue },
  { path: '/profile', component: ProfileVue, beforeEnter: authGuard },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
