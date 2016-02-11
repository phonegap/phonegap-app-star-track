// Code for platform detection
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
  android: isAndroid,
  ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

if (!isIos) {
  // Change class
  $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
  // And move Navbar into Page
  $$('.view .navbar').prependTo('.view .page');
}

// Initialize app
var myApp = new Framework7({
  material: isIos? false : true,
  template7Pages: true,
  swipePanelOnlyClose: 'left',
});

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log('Device is ready!');
});

myApp.onPageInit('index', function (page) {
  // ...
});
