<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Новий запис</span>
      <div class="input-field">
        <v-text-field
          label="Заголовок"
          hide-details="auto"
          color="teal"
          type="text"
          v-model="title"
          shaped
          filled
        />
      </div>
      <div>
        <v-textarea
          filled
          auto-grow
          label="Текст"
          rows="4"
          row-height="30"
          color="teal"
          shaped
          v-model="content"
        ></v-textarea>
      </div>
      <div>
        <v-file-input
          v-model="file"
          shaped
          filled
          color="teal"
          type="file"
          @change="onImageChange"
        />
      </div>
      <div class="card-action">
        <v-btn type="submit" color="teal" dark>
          Додати <v-icon color="#fff"> mdi-send</v-icon>
        </v-btn>
        <v-tooltip class="tooltip" bottom v-model="show">
          <span>Запис було додано</span>
        </v-tooltip>
      </div>
    </div>
  </form>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
export default {
  data: () => ({
    title: "",
    content: "",
    postImage: "",
    date: 1580558031264,
    show: false,
    file: null,
  }),
  created() {
    this.intervalId = setInterval(() => (this.date = Date.now()), 1000);
  },

  methods: {
    async submitHandler() {
      const newDate = new Date(this.date).toLocaleDateString();
      const formData = {
        title: this.title,
        content: this.content,
        postImage: this.postImage,
        date: newDate,
      };
      try {
        await this.$store.dispatch("addPost", formData);
        this.title = "";
        this.content = "";
        this.file = null;
        this.$v.$reset();
      } catch (e) {}
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 2000);
    },
    onImageChange(file) {
      const storage = getStorage();
      const storageRef = ref(storage, "images/posts/" + uuidv4());
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath)).then((url) => {
          this.postImage = url;
        });
      });
    },
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.input-field {
  margin: 25px 0px 25px 0px;
}
</style>
