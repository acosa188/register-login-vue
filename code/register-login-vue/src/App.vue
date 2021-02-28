<template>
  <div id="app">
    <background-vue>
      <div v-if="loading">
        <div class="row">
          <div class="col-12 col-md-6">
            <loading-vue></loading-vue>
          </div>
          <div class="col-md-8">
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-sm pt-md-5 pl-md-5">
            <router-view />
          </div>
          
          <div class="col-md-8">
            <div class="picture-area d-none d-lg-inline-block"></div>
          </div>
        </div>   
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
  overflow: hidden;
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

.picture-area{
  height: 100vh;
  width: 100%;
  background-image: url('./assets/background_2.jpg');
  background-position: left;
  background-size: cover;
}
</style>
