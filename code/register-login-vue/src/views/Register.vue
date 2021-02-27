<template>
  <div class="container">
    <div class="header-label mb-5 mr-5 pt-5 pr-5">Create Account</div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <input-vue class="mb-5" name="full name" v-model="name" type="text" />
      <input-vue class="mb-5" name="email" v-model="email" type="text" />
      <input-vue
        class="mb-5"
        name="password"
        v-model="password"
        type="password"
      />
      <div class="d-flex justify-content-between align-items-center pt-3 mb-5">
        <div class="page-label">Sign up</div>
        <button-vue>
          <b-icon icon="arrow-right" variant="light" class="h3" />
        </button-vue>
      </div>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <router-link class="link pt-5" to="/login">Sign in</router-link>
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
      name: "",
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
        this.changeLoading(true);
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.changeLoading(false);
        this.$router.replace({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions('app',['changeLoading'])
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}

.h3 {
  margin: 0;
}

.header-label {
  font-size: 2.5rem;
  color: #f5f5f5;
}

.page-label {
  font-size: 1.625rem;
  color: #f5f5f5;
}

.link {
  text-decoration: underline;
  color: #f5f5f5;
}
</style>