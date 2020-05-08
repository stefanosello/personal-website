<template>
  <div id="app" class="d-flex flex-column flex-md-row">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
</style>
