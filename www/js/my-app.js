// Code for platform detection
var isMaterial = Framework7.prototype.device.ios === false;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
  material: isMaterial,
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
  precompileTemplates: true,
  swipePanel: 'left',
  swipePanelActiveArea: '30',
  swipeBackPage: true,
  animateNavBackIcon: true,
  pushState: !!Framework7.prototype.device.os,
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

$$(document).on('submit', '#search', function(e) {
  e.preventDefault();
  var formData = myApp.formToJSON('#search');
  if (!formData.q) {
    myApp.alert('Please enter a search term', 'Search Error');
    return;
  }

  formData.q = (formData.filter === 'all')
    ? formData.q.trim()
    : formData.filter + ':' + formData.q.trim();
  delete formData.filter;
  formData.type = 'track';
  console.log(formData);
  $$('input').blur();
  myApp.showPreloader('Searching');
  $$.ajax({
    dataType: 'json',
    data: formData,
    processData: true,
    url: 'https://api.spotify.com/v1/search',
    success: function (resp) {
      console.log(resp.tracks);
      myApp.hidePreloader();
      mainView.router.load({
        template: myApp.templates.results,
        context: {
          tracks: resp.tracks,
        },
      });
    },
    error: function (xhr) {
      myApp.hidePreloader();
      myApp.alert('An error has occurred', 'Search Error');
      console.log("Error on ajax call " + JSON.stringify(xhr));
    }
  });
});

