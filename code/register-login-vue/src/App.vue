<template>
  <div id="app">
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div class="container">
        <div class="app-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: #f4f2f9;
}

#app > div {
  height: 100%;
}

.app-wrapper{
  padding: 0;
}

.app-inner-wrapper{
  padding: 0;
}

 /* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
  .app-wrapper{
    padding: 0 50px;
  }

  .app-inner-wrapper{
    padding: 0 50px;
  }
}

 /* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
  .app-wrapper{
    padding: 0 100px;
  }

  .app-inner-wrapper{
    padding: 0 80px;
  }
}

 /* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .app-wrapper{
    padding: 0 150px;
  }

  .app-inner-wrapper{
    padding: 0 100px;
  }
}

 /* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .app-wrapper{
    padding: 0 250px;
  }

  .app-inner-wrapper{
    padding: 0 200px;
  }
}
</style>
