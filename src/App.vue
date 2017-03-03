<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar />

    <!-- Left Panel -->
    <left-panel />

    <!-- Main Views -->
    <f7-views theme="green">
      <f7-view id="main-view" url="/" :init="true" :dynamic-navbar="true" navbar-through main>
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
        <f7-pages />
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  /* global isiOS */
  import LeftPanel from './components/LeftPanel';

  export default {
    name: 'App',
    components: {
      'left-panel': LeftPanel,
    },
    data() {
      return {
        isiOS,
      };
    },
  };
</script>
