import Favorites from './components/pages/Favorites';
import Search from './components/pages/Search';
import Results from './components/pages/Results';
import Details from './components/pages/Details';

export default [
  {
    path: '',
    component: Search,
  },
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
