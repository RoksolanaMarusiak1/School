<template>
  <div class="post">
    <v-card class="mx-auto" max-width="900" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            <div @click="$router.push(`/post/${post.id}`)">
              {{ post.title }}
            </div>
          </v-list-item-title>
          <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
          <v-card-text>{{
            post.content.substring(0, maxlength) + "..."
          }}</v-card-text>
        </v-list-item-content>

        <v-list-item-avatar
          v-show="imageUploaded(post.postImage)"
          tile
          width="400"
          height="200"
          color="grey"
        >
          <img :src="post.postImage" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>
    
<script>
export default {
  props: ["post", "maxlength"],
  methods: {
    imageUploaded(src) {
      return src ? 1 : 0;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.post {
  margin: 20px;
  display: block;
}
</style>