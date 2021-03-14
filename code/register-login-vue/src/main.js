import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import firebase from 'firebase/app'
import router from './router'
import store from './store'
require('@/assets/main.scss');

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.VUE_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.VUE_APP_FIREBASE_MEASUREMENT_ID}`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

