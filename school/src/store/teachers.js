import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default {
    actions: {
        async addTeacher({ dispatch, commit }, { surname, name, patronym, experience, position, profileImage, rank }) {
            const db = getDatabase();
            try {
                set(ref(db, 'teachers/' + uuidv4()), {
                    surname,
                    name,
                    patronym,
                    experience,
                    position,
                    profileImage,
                    rank
                });
            }
            catch (e) {
                throw e
            }
        },
        async fetchTeachers({ commit, dispatch }) {
            try {
                const dbRef = ref(getDatabase());
                return get(child(dbRef, `teachers/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const teachers = snapshot.val()
                        return Object.keys(teachers).map(key => ({ ...teachers[key], id: key }))
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
            } catch (e) {
                throw e
            }
        },
    }
}
