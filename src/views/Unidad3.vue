<template>
  <div class="unidad2">
    <div justify="center" class="mb-10">
      <h1>Continentes</h1>
    </div>
    <v-container>
      <v-row>
        <v-col sm="4" v-for="tema in temas" :key="tema.id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="tema.imagen" height="200px"></v-img>

            <v-card-title>
              {{ tema.titulo }}
            </v-card-title>

            <v-card-actions>
              <v-btn :to="tema.url" color="orange lighten-2" text
                >> Ver más
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="tema.show = !tema.show">
                <v-icon>{{
                  tema.show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="tema.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ tema.mini_concepto }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    temas: [
      {
        titulo: "Africa",
        url: "/africa",
        show: false,
        imagen:
          "https://www.cvongd.org/wp-content/uploads/2020/09/image-6092-1300x700.jpg",
        mini_concepto:
          "El relieve africano se caracteriza fundamentalmente por la presencia de altiplanos que ocupan buena parte de su extensión.",
      },
      {
        titulo: "Europa",
        url: "/europa",
        show: false,
        imagen:
          "https://okdiario.com/img/2016/12/27/europa-datos-no-sabias-bc-620x349.jpg",
        mini_concepto:
          "El relieve del continente europeo es predominantemente llano y tiene una altitud media baja de solo 340 m.",
      },

      {
        titulo: "Comunicación social",
        url: "/comunicacion",
        show: false,
        imagen:
          "https://image.freepik.com/vector-gratis/medios-comunicacion-social_24908-12561.jpg",
        mini_concepto:
          "Los mensajes que se transmiten contienen juicios de valor que se sustentan en concepciones ideológicas, morales, políticas o religiosas.",
      },
    ],
  }),
};
</script>
