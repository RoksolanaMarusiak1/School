<template>
  <div class="teachers">
    <v-btn to="/addteacher" color="teal" v-show="isAuth" x-large outlined
      >Додати вчителя</v-btn
    >
    <div v-for="teacher in teachers" :key="teacher.id">
      <TeacherCard :teacher="teacher" />
    </div>
  </div>
</template>

<script>
import TeacherCard from "./TeacherCard";
export default {
  data: () => ({
    teachers: [],
  }),
  async mounted() {
    this.teachers = await this.$store.dispatch("fetchTeachers");
  },
  components: {
    TeacherCard,
  },
  computed: {
    isAuth() {
      if (this.$store.getters.info) {
        return this.$store.getters.info.uid != null;
      }
      return false;
    },
  },
};
</script>

<style scoped>
@import "materialize-css/dist/css/materialize.min.css";

.teachers {
  margin: 0 auto;
}
</style>