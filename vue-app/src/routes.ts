import Home from './screens/Home.vue';
import Shop from './screens/Shop.vue';
import Character from './screens/Character.vue';
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