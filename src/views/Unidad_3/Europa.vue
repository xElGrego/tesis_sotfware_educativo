<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        Europa
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
              Relieve El relieve del continente europeo es predominantemente
              llano y tiene una altitud media baja de solo 340 m. Las
              principales unidades de relieve europeas son: Las mesetas y los
              macizos antiguos: En el norte de Europa, Gran Bretaña y la
              península escandinava, no encontramos grandes alturas, pues son
              montañas viejas que estuvieron cubiertas de hielo durante miles de
              años y que han sufrido una intensa erosión. Entre las montañas
              viejas destacan los montes Urales, el Macizo Central francés y la
              cordillera escandinava. Las Dolomitas, en los Alpes italianos
              Paisaje de Yorkshire (Reino Unido) Costa de Cornwall (Gran
              Bretaña) La meseta más importante es la de la península ibérica,
              que tiene una altitud de 600 m sobre el nivel del mar y está
              dividida por el sistema central.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=mGHNhz3YX7M"
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
              href="https://es.educaplay.com/recursos-educativos/10597039-europa.html"
            >
              Actividad
            </v-btn>
          </v-col>

          <v-row>
            <v-col md="6">
              <v-card height="210">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      Las llanuras centrales: Buena parte del territorio
                      continental se encuentra ocupado por la gran llanura
                      europea que, en forma de medialuna, se extiende desde el
                      norte de Alemania hasta Rusia. Las zonas más bajas son las
                      depresiones de los Países Bajos y la desembocadura del
                      Volga en el mar Caspio. En el caso de los Países Bajos, un
                      tercio del país está bajo el nivel del mar y se han
                      construido numerosos diques para controlar las aguas del
                      mar y ganar terreno.
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card height="210">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >Las cordilleras alpinas: En Europa no existen
                        cordilleras de gran altitud, aunque cabe destacar el
                        Cáucaso, los Alpes y los Pirineos, formados por montañas
                        jóvenes situadas en el sur del continente. Los picos más
                        altos son el Elbrus (5642 m), en el Cáucaso, y el
                        Montblanc (4807 m), en la cordillera de los Alpes.</span
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
                        >El mar Negro: En él vierten sus aguas ríos caudalosos y
                        de régimen regular, como el Danubio, el Dniéster, el
                        Dniéper y el Don. Estos ríos son también ejes de
                        comunicación importantes.
                      </span>
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
                        >El mar Caspio: Es el lago más grande del mundo. En él
                        desembocan el Volga, el río más largo de Europa, y el
                        Ural, ambos ríos caudalosos. Los lagos europeos son, en
                        general, poco extensos.
                      </span>
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
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/129F4/production/_93067267_thinkstockphotos-509091292.jpg",
        },
        {
          src:
            "https://elordenmundial.com/wp-content/uploads/2019/02/Europa-Unión-Europea-Política-Democracia-Corrupción-Percepción-de-la-corrupción-2019.png",
        },

        {
          src:
            "https://elordenmundial.com/wp-content/uploads/2020/11/mapa-fronteras-primera-guerra-mundial-actual-europa.png",
        },
      ],
    };
  },
};
</script>
