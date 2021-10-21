import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            const auth = getAuth();
            try {
                return await signInWithEmailAndPassword(auth, email, password)
            } catch (e) {
                commit('setError', e);
            }
        },
        async logout() {
            const auth = getAuth();
            try {
                await signOut(auth);
                commit('clearInfo')
            } catch (e) {
                throw e;
            }
        },
        async getUid() {
            const auth = getAuth();
            const user = auth.currentUser;
            let uid = null;
            if (user !== null) {
                uid = user.uid;
            }
            return uid;
        }
    }
}