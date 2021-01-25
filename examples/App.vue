<template>
  <div id="app" ref="scrollBox">
    <main-header />
    <div class="main-cnt">
      <side-nav class="nav" />
      <div class="page-container">
        <router-view />
        <main-footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style lang="stylus">
#app {
  width: 100%;
  min-height: 100vh;
}
.main-cnt {
  padding-top: 80px;
  width: 100%;
  height: 100%;
  .page-container {
    box-sizing: border-box;
    margin-left: 260px;
    background: #fff;
  }
}
</style>
