import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase } from "firebase/database"
import store from './store'
import messagePlugin from './utils/message.plugin'
import Loader from '@/components/app/Loader'

Vue.use(Vuetify)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyD_U8IZASGHto4c_hzGE0-Cn8oM47ji6_k",
  authDomain: "eeee-6e8a3.firebaseapp.com",
  projectId: "eeee-6e8a3",
  storageBucket: "eeee-6e8a3.appspot.com",
  messagingSenderId: "187418562194",
  appId: "1:187418562194:web:26458994950c77c0d0e04b",
  measurementId: "G-HPK8MYQR6D"
}

const app = initializeApp(firebaseConfig);
Vue.prototype.$firebaseApp = app;
const db = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, () => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    vuetify: new Vuetify(),
  })
});
