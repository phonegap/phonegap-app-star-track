# Example app CHANGELOG:

## A few more fixes for the workshops

### config.xml

1. Reverted to cordova-plugin-statusbar@1.x till https://issues.apache.org/jira/browse/CB-10796 is fixed

### index.html

1. Changed the search input to type=text so that F7 can style it properly in dark mode.

## Tweaks for clarity

### index.html

1. Removed extraneous comments that were untrue and confusing

## Tweaks for the Desktop App

### index.html

1. opened up the CSP to allow * for websockets

### config.xml

1. added an icon entry for the desktop app

## Engine tags

### config.xml

1. Added iOS as a saved platform

## Plugin updates

### config.xml

1. Updated media plugin to 2.3.0
2. Updated statusbar plugin to 2.1.3
3. Updated console plugin to 1.0.3

## A few tweaks and updates

### my-app.js

1. Removed some `console.log` statements

### img/logo.png

1. Added an image to satisfy the SplashScreen's browser implementation

## Name Change

### config.xml

1. Changed name and id

### index.html

1. Changed title

### README.md

1. Changed header
2. Changed subtitle
3. Changed instructions

## UX issues from feedback - pt 2 - [382788b](https://github.com/phonegap/phonegap-app-media/commit/382788b)

### index.html

1. Added better font-awesome icon for the hamburger menu

## UX issues from feedback - [6c1466a](https://github.com/phonegap/phonegap-app-media/commit/6c1466a)

Added Font-Awesome - http://fontawesome.io - issue #12
    
    Font Awesome by Dave Gandy - http://fontawesome.io

### css/styles.css

1. Removed font-size increase for favourite icon (not needed now it is a font-icon) - issue #12

### js/my-app.js

1. Removed check for the explicit form field - issue #11
2. Fixed the bug with adding, removing and adding favourites - issue #14
3. Changed from HTML entity star to font-awesome star - issue #12

### index.html

1. Added Font-Awesome - http://fontawesome.io - issue #12
2. Changed from HTML entity star to font-awesome star - issue #12
3. Retitled the left panel from "Links" to "Menu" - issue #16
4. Reduced number of times the word "search" occurs on the main search page - issue #10 
5. Removed the "show explicit results" form field - issue #11
6. Added result count to results page - issue #13

## Final Windows tweaks and actual icons - [5bace68](https://github.com/phonegap/phonegap-app-media/commit/5bace68)

### res/icons

1. Added Windows and WP8 icons (not actually in the previous commit)

### css/styles.css

1. `touch-action: pan-y` and `-ms-touch-action: pan-y` to `.page-content` to ensure proper scrolling  in WP8

### index.html

1. Added `winstore-jscompat.js` script tag

### lib/MSOpenTech

1. Added `winstore-jscompat.js` from https://github.com/MSOpenTech/winstore-jscompat
  * Allows `js/init-styles.js` to `append` css tags to head. Basically it is a compatibility layer to allow innerHTML, etc.

## Windows Icons - [2495055](https://github.com/phonegap/phonegap-app-media/commit/2495055)

### config.xml

1. Added entries for Windows and WP8 icons
2. Moved iOS and Android icons into a `res/icons` subfolder

## Issues 6 and 2 (panel and windows support) [790bf7d](https://github.com/phonegap/phonegap-app-media/commit/790bf7d)

Issue 6 - Selected menu item highlight

### index.html

1. Changed panel links to a list

### css/styles.css

1. iOS - panel background color changed to white
2. iOS - panel overlay changed to a semi-transparent (why is iOS defaulting to transparent?)
3. Material - removed the &gt; from panel list item-links

Issue 2 - Where is windows support?

### config.xml

1. Added `<preference name="windows-target-version" value="10.0" />`

### css/styles.css

1. Added `overflow: hidden;` to body and html to better support windows 

## Issue 8 - Update Framework7 dependency version - [c0594a5](https://github.com/phonegap/phonegap-app-media/commit/c0594a5)

Updated Framework7 to latest (1.4.2)

## Issue 9 - Sidebar router occasionally displays blank screen - [d2321d1](https://github.com/phonegap/phonegap-app-media/commit/d2321d1)

### js/my-app.js

1. Added a check to the click event on the Search link in the sidebar
  * Tests to see if the "index" (i.e.: the search page) has the class 'cached'.
  * If it does, then it is safe to load the index with the router.
  * If it doesn't, then the index is probably the current page, so it just closes the panel and does nothing else.

## Bug fixes - [4119932](https://github.com/phonegap/phonegap-app-media/commit/4119932)

### js/my-app.js

1. Set 'reload: true' for search when navigated from the side panel. Otherwise it could be "swiped back" or navigated back with the hardware back button

### config.xml

1. Added the splashscreen plugin
	* this caused some changes to the config.xml, mostly rearranging attributes for some reason...
2. Added a FadeSplashScreenDuration preference set to 300ms

### css/styles.css

1. Upped the size of the favorites button's icon

## Favorites and some refactoring for clarity and stability - [062273d](https://github.com/phonegap/phonegap-app-media/commit/062273d)

### css/styles.css

1. Added styles for the add/remove favorites nav bar button
2. Slightly modified the styles for panel links to have a bigger hit target

### index.html

1. Panel links for "Search" and "Favorites"
2. Added `data-page="index"` to the index navbar to keep the title from getting confused
3. Add the add/remove favorites button to the navabr
4. Added the Favorites list template

### js/my-app.js

1. Bug fix on durationFromMsHelper to allow hours (there is a Fantomas song that is 72 mins long after all)
2. Added click event listeners for the panel links
	* Search loads the index
	* Favorites loads the Favorites template
3. Better error reporting in the search ajax call
4. Add addOrRemoveFavorite method to add/remove favorites
5. Added a dummy fallback object if the Media plugin is unavailable
	* This is optional, it's really only of use if you are testing in a browser and not using `phonegap serve`
6. Added the logic to fetch the current favorites and set up an object to pass as context to the addOrRemoveFavorite method in the navbar's favorite button
7. Add a click handler for the navbar's favorite button
8. Clear the event handlers on page remove

## Small refactor for clarity - [a0a9e60](https://github.com/phonegap/phonegap-app-media/commit/a0a9e60)

### js/my-app.js

1. Renamed the callback functions for the mediaPreview object to clearly
show they are callbacks
2. Moved the status callback so that it appears in along side the other
callbacks and in the order they are called in the `new Media()`
declaration

## Icons ans Splash Screens - [8b04a1d](https://github.com/phonegap/phonegap-app-media/commit/8b04a1d)

### config.xml

1. Added all icon entries for iOS and Android
2. Added all splash entries for iOS and Android

### res/**

1. Added all icon image assets for iOS and Android
2. Added all splash image assets for iOS and Android

### css/styles.css

1. Added width and height styles to the pending-button preloader for iOS as it seems to default to smaller than the Material one

## UI improvements, playback controls & the Media plugin - [4b1c2b1](https://github.com/phonegap/phonegap-app-media/commit/4b1c2b1)

### index.html

1. Removed extraneous \<div class="content-block"\> that was just being used for spacing on Material

### css/styles.css

1. added .material .page .page-content .card:first-of-type to the margin top brigade so as to avoid extraneous div above
2. CSS needed to handle the playback controls (play, pending and stop buttons) as well as the position of the playback progressbar

### config.xml

1. Added the cordova-plugin-media plugin

### index.html

1. Modified the CSP tag to allow the app to run under `phonegap serve browser`
	* Added 'unsafe-inline' and ws://localhost:3000
2. Added playback controls and progressbar to the details page

### js/my-app.js

1. Some refactoring to keep best practices in mind
	* These include putting var declarations at the top of functions
2. This adds the entirety of the preview playback functionality including
	* success and error methods
	* onPageInit, onPageBeforeRemove for the details page
	* playback controls status
	* playback status from the media object
	* monitoring the getCurrentPosition output and updating the progressbar

## Details screen and some refactoring for clarity  - [464c2cb](https://github.com/phonegap/phonegap-app-media/commit/464c2cb)

Also some refactoring for best practice

### index.html

1. Added the track details screen template
	* At this point, preview is being done with an \<audio\> tag, but will re-implement with the Media plugin to show custom UI and as an example of using a plugin
2. Modified the \<a\> in the results list to link to the new details screen and pass the (stringified) context

### js/my-app.js

1. Renamed the durationFromMs function to durationFromMsHelper to keep a consistent naming convention for helpers
2. Added the stringifyHelper to JSON stringify the context and replace " with \&quot; for injecting into the data-context html attribute
3. Made sure all anonymous functions had names (makes debugging easier... I am not 100% against anonymous function, but in this app it seemed appropriate to be thourough)
4. Changed the ternary that modifies formData.q (adding the filter if needed) to a straight if/else for clarity

### css/styles.css

1. added some minor custom styles for the tracks card in the details view

## Update Framework7  - [3a27d05](https://github.com/phonegap/phonegap-app-media/commit/3a27d05)

For some reason the versions of the js, image, and css files in the original template were out of sync

## Tidy up the Search and Results screens - [ab12d3d](https://github.com/phonegap/phonegap-app-media/commit/ab12d3d)

### css/styles.css

1. remove the > from the results list items in Material (not very android-y)

### index.html

1. Reinstate the CSP now that `phonegap serve` can replace it and therefore still live-reload, etc
2. Added the track duration to the results list using the durationFromMs helper
3. Added album name as the media item's item-text

### js/my-app.js

1. Added a Template7 helper to convert the track duration from ms to a human readable "mm:ss"
	* durationFromMs and pad2 to pad the minutes or seconds

## Fix pushState error when developing in a browser - [5ff9c24](https://github.com/phonegap/phonegap-app-media/commit/5ff9c24)

### js/my-app.js

1. Set initialised pushState to `!!Framework7.prototype.device.os` so only true on iOS and Android
	* Browsers seem to have a problem with pushState while run from file://

## Show media list of results - [2853788](https://github.com/phonegap/phonegap-app-media/commit/2853788)

### index.html

1. Changed title from 'Media App' to 'Search'
2. Added template for search 'results'

### js/my-app.js

1. Changed global template variable from android to material to allow defaulting to material
2. Added config `precompileTemplates: true,` to initialisation
3. Added config `pushState: true,` to initialisation to support the android back button
4. Blur inputs on submit to dismiss the keyboard
5. Display a preloader modal while waiting for the API to return the results
6. Hide the preloader when the results return or error out
7. Add an error alert if there is an error with the API call

## Prepare for page navigation - [a1a1fb5](https://github.com/phonegap/phonegap-app-media/commit/a1a1fb5)

### js/my-app.js

1. Added config to app initialisation to improve UX:
	* animateNavBackIcon: true
	* swipePanel: 'left',
	* swipePanelActiveArea: '30',
	* swipeBackPage: true,
	* animateNavBackIcon: true,
2. Added config to allow \<script\> based templates
	* template7Pages: true,

## Unhide checkbox media-items - [200c562](https://github.com/phonegap/phonegap-app-media/commit/200c562)

### css/styles.css

1. Accidentally hid checkbox media-items in iOS instead of just radio ones.

## Align form fields to Spotify API and call said API - [c041c91](https://github.com/phonegap/phonegap-app-media/commit/c041c91)

### index.html

1. Search field name set to 'q'
2. Checkboxes changed to Radios
	* The radios now set the filter in the search
	* Only tracks are returned but the filter above chooses what is searched within tracks
	* Added an 'All'
3. Hidden 'limit' set to 25 for now (pagination? user choice?)

### css/styles.css

1. Try using 'first-of-type' to only margin the first content block in Material
2. Fix alignment of radio and checkbox titles in Material

### js/my-app.js

1. Use 'submit' event of the form to
	* Check for missing fields
	* Massage the form field data to work with the Spotify API
	* Call the API itself and console log the results (to help determine what to do with the data)

## Small CSS tweaks useful for all apps - [b336f26](https://github.com/phonegap/phonegap-app-media/commit/b336f26)

### css/styles.css

1. Add `-webkit-touch-callout: none` to body to avoid the long-press magnifying glass
2. Add `-webkit-user-select: none` to body to keep text in the app from being selectable. If you need it for certain areas, better to enable it there.

## Add search form and allow the developer app - [5a06c53](https://github.com/phonegap/phonegap-app-media/commit/5a06c53)

### index.html

1. Commented out CSP tag as it blocks the use of the mobile developer app refresh and live reload.
	* I am commenting it out during development. Will be a good thing to note in the tutorials
2. Changed the title to "Media App"
3. Added search form
	* Search text field
	* Explicit toggle
	* Checkboxes to include/exclude tracks, song, or artist from search
	* Search submit buton

*Note: the changes below were also made to default to using Material Design where we are not in iOS. This means that if another platform is added, it will at least get the more generic Material theme*

### js/init-styles.js

1. Changed `if` to test for iOS leaving the `else` to deliver Material for everything else
2. Added a class to the \<body\> tag to denote 'material' or 'ios' theme so that custom styles in `css/styles.css` could target one or the other.

### js/my-app.js

1. Again, flipped the default case from iOS to Material
2. Added swipe-to-close on left side panel

### css/styles.css

1. Added some margin-top to content-block and content-block-title under Material. Seems to be a bug possibly related to moving the navbar to support Material and iOS.
2. Added a larger line-height to the label-checkbox item-title. It didn't look lined up enough (again, in Material)

## A fix for Framework7 issue 837 - [6adae29](https://github.com/phonegap/phonegap-app-media/commit/6adae29)

### index.html

1. `<script type="text/javascript" src="js/init-styles.js"></script>` added before `my-app.js`
	* Uses code from https://github.com/nolimits4web/Framework7/issues/837#issuecomment-182348815 but in a standalone file

### js/init-styles.js added

### js/my-app.js

1. Removed code for adding stylesheets to the head
2. Removed the fragile `setTimeout` added to fix the navbar title issue

## Themes (Material and iOS) as well as custom colours - [4ccf178](https://github.com/phonegap/phonegap-app-media/commit/4ccf178)

### index.html

1. \<body class="theme-green"\> // Change to a "green" theme to match Spotify a bit
2. Remove CSS link tags in prep for dynamic theming below
3. OCD 2-space indents

### js/my-app.js

1. All the JS code from [Maintain both iOS and Material Themes in single app](http://www.idangero.us/framework7/tutorials/maintain-both-ios-and-material-themes-in-single-app.html)
	* This has caused a bug with the title no longer being centered in iOS :/
	* Issue raised: https://github.com/nolimits4web/Framework7/issues/837
	* Temp fix: `setTimeout(function() { myApp.sizeNavbars('.view-main'); }, 10);`
	* Another minor bug, the `.content-block` sits UNDER the navbar in the Material theme
	* Temp fix: `.material .page .page-content > .content-block { margin-top: 78px; }`
2. Additionally add a class to \<body\> of either 'material' or 'ios'
2. OCD 2-space indents

### www/css/styles.css

1. OCD 2-space indents

## First template tweaks - [3a695b8](https://github.com/phonegap/phonegap-app-media/commit/3a695b8)

1. Removed about.html (we'll be using templates, not xhr'd html pages)

### config.xml

1. Updated description
2. Updated Author
3. Added \<preference name="StatusBarStyle" value="default" /\> due to light theme choice

### index.html

1. Removed 'unsafe-eval' from CSP tag. If I need it, I will either work around it or reluctantly add it back in
2. Changed \<title\> to "PhoneGap Media App"
3. Changed the panel style from reveal to cover (perf)
4. Moved navbar menu button from right to left (ux/stylistic choice)
5. Removed link to about.html
6. Removed bottom toolbar

### js/my-app.js

1. Removed code for handling the about page
2. Added commented out code for about page in the myApp.onPageInit() style as a placeholder
	Thoughts on the 3 options? I noticed you ditched the myApp.onPageInit() version in your template?

### .gitignore

1. added a .gitignore to ignore platforms and plugins


### www/css/styles.css

1. .statusbar-overlay { background: rgb(247, 247, 248); } // to match the navbar

## Initial import - [f23ada6](https://github.com/phonegap/phonegap-app-media/commit/f23ada6)

```
phonegap create phonegap-app-media --id "com.phonegap.appmedia" --name "PG Media" --template phonegap-template-framework7
```



















