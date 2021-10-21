<template>
  <div>
    <LightGallery :images="photos" :index="index" @close="index = null" />
    <ul>
      <v-skeleton-loader class="gallery">
        <li
          v-for="(thumb, thumbIndex) in photos"
          :key="thumbIndex"
          @click="index = thumbIndex"
          class="thumb"
        >
          <img :src="thumb" />
        </li>
      </v-skeleton-loader>
    </ul>
  </div>
</template>


<script>
import { LightGallery } from "vue-light-gallery";
export default {
  data: () => ({
    photos: [{ src: "" }],
    index: null,
    loading: true,
  }),
  async mounted() {
    this.photos = await this.$store.dispatch("getPhotos");
    this.loading = false;
  },
  components: {
    LightGallery,
  },
  computed: {
    formatedPhotos() {
      return this.photos.map((photo, i) => {
        return {
          src: photo,
        };
      });
    },
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped>
@import "materialize-css/dist/css/materialize.min.css";

.gallery {
  display: block;
  margin-left: 5%;
}
ul:not {
  display: inline;
}
img {
  width: 375px;
  height: 270px;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
.thumb {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
.loader {
  margin: 0 auto;
  display: flex;
}
</style>