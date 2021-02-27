<template>
  <div class="login-vue container">
    <div class="header-label mb-5 mr-5 pt-5 pr-5 ">Welcome Back</div>
    <form @submit.prevent="pressed" class="pt-5">
      <div class="mb-5">
        <input-vue name="email" v-model="email" type="text"/>
      </div>
      <div class="mb-5">
        <input-vue name="password" v-model="password" type="password"/>
      </div>
      
      <div class="d-flex justify-content-between align-items-center pt-3 mb-5">
        <div class="page-label">Sign in</div>
        <button-vue>
          <b-icon icon="arrow-right" variant="light" class="h3" />
        </button-vue>
      </div>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <router-link class="link pt-5" to="/register">Sign up</router-link>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import InputVue from "../components/Input.vue";
import ButtonVue from "../components/Button.vue";
import { BIcon } from "bootstrap-vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  components: {
    InputVue,
    ButtonVue,
    BIcon,
  },
  methods: {
    async pressed() {
      try {
        this.changeLoading(true)
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "home" });
        this.changeLoading(false)
      } catch (err) {
        err.message = err;
        console.log(err);
      }
    },
    ...mapActions('app',['changeLoading'])
  },
};
</script>

<style lang="scss" scoped>
.login-vue{
  height: 100%;
}
.error {
  color: red;
  font-size: 18px;
}

.h3 {
  margin: 0;
}

.header-label{
  font-size: 2.5rem;
  color: #F5F5F5;
}

.page-label{
  font-size: 1.625rem;
  color: #F5F5F5;
}

.link{
  text-decoration: underline;
  color: #F5F5F5;
}

</style>