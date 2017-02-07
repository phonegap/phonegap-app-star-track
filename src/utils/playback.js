/* global store f7 Media */

export function mediaPreviewSuccessCallback(progressbar) {
  store.pending = false;
  store.playing = false;
  f7.setProgressbar(progressbar, 0, 100);
}

export function mediaPreviewErrorCallback(error) {
  store.pending = false;
  store.playing = false;
  console.error(error);
}

export function mediaPreviewStatusCallback(status, progressbar) {
  switch (status) {
    case 2: // playing
      store.playing = true;
      f7.setProgressbar(progressbar, 0, 0);
      break;
    case 4: // stopped
      store.pending = false;
      store.playing = false;
      break;
    default:
      // Default fall back not needed
  }
}

let mediaTimer;
export function monitorMediaPreviewCurrentPosition(media, progressbar) {
  let percent = 0;
  // If no media object is provided, stop monitoring
  if (!media) {
    clearInterval(mediaTimer);
    return;
  }
  mediaTimer = setInterval(() => {
    media.getCurrentPosition((position) => {
      if (position > -1) {
        percent = (position / media.getDuration()) * 100;
        f7.setProgressbar(progressbar, percent);
      }
    },
    (e) => {
      console.error('Error getting position', e);
    });
  }, 100);
}

export function createMediaPreview(mediaPreviewUrl, progressbar) {
  if (typeof Media !== 'undefined') {
    // Create media object on page load so as to let it start buffering right
    //  away...
    store.mediaPreview = new Media(
      mediaPreviewUrl,
      () => mediaPreviewSuccessCallback(progressbar),
      mediaPreviewErrorCallback,
      status => mediaPreviewStatusCallback(status, progressbar),
    );
  } else {
    // Create a dummy media object for when viewing in a browser, etc
    //  this really is optional, using `phonegap serve` polyfills the
    //  Media plugin
    const noMedia = () => {
      f7.alert('Media playback not supported', 'Media Error');
      setTimeout(() => {
        store.pending = false;
        store.playing = false;
        mediaPreviewStatusCallback(4, progressbar); // stopped
        console.error('No media plugin available');
      }, 0);
    };
    store.mediaPreview = {
      play: noMedia,
      stop() {},
      release() {},
      getCurrentPosition() {},
    };
  }
}
