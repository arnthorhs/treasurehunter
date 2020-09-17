import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Shop from './components/Shop.vue';
import Character from './components/Character.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/shop',
      component:Shop
    },
    {
      path: '/character',
      component: Character,
    },
    {
      path: '*',
      component: NotFound
    }

  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
