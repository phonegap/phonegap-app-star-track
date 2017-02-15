<template>
  <f7-panel left :cover="isMaterial" :reveal="isiOS" :layout="layout" theme="green">
    <f7-page>
      <f7-list>
        <f7-list-item
          link="/search"
          title="Search"
          link-reload
          link-close-panel
        />
        <f7-list-item
          link="/favorites/"
          title="Favorites"
          link-reload
          link-close-panel
        />
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
  /* global window */
  export default {
    name: 'LeftPanel',
    data() {
      return {
        isMaterial: window.isMaterial,
        isiOS: window.isiOS,
      };
    },
    computed: {
      layout() {
        return window.isiOS ? 'dark' : 'light';
      },
    },
  };
</script>
