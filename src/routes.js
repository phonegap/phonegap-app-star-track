import Favorites from './components/pages/Favorites.vue';
import Search from './components/pages/Search.vue';
import Results from './components/pages/Results.vue';
import Details from './components/pages/Details.vue';

export default [
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/favorites/',
    component: Favorites,
  },
  {
    path: '/results/:filter/:limit/:q',
    component: Results,
  },
  {
    path: '/results/details/:id',
    component: Details,
  },
];
