<template>
  <div class="content">
    <h3>Розклад уроків на І семестр 2021/2022 навчального року 5-11 класи</h3>
    <div class="select">
      <v-col>
        <v-select
          v-model="selected"
          @change="onchange"
          :items="items"
          label="Оберіть клас"
          color="teal darken-1"
          outlined
          class="selectBlock"
        ></v-select>
      </v-col>
    </div>
    <v-simple-table v-if="this.changed == 1">
      <template v-slot:default>
        <thead>
          <tr class="headers">
            <th>Понеділок</th>
            <th>Вівторок</th>
            <th>Середа</th>
            <th>Четвер</th>
            <th>П'ятниця</th>
          </tr>
        </thead>
        <tbody>
          <th v-for="(week, index) in timetable" :key="index">
            <tr v-for="(day, index) in week" :key="index">
              {{
                index + 1
              }}.
              {{
                day
              }}
            </tr>
          </th>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import json from "../data/classes.json";
export default {
  data() {
    return {
      selected: "",
      timetable: "",
      items: ["5", "6", "7", "8", "9", "10", "11"],
      changed: 0,
    };
  },
  methods: {
    onchange() {
      this.changed = 1;
      for (var i = 0; i < json.timetable.length; i++) {
        if (this.selected == json.timetable[i].name) {
          this.timetable = json.timetable[i].week;
        }
      }
    },
  },
};
</script>

<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
.col {
  vertical-align: middle;
  align-items: center;
  text-align: center;
  width: 15%;
}

tr {
  font-size: 19px;
}

th {
  font-size: 1.6rem !important;
  padding-left: 20px;
  vertical-align: baseline;
}

tr th {
  vertical-align: middle;
  text-align: center;
}

h3 {
  text-align: center;
  margin: 25px 10px 25px 10px;
}
</style>