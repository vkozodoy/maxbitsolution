import { createRouter, createWebHistory } from 'vue-router';
import CocktailDetails from './components/cocktails/CocktailDetails.vue'
import NotFound from './pages/NotFound.vue'
import { cocktailList } from './constants/index'

const routes = [
    {
        path: '/',
        redirect: `/${cocktailList[0]}`,
    },
    {
        path: '/:cocktailName',
        name: 'cocktailDetail',
        component: CocktailDetails,
        props: true,
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