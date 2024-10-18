import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Blog from '@/modules/blog/views/Blog.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
