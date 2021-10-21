<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">El Islam y Occidente</h2>
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
              La expansión del islam En los inicios de su predicación, Mahoma
              tuvo que enfrentarse a la oposición de los dirigentes de La Meca,
              que no aceptaban el carácter monoteísta de la religión propuesta.
              Por ello, el profeta se vio obligado a huir a la ciudad de Medina
              en el 622. Este evento, conocido como hégira, es la fecha que da
              inicio al calendario musulmán. Diez años más tarde, Mahoma regresó
              a La Meca con un ejército constituido y muchos seguidores. Así, se
              convirtió en líder religioso y político y conquistó gran parte de
              la península arábiga, que fue islamizada. En el siglo VIII, el
              imperio llegó a su máxima extensión: incluyó Arabia, el norte del
              África e incluso parte de la península ibérica. Al igual que el
              judaísmo y el cristianismo, el islam también es una religión
              monoteísta. Nació en el seno de la cultura árabe en el siglo VII y
              se convirtió en el elemento unificador del mundo árabe. Los
              seguidores del islam (que significa ‘sometimiento’) se denominan
              musulmanes, que significa ‘creyentes’, y su libro sagrado es el
              Corán, el mismo que, según la creencia musulmana, fue dictado por
              Alá (Dios) al profeta Mahoma. En él se establecen los cinco
              preceptos fundamentales o pilares del islam:
            </p>
            <v-col cols="12" sm="12">
              <v-list color="transparent">
                <template v-for="(listita, index) in lista">
                  <v-list-item v-if="listita.action" :key="listita.title">
                    <v-list-item-action>
                      <v-icon>{{ listita.action }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>{{ listita.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-else-if="listita.divider"
                    :key="index"
                    :inset="inset"
                  ></v-divider>
                </template>
              </v-list>
            </v-col>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=7y0wq8antcM"
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
              href="https://es.educaplay.com/recursos-educativos/10596866-islam_y_oceania.html"
            >
              Actividad
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
          src: "https://okdiario.com/img/2018/07/31/mosque-615415_192011.jpg",
        },
        {
          src:
            "https://www.ngenespanol.com/wp-content/uploads/2018/08/El-islam-la-religión-de-mayor-crecimiento.jpg",
        },

        {
          src:
            "https://concepto.de/wp-content/uploads/2020/02/islam-e1582829142217.jpg",
        },
      ],
      inset: true,
      lista: [
        {
          action: "mdi-label",
          title: "No hay más dios que Alá y Mahoma es su profeta.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title:
            "La oración se hace cinco veces al día en dirección a la ciudad de La Meca.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title:
            "En el Ramadán (fiesta sagrada) no se come o bebe durante el día.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title: "Existe la obligación de dar limosnas y ayudar a los pobres.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title:
            "Todo musulmán debe peregrinar a La Meca al menos una vez en su vida.",
        },
      ],
    };
  },
};
</script>
