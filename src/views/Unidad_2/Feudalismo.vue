<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Feudalismo</h2>
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
              El feudalismo fue el sistema económico político y social que
              caracterizó a gran parte de la Edad Media. Se gestó en el Imperio
              carolingio cuando el emperador, para controlar el territorio, en
              lugar de crear un aparato burocrático, entregó la administración
              de territorios más pequeños a los nobles. Cuando el imperio cayó,
              los nobles tomaron más poder y consiguieron independencia en sus
              territorios. El sistema feudal implicaba que el poder para
              gobernar estaba disperso entre la nobleza, de la cual el rey
              formaba parte y de la que dependía militar y económicamente. Entre
              los siglos IX y X se produjeron en Europa las invasiones de
              vikingos y magiares, que aterraron a la población de tal manera
              que buscaron protección cerca de la nobleza, que era la que tenía
              el control de las armas. Así se estableció uno de los pilares del
              feudalismo: el vasallaje.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=ZK05C7t50dI"
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
              href="https://es.educaplay.com/recursos-educativos/10596813-el_feudalismo.html"
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
            "https://enciclopediadehistoria.com/wp-content/uploads/2018/07/feudalismo.jpg",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Feudalismo-en-edad-media.jpg",
        },

        {
          src:
            "https://wikieconomica.com/wp-content/uploads/2020/09/feudalusmo.jpg",
        },
      ],
    };
  },
};
</script>
