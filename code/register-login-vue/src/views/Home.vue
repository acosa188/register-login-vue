<template>
  <div class="container">
    <div class="header-label mb-5 mr-5 pt-5 pr-5">Home</div>
    <div class="message-label pt-5 mb-5">"You are awesome"</div>
    <form @submit.prevent="pressed" class="pt-5">
      <div class="d-flex justify-content-between align-items-center">
        <div class="page-label">Sign out</div>
        <button-vue>
          <b-icon icon="box-arrow-right" variant="light" class="h3" />
        </button-vue>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import ButtonVue from "../components/Button.vue";
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    ButtonVue,
  },
  methods: {
    async pressed() {
        try{
            await firebase.auth().signOut()
            this.$router.replace({name:"login"})
        }catch(err){
            console.log(err)
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-label {
  font-size: 1.625rem;
  color: #8d8d8d;
}

.message-label {
  font-size: 2.5rem;
  color: #8d8d8d;
}

.page-label {
  font-size: 1.625rem;
  color: #8d8d8d;
}

.h3 {
  margin: 0;
}
</style>