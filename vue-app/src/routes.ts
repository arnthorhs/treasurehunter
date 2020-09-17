import Home from './components/Home.vue';
import Shop from './components/Shop.vue';
import Character from './components/Character.vue';
import NotFound from './components/NotFound.vue';

export default [
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