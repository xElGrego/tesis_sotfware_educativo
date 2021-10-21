<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        Africa
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
          </v-col>

          <v-col md="6" cols="12">
            <p class="text-justify">
              El relieve africano se caracteriza fundamentalmente por la
              presencia de altiplanos que ocupan buena parte de su extensión,
              surcados de cubetas o zonas hundidas y rellenadas por sedimentos,
              y fosas o hundimientos provocados por la fractura del terreno. La
              cubeta del Congo, que está situada en la parte occidental de la
              zona ecuatorial del continente. Costas e islas La costa es
              fundamentalmente poco recortada, y la llanura litoral que se
              extiende entre los océanos y los altiplanos es muy estrecha.
              Destacan algunos accidentes como el golfo de Guinea, en el
              Atlántico, la península de Somalia, en el Índico, y el cabo de
              Buena Esperanza, que es el punto más meridional del continente.
              Entre las islas, sobresalen Madagascar, Zanzíbar, las islas
              Mauricio y Reunión, y los archipiélagos de las Comores y las
              Seychelles, en el océano Índico. En el océano Atlántico se
              encuentran la isla de Madeira, las islas Canarias y el
              archipiélago de Cabo Verde. Las principales unidades del relieve
              africano son:
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=vJyEWUAO7JM"
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
            <v-btn
              class="ma-2"
              color="secondary"
              target="_blank"
              href="https://es.educaplay.com/recursos-educativos/10596923-africa.html"
            >
              Actividad
            </v-btn>
          </v-col>

          <v-row>
            <v-col md="6">
              <v-card height="160">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      El altiplano septentrional, en el que se encuentran el
                      gran desierto del Sahara y las cubetas del lago Chad y de
                      los ríos Nilo y Níger. Al noroeste se halla la cordillera
                      del Atlas, formada por montañas jóvenes que superan los
                      4000 m.
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card height="160">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >El altiplano sudoriental, en el que se halla la fosa
                        tectónica más grande del mundo: el valle del Rift. Es un
                        valle estrecho y muy profundo, de más de 4000 km de
                        extensión, que forma parte de la región de los Grandes
                        Lagos. En la zona del valle del Rift se localizan las
                        cimas más elevadas del continente, de origen volcánico,
                        como es el caso del Kilimanjaro (5895 m).</span
                      >
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card height="120">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >El altiplano meridional, en el que se localizan los
                        desiertos de Namibia y del Kalahari, y las montañas
                        Drakensberg.</span
                      >
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card height="120">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >Hacia el año 7000 a. C., elaboraron ladrillos
                        rudimentarios, y hacia el siglo IV a. C., les dieron
                        consistencia de cerámica</span
                      >
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
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
            "https://www.portafolio.co/files/article_multimedia/files/crop/uploads/2019/08/30/5d69a63fa2a73.r_1567214627501.274-0-1209-703.jpeg",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Africa_on_the_globe_%28red%29.svg/1200px-Africa_on_the_globe_%28red%29.svg.png",
        },

        {
          src:
            "https://www.mundoprimaria.com/wp-content/uploads/2021/08/africa-mapa-politico.jpg",
        },
      ],
    };
  },
};
</script>
