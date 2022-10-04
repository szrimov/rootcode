import Vue from 'vue';
import VueRouter from 'vue-router';
import TheBoard from '@/views/TheBoard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'board',
    component: TheBoard,
  },
  { path: '*', redirect: { name: 'board' } },
];

const router = new VueRouter({
  routes,
});

export default router;
