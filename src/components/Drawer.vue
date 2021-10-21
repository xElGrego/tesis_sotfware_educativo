<template>
  <nav>
    <v-navigation-drawer
      permanent
      absolute
      :expand-on-hover="true"
      v-model="drawer"
      class="grey darken-2"
      dark
    >
      <v-list nav color="grey darken-2">
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Presentación</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/unidad_1">
          <v-list-item-icon>
            <v-icon>mdi-dialpad</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Unidad 1</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/unidad_2">
          <v-list-item-icon> <v-icon> mdi-dialpad</v-icon> </v-list-item-icon>
          <v-list-item-title>Unidad 2</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/unidad_3">
          <v-list-item-icon> <v-icon>mdi-dialpad</v-icon> </v-list-item-icon>
          <v-list-item-title>Unidad 3</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/unidad_4">
          <v-list-item-icon> <v-icon>mdi-blur</v-icon> </v-list-item-icon>
          <v-list-item-title>Covid</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
    };
  },
};
</script>
