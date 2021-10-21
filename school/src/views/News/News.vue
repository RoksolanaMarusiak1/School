<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <v-select
        v-model="selectedSort"
        color="teal darken-1"
        class="select"
        :item-text="sortOptions.name"
        :items="sortOptions"
        label="Сортувати..."
        outlined
        shaped
      ></v-select>
      <div class="input-field">
        <v-text-field
          label="Пошук записів..."
          hide-details="auto"
          color="teal"
          type="text"
          v-model="searchQuery"
          shaped
          outlined
        />
      </div>
      <v-btn
        class="new-post"
        to="addpost"
        color="teal"
        v-if="isAuth"
        x-large
        outlined
        >Новий запис</v-btn
      >
      <v-pagination
        v-show="sortedAndSearchedPosrs.length > 0"
        v-model="page"
        :length="totalPages"
        :total-visible="7"
        circle
        color="teal"
      ></v-pagination>
      <transition-group v-if="searchQuery" name="post-list">
        <div v-for="post in sortedAndSearchedPosrs" :key="post.id">
          <Post :post="post" :maxlength="maxlength" />
        </div>
      </transition-group>
      <transition-group v-else name="post-list">
        <div v-for="post in paginatedData" :key="post.id">
          <Post :post="post" :maxlength="maxlength" />
        </div>
      </transition-group>
      <v-pagination
        v-if="sortedAndSearchedPosrs.length > 0"
        v-model="page"
        :length="totalPages"
        :total-visible="7"
        circle
        color="teal"
      ></v-pagination>
      <div class="no-result" v-else>
        <span
          >За даним запитом результатів немає. Спробуйте ввести назву ще
          раз.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  data: () => ({
    posts: [],
    loading: true,
    maxlength: 350,
    items: ["За датою", "За заголовком"],
    selectedSort: "date",
    sortOptions: [
      { value: "date", text: "За датою" },
      { value: "title", text: "За заголовком" },
    ],
    searchQuery: "",
    page: 1,
    limit: 4,
    totalPages: 0,
    loading: false,
  }),
  components: { Post },
  async mounted() {
    this.loading = true;
    this.posts = await this.$store.dispatch("fetchPosts");
    this.totalPages = Math.ceil(this.posts.length / this.limit);
    this.loading = false;
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        if (this.selectedSort == "date") {
          var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
          var p1 = new Date(
            post1[this.selectedSort].replace(pattern, "$3-$2-$1")
          );
          var p2 = new Date(
            post2[this.selectedSort].replace(pattern, "$3-$2-$1")
          );
          if (Date.parse(p1)- Date.parse(p2) > 0)
            return -1;
          else return 1;
        }

        if (post1[this.selectedSort] < post2[this.selectedSort]) return -1;
        if (post1[this.selectedSort] > post2[this.selectedSort]) return 1;
        return 0;
      });
    },
    sortedAndSearchedPosrs() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedData() {
      const start = (this.page - 1) * this.limit,
        end = start + this.limit;
      return this.sortedAndSearchedPosrs.slice(start, end);
    },
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
.new-post {
  text-decoration: none;
}
.no-result {
  bottom: 60%;
  left: 30%;
  position: absolute;
  text-align: center;
  font-size: 20px;
}

.select {
  width: 30%;
  display: block;
  float: left;
  margin-right: 40px;
}

.input-field {
  width: 30%;
  display: block;
  float: left;
  margin-right: 40px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.user-list-leave-active {
  transition: all 1s ease;
}

.post-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>