<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap';
</style>
