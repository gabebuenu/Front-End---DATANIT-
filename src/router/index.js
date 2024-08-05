import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../views/Cadastro.vue'
import LoginView from '../views/LoginView.vue'
import Sobre from '../views/Sobre.vue'
import Lei from '../views/Lei.vue'
import Metodologia from '../views/Metodologia.vue'
import store from '../store'  // Importando a store Vuex

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
    meta: { requiresAuth: true }  // Adicionando a meta requiresAuth para proteger a rota
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/lei',
    name: 'Lei',
    component: Lei
  },
  {
    path: '/metodologia',
    name: 'Metodologia',
    component: Metodologia
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLoggedIn) {
      if (to.path !== '/login') {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
