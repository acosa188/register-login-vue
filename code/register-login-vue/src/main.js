import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import firebase from 'firebase/app'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap on BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACotxtQVYpcCbGnjp-mWdcqHpK78RuZ08",
  authDomain: "test-auth-80908.firebaseapp.com",
  projectId: "test-auth-80908",
  storageBucket: "test-auth-80908.appspot.com",
  messagingSenderId: "603601613841",
  appId: "1:603601613841:web:9c698ab03b686185a06db0",
  measurementId: "G-SZQKW6Q86H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


