<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Hebreos y Fenicios</h2>
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
              Los hebreos eran un conjunto de tribus de pastores seminómadas con
              una organización patriarcal, es decir, la autoridad residía en el
              cabeza de la familia y de la tribu (patriarca). Eran originarios
              de Mesopotamia, y en el II milenio a. C., se desplazaron hacia
              Egipto hasta que, finalmente, se establecieron en Canaán, al sur
              de Fenicia. Los hebreos, que hoy son conocidos como judíos, eran
              monoteístas, es decir, creían en un dios único. Su religión
              influyó en el cristianismo y el islam. Sus textos sagrados son la
              Torá, que es la palabra revelada por Dios, y el Talmud, una
              recopilación de escritos con las normas que rigen la vida
              cotidiana. Recorrido de Abraham y sus descendientes. La Biblia La
              Torá son cinco libros que también forman parte de la Biblia
              cristiana conocida como Antiguo Testamento. Los cristianos llaman
              a la Torá, Pentateuco. Además de estos cinco libros, los libros de
              los profetas y los sapienciales también forman parte del Antiguo
              Testamento. Hebreos y fenicios Rollo de la Torá. ¿De qué idioma
              provienen los nombres Raquel, Sara, Rebeca, José, Jesús, Moisés,
              Efraín, Rubén? Prohibida su comercialización Prohibida su
              reproducción 91 La colonización fenicia A inicios del I milenio a.
              C., ciudades como Biblos, Sidón o Tiro crearon varias colonias y
              factorías comerciales en el litoral mediterráneo del norte de
              África; en las islas de Chipre, Sicilia y Cerdeña, y en el sur de
              la península ibérica. No conquistaron estos territorios, sino que
              establecieron vínculos comerciales. Los fenicios eran un pueblo
              establecido en la costa oriental del mar Mediterráneo, que creó
              una importante cultura entre el año 1500 a. C. y el siglo IV a.
              C., cuando Alejandro Magno conquistó el territorio que ocupaban.
              Este territorio se organizaba en ciudades-Estado autónomas, que
              solo se unían cuando era necesario defenderse de un enemigo común.
              Cada ciudad tenía su propio rey. Los fenicios fueron famosos en la
              Antigüedad por ser expertos navegantes y mercaderes, que
              comerciaban tanto con sus productos como con los de los pueblos
              vecinos, mediante el trueque. Solo a partir del año 450 a. C.
              empezaron a acuñar moneda. Eran reconocidos la madera de cedro o
              sus objetos de marfil, de orfebrería y de vidrio. Pero lo más
              destacable fueron sus telas teñidas de color púrpura, a partir de
              un pigmento obtenido de un molusco marino. La mayor aportación de
              los fenicios a la cultura occidental fue la creación de un
              alfabeto. Cada símbolo correspondía a un sonido, por lo que con
              solo veintidós símbolos podían escribir cualquier palabra. Se
              simplificó la escritura y fue la base de los alfabetos griego y
              latino. El alfabeto fenicio dio origen a los alfabetos griego y
              latino.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=53jchtohgts"
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
              href="https://es.educaplay.com/recursos-educativos/10595599-hebreos_y_fenicios.html"
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
          src:
            "https://encolombia.com/wp-content/uploads/2019/11/Civilización-Hebrea.jpg",
        },
        {
          src:
            "https://www.escuelapedia.com/wp-content/uploads/Hebreos-persas-y-fenicios.jpg",
        },

        {
          src: "https://www.escuelapedia.com/wp-content/uploads/Hebreos.jpg",
        },
      ],
    };
  },
};
</script>
