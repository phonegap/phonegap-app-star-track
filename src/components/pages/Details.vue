<template>
  <f7-page>
    <f7-navbar title="Results" back-link="Results" sliding>
      <f7-nav-right>
        <f7-link icon="fa fa-star" @click="toggleFavorite" v-if="isFavorite"></f7-link>
        <f7-link icon="fa fa-star-o" @click="toggleFavorite" v-else></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-card>
      <!-- cache the card and header content with `v-once` so that when removing
        a favorite, it doesn't try to re-render with missing data -->
      <f7-card-header class="no-border no-padding" v-once>
        <img :src="item.album.images[0].url" width="100%" />
      </f7-card-header>
      <f7-card-content>
        <div class="card-content-inner" v-once>
          <div class="track-name">{{ item.name }}</div>
          <div class="artists-name">by {{ item.artists[0].name }}</div>
          <div class="album-title">{{ item.album.name }}</div>
        </div>
        <div class="card-content-inner preview">
          <div class="playback-controls">
            <transition-group name="fade">
              <a class="play-button play" v-show="stopped" href="#" @click.prevent="clickPlay" key="play">
                <div class="arrow-right play"></div>
              </a>
              <a class="pending-button pending" v-show="pending" href="#" @click.prevent="clickStop" key="pending">
                <span class="preloader pending"></span>
              </a>
              <a class="stop-button stop" v-show="playing" href="#" @click.prevent="clickStop" key="stop">
                <div class="square stop"></div>
              </a>
            </transition-group>
            <div class="duration">
              <f7-progressbar ref="progressbar" />
            </div>
          </div>
        </div>
      </f7-card-content>
      <f7-card-footer>
        <div>Track duration</div>
        <div>{{ duration }}</div>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>

<script>
  /* global store Media */
  import { durationFromMs } from '../../utils/utils';
  import {
    mediaPreviewSuccessCallback,
    mediaPreviewErrorCallback,
    mediaPreviewStatusCallback,
    monitorMediaPreviewCurrentPosition,
    createMediaPreview,
  } from '../../utils/playback';
  import { toggleFavorite } from '../../utils/favorites';

  export default {
    name: 'Details',
    data() {
      return store;
    },
    methods: {
      onF7Init() {
        this.createMediaPreview(this.item.preview_url, this.progressbar);
      },
      clickPlay() {
        this.monitorMediaPreviewCurrentPosition(this.mediaPreview, this.progressbar);
        this.mediaPreview.play();
        this.pending = true;
      },
      clickStop() {
        this.mediaPreview.stop();
        this.playing = false;
        this.pending = false;
      },
      toggleFavorite() {
        const { mainView: { router } } = this.$f7;

        if (this.displayingFavorite) {
          toggleFavorite(this.item);
          router.back();
        } else {
          toggleFavorite(this.item);
        }
      },
      mediaPreviewSuccessCallback,
      mediaPreviewErrorCallback,
      mediaPreviewStatusCallback,
      monitorMediaPreviewCurrentPosition,
      createMediaPreview,
    },
    computed: {
      duration() {
        return this.item && this.item.duration_ms && durationFromMs(this.item.duration_ms);
      },
      stopped() {
        return !this.playing;
      },
      displayingFavorite() {
        const { displayingFavorite = false } = this.$route.query;
        return !!displayingFavorite;
      },
      item() {
        let item;
        if (this.displayingFavorite) {
          item = this.favoritesById[this.id];
        } else {
          item = this.tracksById[this.id];
        }
        return item;
      },
      id() {
        return this.$route.params.id;
      },
      progressbar() {
        return this.$refs.progressbar.$el;
      },
      isFavorite() {
        const filteredFavorites = this.favorites.filter(favorite => favorite.id === this.id);
        return !!filteredFavorites.length;
      },
    },
    beforeDestroy() {
      // stop playing before leaving the page
      this.monitorMediaPreviewCurrentPosition();
      this.mediaPreview.stop();
      this.mediaPreview.release();
    },
  };
</script>

<style scoped>
  .no-padding {
    padding: 0;
  }

  .card-content .track-name {
    font-weight: bold;
  }

  .card-content .album-title {
    font-style: italic;
  }

  .card-content .preview audio {
    width: 100%;
  }

  .card-content-inner {
    padding: 10px 0;
  }

  .playback-controls {
    height: 64px;
  }

  .playback-controls .play-button,
  .playback-controls .pending-button,
  .playback-controls .stop-button {
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    background: #e6e6e6;
    border-radius: 50%;
    padding: 16px 16px;
  }

  .playback-controls .pending-button .preloader {
    width: 32px;
    height: 32px;
  }

  .playback-controls a.displayed {
    opacity: 1;
    visibility: visible;
  }

  .playback-controls .play-button .arrow-right {
    width: 0;
    height: 0;
    margin-left: 8px;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 24px solid #333333;
  }

  .playback-controls .stop-button .square {
    width:24px;
    height: 24px;
    margin: 4px;
    background: #333333;
  }

  .playback-controls .duration {
    position: absolute;
    left: 80px;
    height: 64px;
    box-sizing: border-box;
    right: 0;
    padding: 8px 0;
    line-height: 48px;
  }

  .playback-controls .progressbar {
    display: inline-block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>
