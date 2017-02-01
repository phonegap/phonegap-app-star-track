<template>
  <f7-page>
    <f7-navbar title="Results" back-link="Search" sliding></f7-navbar>
    <f7-block-title>{{ tracks.items ? `${tracks.items.length} tracks returned` : 'Loading...' }}</f7-block-title>
    <f7-list media-list>
        <f7-list-item v-for="item in tracks.items"
          @click="clickItem(item)"
          :link="`/results/details/${item.id}`"
          :media="mediaItemImage(item.album.images[0].url)"
          :title="item.name"
          :subtitle="item.artists[0].name"
          :text="item.album.name"
          :after="durationFromMs(item.duration_ms)"
        />
    </f7-list>
  </f7-page>
</template>

<script>
  /* global fetch window */
  import 'whatwg-fetch';
  import { durationFromMs, fetchResults } from '../../utils';

  export default {
    data() {
      return window.store;
    },
    methods: {
      fetchResults,
      durationFromMs,
      mediaItemImage(url) {
        return `<img width="80" src="${url}" />`;
      },
      clickItem(item) {
        this.$f7.mainView.router.loadPage(`/results/details/${item.id}`);
      },
    },
    created() {
      this.$f7.showPreloader('Searching');
      this.tracks = [];
      this.fetchResults();
    },
  };
</script>
