<template>
  <f7-page>
    <f7-navbar title="Results" back-link="Search" sliding></f7-navbar>
    <f7-card>
      <f7-card-header class="no-border no-padding">
        <img :src="album.images[0].url" width="100%" />
      </f7-card-header>
      <f7-card-content>
        <div class="card-content-inner">
          <div class="track-name">{{ name }}</div>
          <div class="artists-name">by {{ artists[0].name }}</div>
          <div class="album-title">{{ album.name }}</div>
        </div>
        <div class="card-content-inner preview">
          <div class="playback-controls">
            <transition-group name="fade">
              <a class="play-button play" v-show="stopped" href="#" @click.prevent="clickPlay" key="play">
                <div class="arrow-right play"></div>
              </a>
              <a class="pending-button pending" v-show="pending" href="#" @click.prevent="clickPending" key="pending">
                <span class="preloader pending"></span>
              </a>
              <a class="stop-button stop" v-show="playing" href="#" @click.prevent="clickStop" key="stop">
                <div class="square stop"></div>
              </a>
            </transition-group>
            <div class="duration">
              <span data-progress="0" class="progressbar"></span>
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
  /* global store */
  import { durationFromMs } from '../../utils/utils';

  export default {
    name: 'Details',
    data() {
      return store.tracksById[this.$route.params.id];
    },
    methods: {
      clickPlay() {
        console.log('play clicked');
        store.pending = true;
        setTimeout(() => {
          store.pending = false;
          store.playing = true;
        }, 1000);
      },
      clickPending() {
        console.log('pending clicked');
        store.playing = true;
      },
      clickStop() {
        console.log('stop clicked');
        store.playing = false;
      },
    },
    computed: {
      duration() {
        return durationFromMs(this.duration_ms);
      },
      stopped() {
        return !store.playing;
      },
      pending() {
        return store.pending;
      },
      playing() {
        return store.playing;
      },
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
