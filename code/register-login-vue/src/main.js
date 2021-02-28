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
  apiKey: `${process.env.VUE_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.VUE_APP_FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.VUE_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.VUE_APP_FIREBASE_APPID}`,
  measurementId: `${process.env.VUE_APP_FIREBASE_MEASUREMENTID}`
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


