<template>
  <f7-panel left cover layout="light" theme="green">
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
  export default {
    name: 'LeftPanel',
  };
</script>
