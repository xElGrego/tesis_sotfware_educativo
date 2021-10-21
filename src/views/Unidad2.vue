<template>
  <div class="unidad2">
    <div justify="center" class="mb-10">
      <h1>Edad Media y feudalismo</h1>
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
        titulo: "La edad media",
        url: "/edad_media",
        show: false,
        imagen:
          "https://i.pinimg.com/originals/61/1a/88/611a88b5879ba85cba0e75b6e2633de7.jpg",
        mini_concepto:
          "La ocupación de Roma por parte de una tribu germánica (476 d. C.) es es el suceso que marca el inicio de la Edad Media en Europa.",
      },
      {
        titulo: "Los reinos germánicos",
        url: "/reinos_germanicos",
        show: false,
        imagen:
          "https://elcorreodeespana.com/images/carpeta_relacionados/2020/10/08/35069_1375892902330.jpg",
        mini_concepto:
          "La caída de Roma es un hecho significativo que marca la historia europea. Con ella termina la Edad Antigua e inicia la Edad Media.",
      },
      {
        titulo: "El feudalismo",
        url: "/feudalismo",
        show: false,
        imagen:
          "https://enciclopedia-joskat.webnode.es/_files/system_preview_detail_200000439-a6f5ba7ec6/A_070_Fair.jpg",
        mini_concepto:
          "El feudalismo fue el sistema económico político y social que caracterizó a gran parte de la Edad Media.",
      },
      {
        titulo: "Feudo",
        url: "/feudo",
        show: false,
        imagen:
          "https://concepto.de/wp-content/uploads/2015/04/feudalismo-min-e1504896645566.jpg",
        mini_concepto:
          "El feudalismo fue el sistema económico político y social que caracterizó a gran parte de la Edad Media.",
      },

      {
        titulo: "El Islam y Occidente",
        url: "/islam",
        show: false,
        imagen:
          "https://imagenes.elpais.com/resizer/FEWyz0wKklx-PKZZOjEHohHohqE=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/XTCOG5LFKF3FVAR7IWKIHS3FU4.jpg",
        mini_concepto:
          "La ocupación de Roma por parte de una tribu germánica (476 d. C.) es es el suceso que marca el inicio de la Edad Media en Europa",
      },
    ],
  }),
};
</script>
