<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Roma</h2>
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
              En el siglo VIII a. C., la península itálica estaba habitada por
              diferentes pueblos: latinos, etruscos y griegos. Todos ellos
              contribuyeron a la formación de la civilización romana. Las
              excavaciones arqueológicas señalan que Roma surgió de la unión de
              varias aldeas ubicadas al margen del río Tíber. Pero los romanos
              explicaban la fundación de Roma a través de la leyenda de Rómulo y
              Remo, hijos de Marte, dios de la guerra, que fueron abandonados
              por su tío; una loba los recogió y alimentó; luego, unos pastores
              los criaron. Al crecer Rómulo, mató a su hermano y fundó Roma.
              Esta leyenda llevó a los romanos a construir un pasado mítico en
              el cual sustentar su identidad, y a pensar que el futuro les
              deparaba la grandeza por medio de las armas. La monarquía romana
              Los latinos (de la región de Lazio) se organizaron como una
              monarquía. Se sabe que los reyes tenían poder absoluto, impartían
              leyes y justicia, comandaban el ejército y también eran las
              autoridades religiosas. En el siglo VII a. C., los etruscos
              invadieron a los latinos e impusieron sus dioses, leyes, arte y
              alfabeto. Bajo la monarquía etrusca, Roma creció en importancia.
              Se construyeron los primeros acueductos, drenajes y obras
              públicas. La vida en la ciudad mejoró y creció económicamente
              gracias a que estaba al paso de las rutas comerciales más
              relevantes.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=cknXSvinhJo"
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
            Ver video
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
            "https://canalhistoria.es/wp-content/uploads/2015/06/Inventos_Roma_portada-scaled.jpg",
        },
        {
          src:
            "https://cdn.zendalibros.com/wp-content/uploads/orgias-romanas.jpg",
        },

        {
          src:
            "https://enciclopediadehistoria.com/wp-content/uploads/2018/11/pantheon.jpg",
        },
      ],
    };
  },
};
</script>
