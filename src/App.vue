<template>
  <v-app>
    <drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import drawer from "./components/Drawer.vue";
export default {
  components: {
    drawer,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.v-main {
  margin-left: 3.5rem;
}

.v-main {
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("assets/fondo.jpg");
}
</style>
