import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Post from '@/modules/article/views/Post.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/posts', name: 'Post', component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
