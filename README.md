# Star Track

A PhoneGap example app using [Vue.js](https://vuejs.org), [Framework7 (with Vue.js bindings)](http://framework7.io/vue) and the [Spotify API](https://developer.spotify.com/web-api/).

## Previewing the app

### Requirements

- PhoneGap CLI: `npm install -g phonegap`

### Clone

```
git clone https://github.com/phonegap/phonegap-app-star-track
cd phonegap-app-star-track
git checkout vue-f7
npm install
npm run build
phonegap serve
```

Another option, for rapid developing in the browser, instead of `npm run build` and `phonegap serve`, you can also use

```
npm run dev
```

...which will run a hot reloading server and start up the browser at `http://localhost:8080`. This will also allow use of the [Vue.js development extension in Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

### Template

> ((*NOTE: This uses the npm package that has **not** been updated to use Vue.js*))

Alternatively, you can use the app as a template for the PhoneGap CLI:

```
phonegap create StarTrack --template phonegap-app-star-track
cd StarTrack
phonegap serve
```

### View

You can now view the app either in a browser at`localhost:3000`, or using the [PhoneGap Developer App](http://app.phonegap.com/) on your device(s).


Of course, all the other PhoneGap CLI commands work as expected.

```
phonegap platform add ios
phonegap run ios
cordova platform add android
cordova run android --device
```

etc...
