<template>
  <v-app id="app">
    
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import EmptyLayout from "@/layout/EmptyLayout";
import MainLayout from "@/layout/MainLayout";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style>
@import "../src/assets/index.css";
</style>
