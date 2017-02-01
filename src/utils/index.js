/* global window fetch */

export function pad2(number) {
  let newNumber = 0;
  if (number <= 99) {
    newNumber = (`0${number}`).slice(-2);
  } else {
    newNumber = number;
  }
  return newNumber;
}

export function durationFromMs(ms) {
  if (typeof ms !== 'number') {
    return '';
  }
  let x = ms / 1000;
  const seconds = pad2(Math.floor(x % 60));
  x /= 60;
  const minutes = pad2(Math.floor(x % 60));
  x /= 60;
  let hours = Math.floor(x % 24);
  hours = hours ? `${pad2(hours)}:` : '';
  return `${hours}${minutes}:${seconds}`;
}

export function fetchResults() {
  let { q } = this.$route.params;
  const { limit, filter } = this.$route.params;
  q = (filter === 'all') ? q : `${filter}:${q}`;
  fetch(`https://api.spotify.com/v1/search?limit=${limit}&type=track&q=${q}`)
    .then(response => response.json())
    .then((json) => {
      window.store.tracks = json.tracks;
      // reduce the tracks by id
      window.store.tracksById = window.store.tracks.items.reduce((a, b) => {
        const c = a;
        c[b.id] = b;
        return c;
      }, {});
      console.log(window.store);
      this.$f7.hidePreloader();
    }).catch((ex) => {
      console.log('fetching failed', ex);
    });
}
