import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/home',
      component: () => import('./components/HelloWorld.vue'),
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).mount('#app')
