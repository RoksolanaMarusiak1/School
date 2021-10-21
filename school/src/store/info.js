import { getAuth } from "firebase/auth";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info) {
            state.info = info;
        },
        clearInfo(state) {
            state.info = {}
        }
    },
    actions: {
        async fetchInfo({ dispatch, commit }) {
            try {
                const auth = getAuth();
                const info = auth.currentUser;
                commit('setInfo', info)
            } catch (e) {

            }
        }
    },
    getters: {
        info: s => s.info
    }
}