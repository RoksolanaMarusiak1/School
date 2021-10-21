import { getStorage, ref, listAll, getDownloadURL, child } from "firebase/storage";

export default {
    actions: {
        async getPhotos() {
            let result = []
            const storage = getStorage();
            const listRef = ref(storage, 'images/photos');
            await listAll(listRef)
                .then((res) => {
                    res.items.forEach((item) => {
                        (getDownloadURL(ref(storage, item.fullPath)).then((url) => {
                            result.push(url)
                        }))
                    })
                })
            return result
        },
    }
}