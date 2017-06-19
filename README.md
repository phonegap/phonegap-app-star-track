# Star Track

A PhoneGap example app using [Framework7 HTML Framework](http://framework7.io/) and the [Spotify API](https://developer.spotify.com/web-api/).

## NOTE: The Spotify API had added a requirement for OAuth authorization even for the `/search` endpoint. This means this app is broken for the moment. See: https://github.com/phonegap/phonegap-app-star-track/issues/26

## Previewing the app

### Requirements

- PhoneGap CLI: `npm install -g phonegap`

### Clone

```
git clone https://github.com/phonegap/phonegap-app-star-track
cd phonegap-app-star-track
phonegap serve
```

### Template

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
