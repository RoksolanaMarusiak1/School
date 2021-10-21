<template>
  <v-card elevation="24" max-width="1600" class="mx-auto"
    ><v-carousel height="500" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-sheet>
          <v-row align="center" justify="center">
            <div class="text-h3">
              {{ item.caption }}
            </div>
          </v-row>
        </v-sheet></v-carousel-item
      >
    </v-carousel></v-card
  >
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://maximum.fm/uploads/media_news/2020/08/5f47855e8e7a6950052673.png?w=1200&h=675&il&q=65",
          caption: "З новим навчальним 2021-2022 роком!",
        },
        {
          src: "https://media.slovoidilo.ua/media/publications/9/86658/86658-1_large.jpg",
        },
        {
          src: "https://i.obozrevatel.com/2019/5/23/3340310710276879273937516209028632627642368n.jpg?size=1944x924",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-application .align-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  padding: 10px;
}
v-deep::app-content {
  padding: 0 !important;
  min-height: 700px;
}
</style>