<template>
  <div class="home">
    <div class="container">
      <div class="box">
        <transition appear name="fade">
          <h1 class="title">Hello, {{username}}</h1>
        </transition>
        <transition appear name="slide-fade">
          <h3>You still have tons of work to do.</h3>
        </transition>
        <div class="is-flex is-flex-direction-row">
        <h2 class="title is-5"><span>Getting tired?</span></h2>
        </div>
        <h5 class="subtitle is-7">Simply <a @click="signOutHandler">sign out</a></h5>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
import "firebase/auth";
const axios = require("axios").default;

export default {
  name: 'Home',
  data(){
    return{
      username: ""
    }
  },
  methods:{
    async signOutHandler(){
      try{
        await firebase.auth().signOut()
        // Delete the token
        localStorage.token = "";
        localStorage.uid = "";

        this.$store.dispatch("default")
        this.$router.replace({name:"signin"})
      }catch(e){
        console.log(e)
      }
    }
  },
  async mounted(){
    const { data } = await axios.get(`https://arjuan-auth.herokuapp.com/api/user/${this.$store.state.uid || localStorage.uid}`,
    {
      headers:{
        "auth-token":this.$store.state.token || localStorage.token
      }
    });
    this.username = data;
  }
}
</script>

<style scoped>
.home{
  width: 100%;
}
h3{
  margin-bottom: 100px;
}
h2 {
   width: 100%; 
   text-align: center; 
   border-bottom: 2px solid rgba(90, 89, 89, 0.61); 
   line-height: 0.1em;
   margin: 10px 0 20px; 
} 

h2 span { 
    background:#fff; 
    padding:0 10px; 
}

/* Transitions */

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}

</style>
