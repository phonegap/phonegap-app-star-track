<template>
  <f7-page>
    <f7-navbar title="Results" back-link="Search" sliding></f7-navbar>
    <f7-block-title>{{ tracksReturned }}</f7-block-title>
    <f7-list media-list>
        <f7-list-item v-for="item in tracks.items"
          @click="clickItem(item.id)"
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
  /* global store fetch */
  import { durationFromMs } from '../../utils/utils';

  export default {
    name: 'Results',
    data() {
      return store;
    },
    methods: {
      durationFromMs,
      mediaItemImage(url) {
        return `<img width="80" src="${url}" />`;
      },
      clickItem(id) {
        const { mainView: { router } } = this.$f7;
        router.loadPage(`/results/details/${id}`);
      },
      fetchResults() {
        let { q } = this.$route.params;
        const { limit, filter } = this.$route.params;
        q = (filter === 'all') ? q : `${filter}:${q}`;
        const apiURL =
          `https://api.spotify.com/v1/search?limit=${limit}&type=track&q=${q}`;
        fetch(apiURL)
          .then(response => response.json())
          .then((json) => {
            store.tracks = json.tracks;
            // reduce the tracks by id
            store.tracksById = store.tracks.items.reduce((a, b) => {
              const c = a;
              c[b.id] = b;
              return c;
            }, {});
            console.log(store);
            this.$f7.hidePreloader();
          }).catch((ex) => {
            console.log('fetching failed', ex);
          });
      },
    },
    computed: {
      tracksReturned() {
        const { items } = this.tracks;
        return items ? `${items.length} tracks returned` : '';
      },
    },
    created() {
      this.$f7.showPreloader('Searching');
      this.tracks = [];
      this.fetchResults();
    },
  };
</script>
