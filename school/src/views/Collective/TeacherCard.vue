<template>
  <div class="card">
    <v-skeleton-loader>
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="teacher.profileImage" />
      </div>
    </v-skeleton-loader>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4"
        >{{ teacher.surname }} {{ teacher.name
        }}<v-icon class="icon"> mdi-more</v-icon></span
      >
      <p>{{ teacher.position }}</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"
        >{{ teacher.surname }} {{ teacher.name }} {{ teacher.patronym
        }}<v-icon class="icon"> mdi-close</v-icon></span
      >
      <span><b>Педагогічний стаж:</b> {{ teacher.experience }} р.</span>
      <span><b>Звання:</b> {{ teacher.rank }}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: ["teacher"],
};
</script>

<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
.icon {
  float: right;
}

img {
  width: 400px;
  height: 350px;
}
.card-title {
  font-size: 18px !important;
}
.card-content p {
  font-size: 17px;
}

.card-content span {
  font-size: 18px;
}
.card {
  width: 21%;
  height: 20%;
  text-align: left;
  float: left;
  margin: 16px;
  display: grid;
  margin-bottom: 40px;
  margin-left: 37px;
  position: relative;
}
.card-reveal b {
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
}

.card-reveal span {
  margin: 10px 0px 20px 0px;
  font-size: 16px;
}
</style>

