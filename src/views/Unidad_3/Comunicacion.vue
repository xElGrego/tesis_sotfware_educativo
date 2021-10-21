<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        Comunicación social
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
              Los mensajes que se transmiten contienen juicios de valor que se
              sustentan en concepciones ideológicas, morales, políticas o
              religiosas. Por ejemplo, alguien dice «Eso es muy grave», «Va a
              causar mucho daño», «Es muy positivo», «Va a cambiar la
              situación», etc.; si estas frases llegan a personas que no tienen
              un criterio formado, pueden hacerlas suyas sin analizarlas. Por
              eso existen pensadores que conciben a los medios de comunicación
              como un poder que tiene la facultad de incidir en las personas, en
              su forma de pensar y de actuar. Solo unos pocos pueden acceder a
              los medios de comunicación para expresar sus ideas: los dueños,
              quienes trabajan en ellos, y la ciudadanía que bajo su criterio es
              invitada a participar. La gran mayoría de la población es
              receptora de la información que ha sido construida por los pocos
              que acceden a los medios de comunicación masiva y que buscan crear
              la opinión pública. Dentro de los factores ideológicos y morales,
              los medios de comunicación pueden promover el machismo, el racismo
              y la xenofobia, o pueden fomentar la tolerancia, la convivencia
              pacífica y el respeto a los derechos humanos de todas las
              personas. La incidencia de los medios de comunicación en la
              sociedad depende de la ideología que está detrás. Así, por
              ejemplo, a lo largo de la historia, los medios de comunicación han
              cumplido un rol importante en procesos de transformación del país,
              pues desde ellos se han dado a conocer situaciones de corrupción
              que han hecho que la población se levante y reclame sus derechos.
              Los medios de comunicación deben ser imparciales y garantizar que
              la información que difunden sea verdadera y comprobada.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=49DcPaKurhY"
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
              href="https://es.educaplay.com/recursos-educativos/10597075-comunicacion_social.html"
            >
              Actividad
            </v-btn>
          </v-col>

          <v-row>
            <v-col md="6">
              <v-card height="190">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      Se ubican aquí Internet y la inmensa gama de posibilidades
                      de comunicación que se han abierto, como las redes
                      sociales, las videollamadas, el chat, los correos
                      electrónicos y los celulares, que permiten el contacto
                      entre las personas y la circulación de información y
                      favorecen los procesos de conocimiento.
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card height="190">
                <v-card-title primary-title>
                  <div>
                    <div
                      class="subtitle-1 mb-0 text-justify"
                      align="center"
                      justify="center"
                    >
                      <span align="center" justify="center"
                        >La radio El lenguaje hablado transmite los mensajes a
                        través de ondas electromagnéticas denominadas ondas
                        hercianas. Las primeras transmisiones de radio se
                        hicieron en 1923 y ha sido el medio más difundido en
                        Ecuador y el de mayor aceptación, dadas las
                        posibilidades de acceso.
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
                        >Las TIC Surgen con la invención de las computadoras, a
                        partir de la década de 1980. Son las tecnologías de
                        última generación que han ampliado la comunicación
                        rompiendo barreras de tiempo y espacio.
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
                      <span align="center" justify="center">
                        Muy difundido en el país a partir de los años sesenta,
                        es el medio más influyente, porque combina imágenes y
                        sonidos, incluso en tiempo real.
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
            "https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150409611/39195012-silueta-grupo-business-people-discusión-medios-de-comunicación-social-concepto.jpg",
        },
        {
          src:
            "https://psicologiaymundo.com/wp-content/uploads/2020/10/medio-de-comunicacion-social.jpg",
        },

        {
          src:
            "https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150400752/38477871-redes-sociales-medios-de-comunicación-social-diversidad-celebración-concepto.jpg",
        },
      ],
    };
  },
};
</script>
