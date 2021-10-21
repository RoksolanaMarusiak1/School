<template>
  <div class="app-main-layout">
    <div class="header-container">
      <div class="header">
        <h2>
          <img src="../assets/logo.png" class="logo" />
          <router-link to="/home">
            <span>РОСОХАЦЬКА ЗАГАЛЬНООСВІТНЯ ШКОЛА І-ІІІ СТ.</span>
          </router-link>
          <v-btn
            v-if="isAuth"
            @click="login"
            fab
            dark
            class="btn1"
            large
            color="white"
          >
            <v-icon dark color="#4d676a"> mdi-location-enter </v-icon>
          </v-btn>
          <v-menu offset-y v-else>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                fab
                dark
                class="btn1"
                large
                color="white"
              >
                <v-icon dark color="#4d676a"> mdi-account </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                {{ name }}
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="logout">
                <span>Вийти</span> <v-icon>mdi-location-exit</v-icon>
              </v-list-item>
            </v-list>
          </v-menu>
        </h2>
      </div>

      <Navbar />
    </div>
    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
export default {
  data: () => ({
    uid: null,
  }),
  methods: {
    async logout() {
      try {
        this.$store.dispatch("logout");
      } catch (e) {
        throw e;
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
  components: {
    Navbar,
    Footer,
  },
  async mounted() {
    await this.$store.dispatch("fetchInfo");
    this.uid = await this.$store.dispatch("getUid");
  },
  computed: {
    isAuth() {
      return this.uid == null;
    },
    name() {
      return this.$store.getters.info.email;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Alumni+Sans");
.btn1 {
  display: block;
  float: right;
  right: 5%;
  margin-top: 2%;
}
.header {
  width: 100%;
  height: 100px;
  padding: 2px 30px;
}
.header h2 a {
  font-family: "Alumni Sans", sans-serif;
  color: whitesmoke;
  position: relative;
  top: -32px;
}

.logo {
  height: 100px;
  width: 100px;
  margin-top: 10px;
}

.header-container {
  background-image: url("https://sch463.msk.ru/wp-content/uploads/2018/11/bg3.jpg");
}

a {
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: #039be5;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

h2 {
  font-size: 3.56rem;
  line-height: 110%;
  font-weight: 400;
  line-height: 1.3;
}

@media (max-width: 1000px) {
h2 span {
  font-size: 2rem;
  line-height: 90%;
  font-weight: 400;
  line-height: 1.3;
}}
@media (max-width: 900px) {
h2 span {
  display: none;
}
}
</style>