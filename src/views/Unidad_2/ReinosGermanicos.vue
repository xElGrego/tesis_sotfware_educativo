<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Los Reinos Germánicos</h2>
      <v-container>
        <v-row>
          <v-col md="6" cols="12">
            <v-carousel hide-delimiter-background>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col md="6" cols="12">
            <p class="text-justify">
              La caída de Roma es un hecho significativo que marca la historia
              europea. Con ella termina la Edad Antigua e inicia la Edad Media.
              Los pueblos germánicos iniciaron un nuevo tipo de relaciones
              políticas, económicas y sociales basadas en el control de
              territorios más pequeños y gobernados por un rey apoyado en la
              fuerza de las armas y en una asamblea de nobles. Los reinos
              germánicos se constituyeron en una sociedad ruralizada, en la que
              el contacto con otras regiones era mínimo y el comercio, casi
              inexistente. Sin embargo, en la mayoría de reinos, se evidenció la
              influencia de la antigua Roma. Paulatinamente, los reinos
              germánicos adoptaron el cristianismo como religión oficial y el
              latín como la lengua culta.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=Sc3F4dgtR8E"
              class="mx-2"
              fab
              dark
              small
              color="primary"
            >
              <v-icon dark>
                mdi-youtube
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://ugc.kn3.net/i/760x/http://www.miniaturasjm.com/userdata/image/germanos_01.jpg",
        },
        {
          src:
            "https://www.profesorenlinea.cl/imagenUniversalH/germanosreinos007.jpg",
        },

        {
          src:
            "https://elcorreodeespana.com/images/carpeta_relacionados/2020/10/08/35069_1375892902330.jpg",
        },
      ],
    };
  },
};
</script>
