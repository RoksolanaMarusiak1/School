<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Додати вчителя</span>
      <div class="input-field">
        <v-text-field
          label="Прізвище"
          hide-details="auto"
          color="teal"
          type="text"
          v-model.trim="surname"
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="Ім'я"
          hide-details="auto"
          color="teal"
          type="text"
          v-model.trim="name"
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="По Батькові"
          hide-details="auto"
          color="teal"
          type="text"
          v-model.trim="patronym"
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="Педагогічний стаж"
          hide-details="auto"
          color="teal"
          type="number"
          v-model="experience"
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="Посада"
          hide-details="auto"
          color="teal"
          type="text"
          v-model="position"
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="Звання"
          hide-details="auto"
          color="teal"
          type="text"
          v-model="rank"
        />
      </div>
      <div>
        <v-file-input color="teal" type="file" @change="onImageChange" />
      </div>
      <div class="card-action">
        <v-btn type="submit" color="teal" dark>
          Додати <v-icon color="#fff"> mdi-send</v-icon>
        </v-btn>
        <v-tooltip class="tooltip" bottom v-model="show">
          <span>Вчителя було додано</span>
        </v-tooltip>
      </div>
    </div>
  </form>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "addNewTeacher",
  data: () => ({
    surname: "",
    name: "",
    patronym: "",
    experience: 0,
    position: "",
    profileImage: "",
    rank: "",
    show: false,
  }),
  methods: {
    async submitHandler() {
      const formData = {
        surname: this.surname,
        name: this.name,
        patronym: this.patronym,
        experience: this.experience,
        position: this.position,
        profileImage: this.profileImage,
        rank: this.rank,
      };
      try {
        await this.$store.dispatch("addTeacher", formData);
        this.surname = "";
        this.name = "";
        this.patronym = "";
        this.experience = 0;
        this.position = "";
        this.rank = "";
        this.$v.$reset();
      } catch (e) {}
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 1000);
    },
    onImageChange(file) {
      const storage = getStorage();
      const storageRef = ref(storage, "images/teachers/" + uuidv4());
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath)).then((url) => {
          this.profileImage = url;
        });
      });
    },
  },
};
</script>

<style scoped>
.input-field {
  margin: 25px 0px 25px 0px;
}
</style>