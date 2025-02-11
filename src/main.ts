import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Определение маршрутов
const routes = [
    {
      path: '/',
      component: () => import('./components/HelloWorld.vue'),
    },
  ];
  
  // Создание маршрутизатора
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).mount('#app')
