<template>
  <f7-page theme="green">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon="fa fa-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>
        Search
      </f7-nav-center>
    </f7-navbar>
    <form form method="GET" :id="searchFormId" @submit.prevent="onSubmit">
      <f7-list>
        <f7-list-item>
          <f7-input type="text" name="q"
              placeholder="track, artist or album"
              autocorrect="off" autocapitalize="off" />
        </f7-list-item>
        <f7-list-group>
          <f7-list-item title="Limit to:" group-title></f7-list-item>
          <f7-list-item radio name="filter" value="track" title="Track name"></f7-list-item>
          <f7-list-item radio name="filter" value="artist" title="Artist name"></f7-list-item>
          <f7-list-item radio name="filter" value="album" title="Album name"></f7-list-item>
          <f7-list-item radio name="filter" value="all" title="All of the above" checked></f7-list-item>
        </f7-list-group>
        <input type="hidden" name="limit" value="25" />
        <f7-block>
          <input type="submit" class="button button-big button-fill search-submit" value="Find Tracks" />
        </f7-block>
      </f7-list>
    </form>
  </f7-page>
</template>

<script>
  /* global document */
  export default {
    name: 'Search',
    methods: {
      onSubmit() {
        const { filter, limit, q } = this.$f7.formToJSON(`#${this.searchFormId}`);
        console.log(filter, limit, q);
        if (!q) {
          this.$f7.alert('Please enter a search term', 'Search Error');
          return;
        }
        this.$f7.mainView.router.loadPage(`/results/${filter}/${limit}/${q}`);
      },
    },
    computed: {
      searchFormId() {
        // Oddities with the F7 router mean this page could be loaded twice
        // (once for the root and another time if on the /search/ route)
        // This makes sure this form's id is always unique
        return `search-form-${Date.now()}`;
      },
    },
  };
</script>
