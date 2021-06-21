import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Todo from '../views/Todo.vue';
import Manga from '../views/Manga.vue';
import Detail from '../views/Detail.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    props: (route) => ({ name: route.query.name }),
  },
  {
    path: '/Manga',
    name: 'Manga',
    component: Manga,
    props: (page) => ({ query: page.query.manga }),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    props: (route) => ({ query: route.query.manga }),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
