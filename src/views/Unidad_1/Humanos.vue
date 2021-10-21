<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        Los seres humanos en la antiguedad
      </h2>
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
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=WeVIhWd_eIk"
              class="mx-2 mt-5"
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

          <v-col md="6" cols="12">
            <v-card height="220" class="mb-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Europa</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >El continente europeo está situado en el hemisferio norte
                      y constituye una gran península en el extremo occidental
                      del continente asiático. Europa, con 10 396 421 km2 de
                      extensión, es el segundo continente más pequeño, después
                      de Oceanía</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
            <v-card height="220" class="mb-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">África</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >El continente africano tiene parte de su territorio en el
                      hemisferio norte y parte en el hemisferio sur. Posee una
                      extensión de 30 249 096 km2, de ahí que sea el tercer
                      continente más grande del mundo. La línea ecuatorial cruza
                      el continente africano aproximadamente por su mitad, por
                      lo que la mayor parte de su territorio se encuentra en la
                      zona tropical.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
            <v-card class="mb-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">América</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >El continente americano se extiende desde el océano
                      Glacial Ártico hasta el océano Glacial Antártico. Sus
                      costas este y oeste están bañadas, respectivamente, por el
                      Atlántico y el Pacífico. Su amplio territorio, de 42 217
                      063 km2, tiene una forma muy alargada que puede dividirse
                      en dos subcontinentes: América del Norte y América del
                      Sur, unidos por el istmo de América Central. También forma
                      parte de su territorio Groenlandia, la segunda isla más
                      grande del mundo después de Australia.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>

            <v-card class="mb-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Asia</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >Asia es un continente macizo en uno de cuyos extremos se
                      encuentra Europa, de la que está separada por las montañas
                      de los Urales y el Cáucaso. Es el continente más grande,
                      con 44 032 038 km2, y el más poblado. En su territorio se
                      encuentran grandes contrastes geográficos y paisajísticos.
                      Así, algunas zonas, como el Asia monzónica, son conocidas
                      por las lluvias torrenciales, mientras que otras, como la
                      península arábiga, destacan por ser zonas
                      desérticas.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
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
            "https://www.nationalgeographic.com.es/medio/2019/08/26/las-medulas-leon_161aa953_1280x879.jpg",
        },
        {
          src:
            "https://i2.wp.com/afcarmedia.com/wp-content/uploads/2018/03/egypt-1744581_1920.jpg?fit=1920%2C1101&ssl=1",
        },

        {
          src:
            "http://1.bp.blogspot.com/-iYbOl98SIw8/TaPK-j1VBgI/AAAAAAAAAF4/1YlLMooJI7E/s1600/danza-egipcia.jpg",
        },
      ],
    };
  },
};
</script>
