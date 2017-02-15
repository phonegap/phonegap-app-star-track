/* global window document f7 */

import 'whatwg-fetch';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Import F7
/* eslint-disable no-unused-vars */
import Framework7 from 'framework7';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

// Import Routes
import Routes from './routes';

// Import App
import App from './App';

// Import utils
import { fetchFavoritesFromLocalStorage } from './utils/favorites';

// Import F7 iOS Theme Styles
/* eslint-disable global-require */
if (window.Framework7.prototype.device.ios) {
  const Framework7Theme =
    require('framework7/dist/css/framework7.ios.min.css');
  const Framework7ThemeColors =
    require('framework7/dist/css/framework7.ios.colors.min.css');
} else {
  /* OR for Material Theme: */
  const Framework7ThemeMaterial =
    require('framework7/dist/css/framework7.material.min.css');
  const Framework7ThemeColorsMaterial =
    require('framework7/dist/css/framework7.material.colors.min.css');
}

window.isMaterial = !window.Framework7.prototype.device.ios;
window.isiOS = window.Framework7.prototype.device.ios;

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

// Init App
new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<app />',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    material: !window.Framework7.prototype.device.ios,
    routes: Routes,
    swipePanel: 'left',
    animateNavBackIcon: window.Framework7.prototype.device.ios,
    pushState: true,
    pushStateNoAnimation: true, // ?
  },
  // Register App Component
  components: {
    app: App,
  },
});

// Set up a global store
const favorites = fetchFavoritesFromLocalStorage();
const favoritesById = favorites.reduce((a, b) => {
  const c = a;
  c[b.id] = b;
  return c;
}, {});

// Global store defaults
window.store = {
  tracks: [],
  tracksById: {},
  favorites,
  favoritesById,
  pending: false,
  playing: false,
  mediaPreview: {
    play() {},
    stop() {},
    release() {},
    getCurrentPosition() {},
  },
};

// Ye olde Device Ready
document.addEventListener('deviceready', () => {
  // Bind to the back button for Android
  document.addEventListener('backbutton', () => {
    f7.mainView.router.back();
  });
});
