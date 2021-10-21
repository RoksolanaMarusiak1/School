import { getDatabase, ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default {
    actions: {
        async addPost({ dispatch, commit }, { title, content, postImage, date }) {
            const db = getDatabase();
            try {
                set(ref(db, 'posts/' + uuidv4()), {
                    title,
                    content,
                    postImage,
                    date
                });
            }
            catch (e) {
                throw e
            }
        },
        async fetchPosts({ }) {
            try {
                const dbRef = ref(getDatabase());
                return get(child(dbRef, `posts/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const teachers = snapshot.val()
                        return Object.keys(teachers).map(key => ({ ...teachers[key], id: key }))
                    } else {
                    }
                }).catch((error) => {
                    console.error(error);
                });
            } catch (e) {
                throw e
            }
        },
        async getPostById({ dispatch, commit }, postId) {
            const dbRef = ref(getDatabase());
            return get(child(dbRef, `posts/${postId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    return snapshot.val();
                } else {
                    return null;
                }
            }).catch((error) => {

            });

        }
    }
}
