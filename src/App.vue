<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import 'vue-toast-notification/dist/theme-sugar.css'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import './assets/styles/main.scss';
</style>