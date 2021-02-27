<template>
  <div id="app">
    <background-vue>
      <div v-if="loading">
        <loading-vue></loading-vue>
      </div>
      <div v-else>
        <router-view />
      </div>
    </background-vue>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BackgroundVue from "./components/Background.vue";
import LoadingVue from "./views/Loading.vue";
export default {
  components: {
    BackgroundVue,
    LoadingVue,
  },
  computed: mapState({
    loading: (state) => state.app.loading,
  }),
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
