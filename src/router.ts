import * as VueRouter from 'vue-router';
import ProductCategoryVue from './views/ProductCategory.vue';

const Home = ProductCategoryVue;
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
