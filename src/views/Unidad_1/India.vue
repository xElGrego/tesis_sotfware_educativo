<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        India
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
              En la cordillera del Himalaya, en el centro sur de Asia, nacen los
              ríos Ganges e Indo, que convierten un extenso territorio, conocido
              como la península del Decán, en una región propicia para la
              agricultura. Tres mil años antes de Cristo, el pueblo de los
              drávidas, que ya contaba con cierto grado de civilización,
              habitaba la península. Los drávidas practicaban la agricultura y
              la metalurgia de bronce. Alcanzaron un avanzado grado urbanístico,
              con la construcción de ciudades como Mohenjo-Daro y Harappa. En el
              II milenio a. C., los indoeuropeos, o arios, pueblos pastores
              provenientes de las llanuras del mar Caspio, penetraron la
              península del Decán. Los arios conquistaron las ciudades
              establecidas anteriormente y organizaron pequeños reinos, lo cual
              obstaculizó la unificación de los mismos hasta que el reino de
              Magadha dominó el centro y noreste de India. Con ello, se
              convirtió en un Estado centralizado y poderoso. Tras las
              conquistas de persas y macedonios entre los siglos IV y III a. C.,
              en el año 321 a. C., el caudillo militar Chandragupta Mauria
              convirtió a la India en un imperio con grandes obras de
              urbanización, pujante comercio y uso generalizado de la moneda.
              Estatua de Chandragupta Mauria, creador del Imperio indio
              Civilización del Valle del Indo A S I A río Ganges mar Arábigo
              golfo de Bengala océano Índico DCD CS.4.1.6 ¿Exisitó un pueblo
              ario? Prohibida su comercialización Prohibida su reproducción 97
              Fuente primaria Código de Manú Por crímenes cometidos en esta
              vida, o por faltas de una existencia precedente, algunos hombres
              de corazón perverso padecen ciertas enfermedades o deformidades:
              el que ha robado oro a un brahmán padece una enfermedad de las
              uñas; el bebedor de licores prohibidos tiene los dientes negros;
              el asesino de un brahmán sufre una consunción pulmonar; el hombre
              que ha mancillado el lecho del padre espiritual es mutilado.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=2togva9WM6I"
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
              href="https://es.educaplay.com/recursos-educativos/10595773-la_india.html"
            >
              Actividad
            </v-btn>
          </v-col>
          <h2 class="mb-5">Características de la antigua India</h2>
          <v-row>
            <v-col md="6">
              <v-card height="120">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >La sociedad era patriarcal y teocrática. El gobernante
                        también era sacerdote, y gobernaba en nombre de la
                        divinidad.</span
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
                        >Desarrollaron las matemáticas y usaron la cifra cero
                        como valor nulo. Los conocimientos matemáticos de los
                        indios fueron transmitidos a Occidente por los árabes
                        .</span
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
                        >Determinaron que la Tierra giraba alrededor de su
                        propio eje, y establecieron un calendario de doce meses
                        .</span
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
                        consistencia de cerámica.</span
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
            "http://2.bp.blogspot.com/_bhmNB14g6iU/SAQXFPbPXlI/AAAAAAAAAA8/v6xLdvblu4A/s400/arq+1.JPG",
        },
        {
          src: "https://static.dw.com/image/38856840_303.jpg",
        },

        {
          src:
            "https://www.caracteristicas.co/wp-content/uploads/2018/12/India-1-e1585355432124.jpg",
        },
      ],
    };
  },
};
</script>
