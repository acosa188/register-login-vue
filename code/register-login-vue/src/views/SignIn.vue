<template>
  <div class="signin">
    <div class="box">
      <div class="app-inner-wrapper">
        <form @submit.prevent="submitHandler">
          <div
            class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          >
            <h1 class="title" :style="{ width: '80%', textAlign: 'left' }">
              Ready to work? Let's go at it.
            </h1>
            <user-input-text-field
              v-model="email"
              class="mb-5"
              label="Email"
              height="50px"
              width="80%"
              type="email"
              :error="error"
            />
            <user-input-text-field
              v-model="password"
              class="mb-5"
              label="Password"
              height="50px"
              width="80%"
              type="password"
              :error="error"
            />
            <user-button
              label="Sign In"
              width="80%"
              height="50px"
              :btn_state="btnState"
            ></user-button>
          </div>
        </form>

        <div class="is-flex is-flex-direction-row mt-5">
          <h2 class="title is-5"><span>Need an account?</span></h2>
        </div>
        <h5 class="is-7">Join us and <router-link to="/signup">sign up</router-link> now</h5>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import UserInputTextField from "../components/UserInputTextField.vue";
import UserButton from "../components/UserButton.vue";
export default {
  components: {
    UserInputTextField,
    UserButton,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      btnState: ""
    };
  },
  methods: {
    async submitHandler() {
      try{
        this.error = false
        this.btnState = "loading"
        await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        this.btnState = "success"
        setTimeout(()=>{
          this.$router.replace({name:"home"})
        },300) 
        
      }
      catch(e){
        console.log(e)
        this.error = true
        this.btnState = "error"
      }
    },
  },
};
</script>

<style scoped>
.signin {
  width: 100%;
}
h2 {
  width: 100%;
  text-align: center;
  border-bottom: 2px solid rgba(90, 89, 89, 0.61);
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
}
</style>