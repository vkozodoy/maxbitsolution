import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CoreMainLayout from './components/CoreMainLayout.vue'

const routes = [
    {
      path: '/home',
      component: () => CoreMainLayout,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).mount('#app')
