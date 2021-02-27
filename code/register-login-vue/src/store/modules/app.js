const state = () => ({
    loading: false
})

const getters = {}

const actions = {
    changeLoading({commit}, bool) {
        commit('setLoading', bool)
    }
}

const mutations = {
    setLoading(state, bool){
        state.loading = bool;
    }
}

export default{
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}