<template>
  <div class="signup">
    <div class="box">
      <div class="app-inner-wrapper">
        <form @submit.prevent="submitHandler">
          <div
            class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          >
            <h1 class="title" :style="{ width: '80%', textAlign: 'left' }">
              With a few steps, you can be one of us.
            </h1>
            <user-input-text-field
              v-model="name"
              class="mb-5"
              label="Name"
              height="50px"
              width="80%"
              type="text"
              :error="error"
              :required="true"
            />
            <user-input-text-field
              v-model="email"
              class="mb-5"
              label="Email"
              height="50px"
              width="80%"
              type="email"
              :error="error"
              :required="true"
            />
            <user-input-text-field
              v-model="password"
              class="mb-5"
              label="Password"
              height="50px"
              width="80%"
              type="password"
              :error="error"
              :required="true"
            />
            <user-input-text-field
              v-model="confirm_password"
              class="mb-5"
              label="Confirm Password"
              height="50px"
              width="80%"
              type="password"
              :error="confirmPasswordError"
              :required="true"
            />
            <user-button
              label="Sign Up"
              width="80%"
              height="50px"
              :btn_state="btnState"
              :signUp="true"
            ></user-button>
          </div>
        </form>

        <div class="is-flex is-flex-direction-row mt-5">
          <h2 class="title is-5"><span>Already have an account?</span></h2>
        </div>
        <h5 class="is-7">Be productive and <router-link to="/signin">sign in</router-link> now</h5>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import UserInputTextField from "../components/UserInputTextField.vue";
import UserButton from "../components/UserButton.vue";
const axios = require("axios").default;

export default {
  components: {
    UserInputTextField,
    UserButton,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      error: false,
      btnState: "",
      confirmPasswordError: false
    };
  },
  methods: {
    async submitHandler() {
      try{
        this.error = false
        this.btnState = "loading"
        if(this.password !== this.confirm_password){
          this.confirmPasswordError = true
          throw Error("Password does not match")
        }

        // Creating user in firebase
        await firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)

        // Creating user in arjuan-auth
        await axios.post("https://arjuan-auth.herokuapp.com/api/user/register", 
        {
          name: this.name,
          email: this.email,
          password: this.password
        });

        // Loging in to arjuan-auth to get token
        const { data } = await axios.post("https://arjuan-auth.herokuapp.com/api/user/login", 
        {
          email: this.email,
          password: this.password
        });

        // Storing to state and local caching
        localStorage.uid = data.uid;
        localStorage.token = data.token;
        this.$store.dispatch("assignUserId", data.uid);
        this.$store.dispatch("assignToken", data.token);

        this.btnState = "success"
        setTimeout(()=>{
          this.$router.replace({name: "home"})
        },300)
      }catch(e){
        console.log(e)
        if(!this.confirmPasswordError)
          this.error = true
        else{
          setTimeout(()=>{
            this.confirmPasswordError = false
          },1000)
        }
        this.btnState = "error"
      }
    },
  },
};
</script>

<style scoped>
.signup {
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