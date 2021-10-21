<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">РОСОХАЦЬКА ЗАГАЛЬНООСВІТНЯ ШКОЛА І-ІІІ СТ.</h5>
        </div>
        <div class="col l1 offset-l2 s12">
          <h5 class="white-text">Контакти</h5>
          <ul>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://facebook.com"
                target="_blank"
                ><v-icon color="#fff">mdi-facebook</v-icon> Facebook</a
              >
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://youtube.com"
                target="_blank"
                ><v-icon color="#fff">mdi-youtube</v-icon> Youtube</a
              >
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://telegram.com"
                target="_blank"
                ><v-icon color="#fff">mdi-telegram</v-icon> Telegram</a
              >
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://instagram.com"
                target="_blank"
                ><v-icon color="#fff">mdi-instagram</v-icon> Instagram</a
              >
            </li>
          </ul>
        </div>
        <div class="col l1 offset-l2 s12">
          <h5 class="white-text">Адреса</h5>
          <h6>
            Львівська область, Сколівський район, с. Росохач, вул. Шевченка, 102
          </h6>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2021
        <a class="grey-text text-lighten-4 right" href="#!">Детальніше</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
.page-footer {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #4d676a;
}
.offset-l2 {
  text-align: center;
}
ul {
  display: flex;
  column-gap: 20px;
}
h6 {
  text-align: left;
}
</style>

