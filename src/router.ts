import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import { cocktailList } from './constants/index';

const routes = [
  {
    path: '/',
    redirect: `/${cocktailList[0]}`,
  },
  {
    path: '/:cocktailName',
    name: 'Home',
    component: Home,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (typeof to.params.cocktailName === 'string' && cocktailList.includes(to.params.cocktailName)) {
        next();
      } else {
        next('/404');
      }
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
