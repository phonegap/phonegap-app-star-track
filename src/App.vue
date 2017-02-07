<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar />

    <!-- Left Panel -->
    <left-panel />

    <!-- Main Views -->
    <f7-views theme="green">
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar v-if="isiOS">
          <f7-nav-left>
            <f7-link icon="fa fa-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center>
            Search
          </f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <!-- pages from the routes will go here...replacing `main-page` -->
          <search-page />
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  /* global isiOS */
  import Search from './components/pages/Search';
  import LeftPanel from './components/LeftPanel';

  export default {
    name: 'App',
    components: {
      'search-page': Search,
      'left-panel': LeftPanel,
    },
    data() {
      return {
        isiOS,
      };
    },
  };
</script>
