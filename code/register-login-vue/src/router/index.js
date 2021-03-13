import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/Register.vue'
import firebase from "firebase/app"
import "firebase/auth"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{requiresAuth: true}
  },
  {
    path: '/signin',
    name:'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Default to go to login page

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser;

  if(requiresAuth && !isAuthenticated){
    next("/signin")
  }
  else{
    next()
  }

})


export default router
