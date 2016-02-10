// Code for platform detection
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
  android: isAndroid,
  ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add platform styles
if (isAndroid) {
  $$('head').append(
    '<link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">' +
    '<link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">' +
    '<link rel="stylesheet" href="css/styles.css">'
  );
  $$('body').addClass('material');
}
else {
  $$('head').append(
    '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">' +
    '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">' +
    '<link rel="stylesheet" href="css/styles.css">'
  );
  $$('body').addClass('android');
}

if (isAndroid) {
  // Change class
  $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
  // And move Navbar into Page
  $$('.view .navbar').prependTo('.view .page');
}

// Initialize app
var myApp = new Framework7({
  material: isAndroid ? true : false,
  template7Pages: true,
});

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

setTimeout(function() {
  myApp.sizeNavbars('.view-main');
}, 10);

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log('Device is ready!');
});

myApp.onPageInit('index', function (page) {
  // ...
});
