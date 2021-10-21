import Vue from 'vue'
import Vuex from 'Vuex'
import teachers from './teachers'
import gallery from './gallery'
import post from './post'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(error) {
            state.error = null;
        },
    },
    getters: {
        error: s => s.error,
    },
    modules: {
        teachers, gallery, post, auth, info
    }
})