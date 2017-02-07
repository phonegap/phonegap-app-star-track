/* global window */

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

import App from './App';

// Import F7 iOS Theme Styles
/* eslint-disable no-unused-vars */
if (window.Framework7.prototype.device.ios) {
  const Framework7Theme = require('framework7/dist/css/framework7.ios.min.css'); // eslint-disable-line global-require
  const Framework7ThemeColors = require('framework7/dist/css/framework7.ios.colors.min.css'); // eslint-disable-line global-require
} else {
  /* OR for Material Theme: */
  const Framework7ThemeMaterial = require('framework7/dist/css/framework7.material.min.css'); // eslint-disable-line global-require
  const Framework7ThemeColorsMaterial = require('framework7/dist/css/framework7.material.colors.min.css'); // eslint-disable-line global-require
}

window.isMaterial = !window.Framework7.prototype.device.ios;
window.isiOS = window.Framework7.prototype.device.ios;

// Import App Custom Styles
// import AppStyles from './css/app.css';

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

// const isMaterial = Framework7.prototype.device.ios === false;
// const isIos = Framework7.prototype.device.ios === true;

/* eslint-disable no-new */
// Init App
new Vue({
  el: '#app',
  template: '<app />',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
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
window.store = {
  tracks: [],
  tracksById: {},
  pending: false,
  playing: false,
  mediaPreview: {
    play() {},
    stop() {},
    release() {},
    getCurrentPosition() {},
  },
};
