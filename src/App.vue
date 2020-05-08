<template>
  <div id="app" class="d-flex flex-column" style="height: 100%;">
    <Navbar />
    <router-view></router-view>
    <Footer class="mt-auto" />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap';
</style>
