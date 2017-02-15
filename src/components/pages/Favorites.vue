<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon="fa fa-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>
        Favorites
      </f7-nav-center>
    </f7-navbar>
    <f7-list media-list v-if="hasFavorites">
      <f7-list-item v-for="favorite in favorites"
        @click="clickItem(favorite.id)"
        :link="`/results/details/${favorite.id}`"
        :media="mediaItemImage(favorite.album.images[0].url)"
        :title="favorite.name"
        :subtitle="favorite.artists[0].name"
        :text="favorite.album.name"
        :after="durationFromMs(favorite.duration_ms)"
      />
    </f7-list>
    <f7-block v-else>
      <p>You haven't favorited any tracks! Use the search function and add
      some to favorites.</p>
    </f7-block>
  </f7-page>
</template>

<script>
  /* global store */
  import { durationFromMs } from '../../utils/utils';

  export default {
    name: 'Favorites',
    data() {
      return store;
    },
    methods: {
      durationFromMs,
      mediaItemImage(url) {
        return `<img width="80" src="${url}" />`;
      },
      clickItem(id) {
        this.$f7.mainView.router
          .loadPage(`/results/details/${id}?displayingFavorite=true`);
      },
    },
    computed: {
      hasFavorites() {
        return !!this.favorites.length;
      },
    },
  };
</script>
