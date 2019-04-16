<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './views/Home.vue'
import Register from './views/Register.vue'

export default {
  name: 'app',
  components: {
    Home,
    Register
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

html {
  color: #353535;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
}
</style>
