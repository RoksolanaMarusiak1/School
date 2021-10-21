<template>
  <nav class="nav-menu">
    <div>
      <div>
        <ul class="menu-main">
          <li><router-link to="/history">Про нас</router-link></li>
          <li><router-link to="/news">Новини</router-link></li>
          <li><router-link to="/collective">Колектив</router-link></li>
          <li><router-link to="/album">Фотоальбом</router-link></li>
          <li><router-link to="/timetable">Розклад уроків</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css";
export default {
  name: "Navbar",
  async mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
      hover: true,
      alignment: "center",
    });
  },
};
</script>
<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");

.nav-menu {
  height: 50px;
  position: relative;
  background: rgba(34, 34, 34, 0.2);
}

.menu-main {
  height: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-main:after {
  content: "";
  display: table;
  clear: both;
}

.menu-main a {
  height: 50px;
  text-decoration: none;
  display: block;
  padding: 0 60px;
  font-size: 16px;
  letter-spacing: 2px;
  font-family: "Fira Sans", sans-serif;
  font-weight: bold;
  color: white;
  transition: 0.3s linear;
}

.menu-main li a {
  display: flex;
  align-items: center;
}
.menu-main li a:hover {
  background: rgba(0, 0, 0, 0.3);
}

.dropdown-content li {
  text-align: left;
  align-items: left;
}

.dropdown-content a {
  color: white;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  font-weight: inherit;
}
</style>