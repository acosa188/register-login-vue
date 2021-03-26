import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: "",
    token: ""
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },
    setUid(state, id){
      state.uid = id;
    }
  },
  actions: {
    assignToken({commit}, token){
      commit("setToken", token);
    },
    assignUserId({commit}, uid){
      commit("setUid", uid);
    },
    default({commit}){
      commit("setUid", "");
      commit("setToken", "");
    }
  },
  modules: {
  }
})
