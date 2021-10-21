<template>
  <div>
    <div class="container">
      <div class="post">
        <div class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-meta">
            <time>{{ post.date }}</time>
          </div>
        </div>
        <div class="post-image">
          <img :src="post.postImage" />
        </div>
        <div class="post-content">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    post: [],
  }),
  async mounted() {
    this.post = await this.$store.dispatch(
      "getPostById",
      this.$route.params.id
    );
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 50px auto;
  padding: 0 15px;
  background: white;
}
.post-image {
  margin: 20px 0;
  padding: 30px 0;
  position: relative;
}

.post-image img {
  width: 100%;
}
.post h1 {
  color: #222;
  font-weight: 500;
  margin-bottom: 15px;
}
.post-meta {
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;
}
time,
.author {
  padding-right: 26px;
  position: relative;
}
time:after,
.author:after {
  content: "";
  background: #dddddf;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%) rotate(45deg);
}
p {
  line-height: 1.5;
  margin-bottom: 1em;
  text-align: justify;
}
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
  .container {
    padding: 0 45px;
  }
  .post-image,
  .post h1 {
    text-align: center;
  }
  .post-image img {
    width: 70%;
  }
}
</style>
