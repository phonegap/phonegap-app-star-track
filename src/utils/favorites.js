/* global store localStorage */

function updateFavoritesById() {
  store.favoritesById = store.favorites.reduce((a, b) => {
    const c = a;
    c[b.id] = b;
    return c;
  }, {});
}

function addFavorite(favorite) {
  store.favorites.push(favorite);
  updateFavoritesById();
}

function removeFavorite(id) {
  store.favorites = store.favorites.filter(favorite => favorite.id !== id);
  updateFavoritesById();
}

function saveFavoritesToLocalStorage() {
  localStorage.setItem('favorites', JSON.stringify(store.favorites));
}

export function toggleFavorite(favorite) {
  const alreadyAFavorite = store.favorites.filter(fave => fave.id === favorite.id);
  if (alreadyAFavorite.length > 0) {
    removeFavorite(favorite.id);
  } else {
    addFavorite(favorite);
  }
  saveFavoritesToLocalStorage();
}

export function fetchFavoritesFromLocalStorage() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}
